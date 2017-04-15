define("ace/mode/cdql_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

    var CdqlHighlightRules = function () {

        var keywords = (
                "pull|push|when|select|define|entity|function|aFunction|sFunctiol|rFunction|" +
                "lifetime|until|is|lt|gt|eq|gte|LTE|CHANGED|CONT|NEG|ENTITIES|as|and|or|from"
                );

        var builtinConstants = (
                "true|false"
                );

        var builtinFunctions = (
                "avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|" +
                "coalesce|ifnull|isnull|nvl|distance"
                );

        var dataTypes = (
                "$Person | $Object|$Location|$Organization|$Event|$Know|$Own|$MemberOf|$LocatedIn|$PartOf|$InvovedIn"
                );

        var keywordMapper = this.createKeywordMapper({
            "support.function": builtinFunctions,
            "keyword": keywords,
            "constant.language": builtinConstants,
            "storage.type": dataTypes
        }, "identifier", true);

        this.$rules = {
            "start": [
                {
                    token: "keyword",
                    regex: "pull",
                    next: "select"
                },
                {
                    token: "keyword",
                    regex: "push",
                    next: "select"
                }
            ],
            "select": [
                {
                    token: "text",
                    regex: "\\w+"
                }]
        };
        this.normalizeRules();
    };

    oop.inherits(CdqlHighlightRules, TextHighlightRules);

    exports.CdqlHighlightRules = CdqlHighlightRules;
});

define("ace/mode/cdql", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/cdql_highlight_rules"], function (require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var CdqlHighlightRules = require("./cdql_highlight_rules").CdqlHighlightRules;

    var Mode = function () {
        this.HighlightRules = CdqlHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);

    (function () {

        this.lineCommentStart = "--";

        this.$id = "ace/mode/cdql";

        var WorkerClient = require("ace/worker/worker_client").WorkerClient;
        this.createWorker = function (session) {
            this.$worker = new WorkerClient(["ace"], "ace/worker/cdql-worker", "CdqlWorker", "cdql-worker.js");
            this.$worker.attachToDocument(session.getDocument());

            this.$worker.on("errors", function (e) {
                session.setAnnotations(e.data);
            });

            this.$worker.on("annotate", function (e) {
                session.setAnnotations(e.data);
            });

            this.$worker.on("terminate", function () {
                session.clearAnnotations();
            });

            return this.$worker;

        };

    }).call(Mode.prototype);

    exports.Mode = Mode;

});
