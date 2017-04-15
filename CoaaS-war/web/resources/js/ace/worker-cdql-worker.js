importScripts("worker-base.js");
ace.define('ace/worker/cdql-worker', ["require", "exports", "module", "ace/lib/oop", "ace/worker/mirror"], function (require, exports, module) {
    "use strict";
    var ace_require = require;
    require = undefined;
    var Honey = {'requirePath': ['..']}; // walk up to js folder, see Honey docs
    importScripts("../lib/require.js");
    var antlr4_require = require;
    require = ace_require;
    var oop = require("ace/lib/oop");
    var Mirror = require("ace/worker/mirror").Mirror;

    // load antlr4 and myLanguage
    var antlr4, cdqlv3;
    try {
        require = antlr4_require;
        antlr4 = require('antlr4/index');
        cdqlv3 = require('cdqlv3/index');
    } finally {
        require = ace_require;
    }

    var CdqlWorker = function (sender) {
        Mirror.call(this, sender);
        this.setTimeout(200);
        this.$dialect = null;
    };

    oop.inherits(CdqlWorker, Mirror);

    (function () {

        this.onUpdate = function () {
            var value = this.doc.getValue();
            var annotations = validate(value);
            this.sender.emit("annotate", annotations);
        };

    }).call(CdqlWorker.prototype);

    exports.CdqlWorker = CdqlWorker;
});

var validate = function (input) {
    var stream = CharStreams.fromString(input);
    var lexer = new cdqlv3.MyLexer(stream);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new cdqlv3.MyParser(tokens);
    var annotations = [];
    var listener = new AnnotatingErrorListener(annotations)
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    parser.parseMyRule();
    return annotations;
};