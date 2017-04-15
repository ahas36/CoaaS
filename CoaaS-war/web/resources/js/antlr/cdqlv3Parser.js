// Generated from /Users/ali/CDQLParserV3/cdqlv3.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var cdqlv3Visitor = require('./cdqlv3Visitor').cdqlv3Visitor;

var grammarFileName = "cdqlv3.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00033\u00c4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0003\u0002\u0005\u0002",
    "5\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004?\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004D\n\u0004\u0007\u0004F\n\u0004\f",
    "\u0004\u000e\u0004I\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0007\u0005P\n\u0005\f\u0005\u000e\u0005S\u000b",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0007\b^\n\b\f\b\u000e\ba\u000b\b\u0003\b",
    "\u0003\b\u0003\b\u0005\bf\n\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\nn\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0005\fv\n\f\u0003\f\u0003\f\u0005\fz\n\f\u0003\r\u0003\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u0084\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0007\u000e\u008a\n\u000e\f\u000e\u000e\u000e\u008d\u000b\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u009f\n",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0005\u0016\u00ae\n\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u00b5\n\u0017\f\u0017",
    "\u000e\u0017\u00b8\u000b\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u00c0\n\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0002\u0003\u001a\u001a\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.",
    "0\u0002\u0006\u0004\u0002\u001c\u001c33\u0005\u0002\u0012\u0012\u0014",
    "\u0014\u001c\u001c\u0004\u0002\'\'02\u0004\u0002#%()\u00be\u00022\u0003",
    "\u0002\u0002\u0002\u00048\u0003\u0002\u0002\u0002\u0006;\u0003\u0002",
    "\u0002\u0002\bL\u0003\u0002\u0002\u0002\nT\u0003\u0002\u0002\u0002\f",
    "V\u0003\u0002\u0002\u0002\u000eX\u0003\u0002\u0002\u0002\u0010g\u0003",
    "\u0002\u0002\u0002\u0012m\u0003\u0002\u0002\u0002\u0014o\u0003\u0002",
    "\u0002\u0002\u0016q\u0003\u0002\u0002\u0002\u0018{\u0003\u0002\u0002",
    "\u0002\u001a\u0083\u0003\u0002\u0002\u0002\u001c\u008e\u0003\u0002\u0002",
    "\u0002\u001e\u009e\u0003\u0002\u0002\u0002 \u00a0\u0003\u0002\u0002",
    "\u0002\"\u00a2\u0003\u0002\u0002\u0002$\u00a4\u0003\u0002\u0002\u0002",
    "&\u00a6\u0003\u0002\u0002\u0002(\u00a8\u0003\u0002\u0002\u0002*\u00ad",
    "\u0003\u0002\u0002\u0002,\u00af\u0003\u0002\u0002\u0002.\u00b9\u0003",
    "\u0002\u0002\u00020\u00c1\u0003\u0002\u0002\u000224\u0005\u0004\u0003",
    "\u000235\u0005\u0016\f\u000243\u0003\u0002\u0002\u000245\u0003\u0002",
    "\u0002\u000256\u0003\u0002\u0002\u000267\u0005,\u0017\u00027\u0003\u0003",
    "\u0002\u0002\u000289\u0007\u0003\u0002\u00029:\u0005\u0006\u0004\u0002",
    ":\u0005\u0003\u0002\u0002\u0002;>\u0007+\u0002\u0002<?\u0005\b\u0005",
    "\u0002=?\u0005\u000e\b\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002",
    "\u0002\u0002?G\u0003\u0002\u0002\u0002@C\u0007 \u0002\u0002AD\u0005",
    "\b\u0005\u0002BD\u0005\u000e\b\u0002CA\u0003\u0002\u0002\u0002CB\u0003",
    "\u0002\u0002\u0002DF\u0003\u0002\u0002\u0002E@\u0003\u0002\u0002\u0002",
    "FI\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002",
    "\u0002HJ\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002JK\u0007*",
    "\u0002\u0002K\u0007\u0003\u0002\u0002\u0002LQ\u0005\n\u0006\u0002MN",
    "\u0007!\u0002\u0002NP\u0005\f\u0007\u0002OM\u0003\u0002\u0002\u0002",
    "PS\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002",
    "\u0002R\t\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002TU\u0007",
    "3\u0002\u0002U\u000b\u0003\u0002\u0002\u0002VW\u00073\u0002\u0002W\r",
    "\u0003\u0002\u0002\u0002XY\u0005\u0010\t\u0002YZ\u0007+\u0002\u0002",
    "Z_\u0005\u0012\n\u0002[\\\u0007 \u0002\u0002\\^\u0005\u0012\n\u0002",
    "][\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002",
    "\u0002_`\u0003\u0002\u0002\u0002`b\u0003\u0002\u0002\u0002a_\u0003\u0002",
    "\u0002\u0002be\u0007*\u0002\u0002cd\u0007\u0019\u0002\u0002df\u0007",
    "3\u0002\u0002ec\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002f\u000f",
    "\u0003\u0002\u0002\u0002gh\u00073\u0002\u0002h\u0011\u0003\u0002\u0002",
    "\u0002in\u0005\n\u0006\u0002jn\u0005\b\u0005\u0002kn\u0005\u000e\b\u0002",
    "ln\u0005\u0014\u000b\u0002mi\u0003\u0002\u0002\u0002mj\u0003\u0002\u0002",
    "\u0002mk\u0003\u0002\u0002\u0002ml\u0003\u0002\u0002\u0002n\u0013\u0003",
    "\u0002\u0002\u0002op\t\u0002\u0002\u0002p\u0015\u0003\u0002\u0002\u0002",
    "qr\u0007\u0015\u0002\u0002ru\u0005\u001a\u000e\u0002st\u0007\u0016\u0002",
    "\u0002tv\u0007\u001c\u0002\u0002us\u0003\u0002\u0002\u0002uv\u0003\u0002",
    "\u0002\u0002vy\u0003\u0002\u0002\u0002wx\u0007\u0017\u0002\u0002xz\u0005",
    "\u0018\r\u0002yw\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002z",
    "\u0017\u0003\u0002\u0002\u0002{|\t\u0003\u0002\u0002|\u0019\u0003\u0002",
    "\u0002\u0002}~\b\u000e\u0001\u0002~\u0084\u0005\u001e\u0010\u0002\u007f",
    "\u0080\u0007+\u0002\u0002\u0080\u0081\u0005\u001a\u000e\u0002\u0081",
    "\u0082\u0007*\u0002\u0002\u0082\u0084\u0003\u0002\u0002\u0002\u0083",
    "}\u0003\u0002\u0002\u0002\u0083\u007f\u0003\u0002\u0002\u0002\u0084",
    "\u008b\u0003\u0002\u0002\u0002\u0085\u0086\f\u0004\u0002\u0002\u0086",
    "\u0087\u0005\u001c\u000f\u0002\u0087\u0088\u0005\u001a\u000e\u0005\u0088",
    "\u008a\u0003\u0002\u0002\u0002\u0089\u0085\u0003\u0002\u0002\u0002\u008a",
    "\u008d\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008b",
    "\u008c\u0003\u0002\u0002\u0002\u008c\u001b\u0003\u0002\u0002\u0002\u008d",
    "\u008b\u0003\u0002\u0002\u0002\u008e\u008f\t\u0004\u0002\u0002\u008f",
    "\u001d\u0003\u0002\u0002\u0002\u0090\u0091\u0005 \u0011\u0002\u0091",
    "\u0092\u0005&\u0014\u0002\u0092\u0093\u0005\"\u0012\u0002\u0093\u009f",
    "\u0003\u0002\u0002\u0002\u0094\u0095\u0005$\u0013\u0002\u0095\u0096",
    "\u0005(\u0015\u0002\u0096\u0097\u0005 \u0011\u0002\u0097\u0098\u0007",
    "0\u0002\u0002\u0098\u0099\u0005\"\u0012\u0002\u0099\u009f\u0003\u0002",
    "\u0002\u0002\u009a\u009b\u0005$\u0013\u0002\u009b\u009c\u0005*\u0016",
    "\u0002\u009c\u009d\u0007\u0018\u0002\u0002\u009d\u009f\u0003\u0002\u0002",
    "\u0002\u009e\u0090\u0003\u0002\u0002\u0002\u009e\u0094\u0003\u0002\u0002",
    "\u0002\u009e\u009a\u0003\u0002\u0002\u0002\u009f\u001f\u0003\u0002\u0002",
    "\u0002\u00a0\u00a1\u0005\u0012\n\u0002\u00a1!\u0003\u0002\u0002\u0002",
    "\u00a2\u00a3\u0005\u0012\n\u0002\u00a3#\u0003\u0002\u0002\u0002\u00a4",
    "\u00a5\u0005\u0012\n\u0002\u00a5%\u0003\u0002\u0002\u0002\u00a6\u00a7",
    "\t\u0005\u0002\u0002\u00a7\'\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007",
    "\u001b\u0002\u0002\u00a9)\u0003\u0002\u0002\u0002\u00aa\u00ae\u0007",
    "\u001a\u0002\u0002\u00ab\u00ac\u0007\u001a\u0002\u0002\u00ac\u00ae\u0007",
    "\'\u0002\u0002\u00ad\u00aa\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003",
    "\u0002\u0002\u0002\u00ae+\u0003\u0002\u0002\u0002\u00af\u00b0\u0007",
    "\u0004\u0002\u0002\u00b0\u00b1\u0007\u0005\u0002\u0002\u00b1\u00b6\u0005",
    ".\u0018\u0002\u00b2\u00b3\u0007 \u0002\u0002\u00b3\u00b5\u0005.\u0018",
    "\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5\u00b8\u0003\u0002\u0002",
    "\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002",
    "\u0002\u00b7-\u0003\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002",
    "\u0002\u00b9\u00ba\u0007\b\u0002\u0002\u00ba\u00bb\u00050\u0019\u0002",
    "\u00bb\u00bc\u0007\t\u0002\u0002\u00bc\u00bf\u0007\u0007\u0002\u0002",
    "\u00bd\u00be\u0007/\u0002\u0002\u00be\u00c0\u0005\u001a\u000e\u0002",
    "\u00bf\u00bd\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002",
    "\u00c0/\u0003\u0002\u0002\u0002\u00c1\u00c2\u00073\u0002\u0002\u00c2",
    "1\u0003\u0002\u0002\u0002\u00124>CGQ_emuy\u0083\u008b\u009e\u00ad\u00b6",
    "\u00bf"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'pull'", "'define'", "'context entity'", "'context function'", 
                     null, "'entity'", "'is from'", "'is on'", "'http'", 
                     "'rFunction'", "'situations'", "'situation'", "'sFunction'", 
                     "'aFunction'", "'push'", "'lifetime'", "'into'", "'date'", 
                     "'when'", "'every'", "'until'", "'null'", "'as'", "'is'", 
                     "'between'", null, null, null, "';'", "','", "'.'", 
                     "'*'", "'='", "'<'", "'>'", "'!='", "'not'", "'<='", 
                     "'>='", "')'", "'('", "']'", "'['", "':'", "'where'", 
                     null, null, "'xor'" ];

var symbolicNames = [ null, "PULL", "DEFINE", "CONTEXT_ENTITY", "CONTEXT_FUNCTION", 
                      "ENTITY_TYPE", "ENTITY", "IS_FROM", "IS_ON", "URI", 
                      "RELATIONAL_FUNCTION", "SITUATIONS", "SITUATION", 
                      "SITUATIONAL_FUNCTION", "AGGREGATION_FUNCTION", "PUSH", 
                      "LIFETIME", "INTO", "DATE", "WHEN", "EVERY", "UNTIL", 
                      "NULL", "AS", "IS", "BETWEEN", "INT", "NEWLINE", "WS", 
                      "SEMI", "COMMA", "DOT", "ALL_FIELDS", "EQ", "LTH", 
                      "GTH", "NOT_EQ", "NOT", "LET", "GET", "RPAREN", "LPAREN", 
                      "RBRACK", "LBRACK", "COLON", "WHERE", "AND", "OR", 
                      "XOR", "ID" ];

var ruleNames =  [ "cdql", "pull_clause", "select_clause", "context_attribute", 
                   "entity_title", "attribute_title", "function_call", "function_title", 
                   "operand", "context_value", "when_clause", "occurrence_clause", 
                   "condition_clause", "expr_op", "constraint_clause", "left_element", 
                   "right_element", "target_element", "relational_op", "between_op", 
                   "is_or_is_not", "define_clause", "context_entity", "entity_id" ];

function cdqlv3Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

cdqlv3Parser.prototype = Object.create(antlr4.Parser.prototype);
cdqlv3Parser.prototype.constructor = cdqlv3Parser;

Object.defineProperty(cdqlv3Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

cdqlv3Parser.EOF = antlr4.Token.EOF;
cdqlv3Parser.PULL = 1;
cdqlv3Parser.DEFINE = 2;
cdqlv3Parser.CONTEXT_ENTITY = 3;
cdqlv3Parser.CONTEXT_FUNCTION = 4;
cdqlv3Parser.ENTITY_TYPE = 5;
cdqlv3Parser.ENTITY = 6;
cdqlv3Parser.IS_FROM = 7;
cdqlv3Parser.IS_ON = 8;
cdqlv3Parser.URI = 9;
cdqlv3Parser.RELATIONAL_FUNCTION = 10;
cdqlv3Parser.SITUATIONS = 11;
cdqlv3Parser.SITUATION = 12;
cdqlv3Parser.SITUATIONAL_FUNCTION = 13;
cdqlv3Parser.AGGREGATION_FUNCTION = 14;
cdqlv3Parser.PUSH = 15;
cdqlv3Parser.LIFETIME = 16;
cdqlv3Parser.INTO = 17;
cdqlv3Parser.DATE = 18;
cdqlv3Parser.WHEN = 19;
cdqlv3Parser.EVERY = 20;
cdqlv3Parser.UNTIL = 21;
cdqlv3Parser.NULL = 22;
cdqlv3Parser.AS = 23;
cdqlv3Parser.IS = 24;
cdqlv3Parser.BETWEEN = 25;
cdqlv3Parser.INT = 26;
cdqlv3Parser.NEWLINE = 27;
cdqlv3Parser.WS = 28;
cdqlv3Parser.SEMI = 29;
cdqlv3Parser.COMMA = 30;
cdqlv3Parser.DOT = 31;
cdqlv3Parser.ALL_FIELDS = 32;
cdqlv3Parser.EQ = 33;
cdqlv3Parser.LTH = 34;
cdqlv3Parser.GTH = 35;
cdqlv3Parser.NOT_EQ = 36;
cdqlv3Parser.NOT = 37;
cdqlv3Parser.LET = 38;
cdqlv3Parser.GET = 39;
cdqlv3Parser.RPAREN = 40;
cdqlv3Parser.LPAREN = 41;
cdqlv3Parser.RBRACK = 42;
cdqlv3Parser.LBRACK = 43;
cdqlv3Parser.COLON = 44;
cdqlv3Parser.WHERE = 45;
cdqlv3Parser.AND = 46;
cdqlv3Parser.OR = 47;
cdqlv3Parser.XOR = 48;
cdqlv3Parser.ID = 49;

cdqlv3Parser.RULE_cdql = 0;
cdqlv3Parser.RULE_pull_clause = 1;
cdqlv3Parser.RULE_select_clause = 2;
cdqlv3Parser.RULE_context_attribute = 3;
cdqlv3Parser.RULE_entity_title = 4;
cdqlv3Parser.RULE_attribute_title = 5;
cdqlv3Parser.RULE_function_call = 6;
cdqlv3Parser.RULE_function_title = 7;
cdqlv3Parser.RULE_operand = 8;
cdqlv3Parser.RULE_context_value = 9;
cdqlv3Parser.RULE_when_clause = 10;
cdqlv3Parser.RULE_occurrence_clause = 11;
cdqlv3Parser.RULE_condition_clause = 12;
cdqlv3Parser.RULE_expr_op = 13;
cdqlv3Parser.RULE_constraint_clause = 14;
cdqlv3Parser.RULE_left_element = 15;
cdqlv3Parser.RULE_right_element = 16;
cdqlv3Parser.RULE_target_element = 17;
cdqlv3Parser.RULE_relational_op = 18;
cdqlv3Parser.RULE_between_op = 19;
cdqlv3Parser.RULE_is_or_is_not = 20;
cdqlv3Parser.RULE_define_clause = 21;
cdqlv3Parser.RULE_context_entity = 22;
cdqlv3Parser.RULE_entity_id = 23;

function CdqlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_cdql;
    return this;
}

CdqlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CdqlContext.prototype.constructor = CdqlContext;

CdqlContext.prototype.define_clause = function() {
    return this.getTypedRuleContext(Define_clauseContext,0);
};

CdqlContext.prototype.pull_clause = function() {
    return this.getTypedRuleContext(Pull_clauseContext,0);
};

CdqlContext.prototype.when_clause = function() {
    return this.getTypedRuleContext(When_clauseContext,0);
};

CdqlContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitCdql(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.CdqlContext = CdqlContext;

cdqlv3Parser.prototype.cdql = function() {

    var localctx = new CdqlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, cdqlv3Parser.RULE_cdql);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.pull_clause();
        this.state = 50;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===cdqlv3Parser.WHEN) {
            this.state = 49;
            this.when_clause();
        }

        this.state = 52;
        this.define_clause();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Pull_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_pull_clause;
    return this;
}

Pull_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Pull_clauseContext.prototype.constructor = Pull_clauseContext;

Pull_clauseContext.prototype.PULL = function() {
    return this.getToken(cdqlv3Parser.PULL, 0);
};

Pull_clauseContext.prototype.select_clause = function() {
    return this.getTypedRuleContext(Select_clauseContext,0);
};

Pull_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitPull_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Pull_clauseContext = Pull_clauseContext;

cdqlv3Parser.prototype.pull_clause = function() {

    var localctx = new Pull_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, cdqlv3Parser.RULE_pull_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.match(cdqlv3Parser.PULL);
        this.state = 55;
        this.select_clause();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Select_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_select_clause;
    return this;
}

Select_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_clauseContext.prototype.constructor = Select_clauseContext;

Select_clauseContext.prototype.LPAREN = function() {
    return this.getToken(cdqlv3Parser.LPAREN, 0);
};

Select_clauseContext.prototype.RPAREN = function() {
    return this.getToken(cdqlv3Parser.RPAREN, 0);
};

Select_clauseContext.prototype.context_attribute = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Context_attributeContext);
    } else {
        return this.getTypedRuleContext(Context_attributeContext,i);
    }
};

Select_clauseContext.prototype.function_call = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Function_callContext);
    } else {
        return this.getTypedRuleContext(Function_callContext,i);
    }
};

Select_clauseContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(cdqlv3Parser.COMMA);
    } else {
        return this.getToken(cdqlv3Parser.COMMA, i);
    }
};


Select_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitSelect_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Select_clauseContext = Select_clauseContext;

cdqlv3Parser.prototype.select_clause = function() {

    var localctx = new Select_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, cdqlv3Parser.RULE_select_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.match(cdqlv3Parser.LPAREN);
        this.state = 60;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.state = 58;
            this.context_attribute();
            break;

        case 2:
            this.state = 59;
            this.function_call();
            break;

        }
        this.state = 69;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===cdqlv3Parser.COMMA) {
            this.state = 62;
            this.match(cdqlv3Parser.COMMA);
            this.state = 65;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            switch(la_) {
            case 1:
                this.state = 63;
                this.context_attribute();
                break;

            case 2:
                this.state = 64;
                this.function_call();
                break;

            }
            this.state = 71;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 72;
        this.match(cdqlv3Parser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Context_attributeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_context_attribute;
    return this;
}

Context_attributeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Context_attributeContext.prototype.constructor = Context_attributeContext;

Context_attributeContext.prototype.entity_title = function() {
    return this.getTypedRuleContext(Entity_titleContext,0);
};

Context_attributeContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(cdqlv3Parser.DOT);
    } else {
        return this.getToken(cdqlv3Parser.DOT, i);
    }
};


Context_attributeContext.prototype.attribute_title = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Attribute_titleContext);
    } else {
        return this.getTypedRuleContext(Attribute_titleContext,i);
    }
};

Context_attributeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitContext_attribute(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Context_attributeContext = Context_attributeContext;

cdqlv3Parser.prototype.context_attribute = function() {

    var localctx = new Context_attributeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, cdqlv3Parser.RULE_context_attribute);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.entity_title();
        this.state = 79;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 75;
                this.match(cdqlv3Parser.DOT);
                this.state = 76;
                this.attribute_title(); 
            }
            this.state = 81;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Entity_titleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_entity_title;
    return this;
}

Entity_titleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Entity_titleContext.prototype.constructor = Entity_titleContext;

Entity_titleContext.prototype.ID = function() {
    return this.getToken(cdqlv3Parser.ID, 0);
};

Entity_titleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitEntity_title(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Entity_titleContext = Entity_titleContext;

cdqlv3Parser.prototype.entity_title = function() {

    var localctx = new Entity_titleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, cdqlv3Parser.RULE_entity_title);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(cdqlv3Parser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Attribute_titleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_attribute_title;
    return this;
}

Attribute_titleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attribute_titleContext.prototype.constructor = Attribute_titleContext;

Attribute_titleContext.prototype.ID = function() {
    return this.getToken(cdqlv3Parser.ID, 0);
};

Attribute_titleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitAttribute_title(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Attribute_titleContext = Attribute_titleContext;

cdqlv3Parser.prototype.attribute_title = function() {

    var localctx = new Attribute_titleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, cdqlv3Parser.RULE_attribute_title);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.match(cdqlv3Parser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Function_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_function_call;
    return this;
}

Function_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_callContext.prototype.constructor = Function_callContext;

Function_callContext.prototype.function_title = function() {
    return this.getTypedRuleContext(Function_titleContext,0);
};

Function_callContext.prototype.LPAREN = function() {
    return this.getToken(cdqlv3Parser.LPAREN, 0);
};

Function_callContext.prototype.operand = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperandContext);
    } else {
        return this.getTypedRuleContext(OperandContext,i);
    }
};

Function_callContext.prototype.RPAREN = function() {
    return this.getToken(cdqlv3Parser.RPAREN, 0);
};

Function_callContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(cdqlv3Parser.COMMA);
    } else {
        return this.getToken(cdqlv3Parser.COMMA, i);
    }
};


Function_callContext.prototype.AS = function() {
    return this.getToken(cdqlv3Parser.AS, 0);
};

Function_callContext.prototype.ID = function() {
    return this.getToken(cdqlv3Parser.ID, 0);
};

Function_callContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitFunction_call(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Function_callContext = Function_callContext;

cdqlv3Parser.prototype.function_call = function() {

    var localctx = new Function_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, cdqlv3Parser.RULE_function_call);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.function_title();
        this.state = 87;
        this.match(cdqlv3Parser.LPAREN);
        this.state = 88;
        this.operand();
        this.state = 93;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===cdqlv3Parser.COMMA) {
            this.state = 89;
            this.match(cdqlv3Parser.COMMA);
            this.state = 90;
            this.operand();
            this.state = 95;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 96;
        this.match(cdqlv3Parser.RPAREN);
        this.state = 99;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        if(la_===1) {
            this.state = 97;
            this.match(cdqlv3Parser.AS);
            this.state = 98;
            this.match(cdqlv3Parser.ID);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Function_titleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_function_title;
    return this;
}

Function_titleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_titleContext.prototype.constructor = Function_titleContext;

Function_titleContext.prototype.ID = function() {
    return this.getToken(cdqlv3Parser.ID, 0);
};

Function_titleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitFunction_title(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Function_titleContext = Function_titleContext;

cdqlv3Parser.prototype.function_title = function() {

    var localctx = new Function_titleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, cdqlv3Parser.RULE_function_title);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.match(cdqlv3Parser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_operand;
    return this;
}

OperandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperandContext.prototype.constructor = OperandContext;

OperandContext.prototype.entity_title = function() {
    return this.getTypedRuleContext(Entity_titleContext,0);
};

OperandContext.prototype.context_attribute = function() {
    return this.getTypedRuleContext(Context_attributeContext,0);
};

OperandContext.prototype.function_call = function() {
    return this.getTypedRuleContext(Function_callContext,0);
};

OperandContext.prototype.context_value = function() {
    return this.getTypedRuleContext(Context_valueContext,0);
};

OperandContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitOperand(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.OperandContext = OperandContext;

cdqlv3Parser.prototype.operand = function() {

    var localctx = new OperandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, cdqlv3Parser.RULE_operand);
    try {
        this.state = 107;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            this.entity_title();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 104;
            this.context_attribute();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 105;
            this.function_call();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 106;
            this.context_value();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Context_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_context_value;
    return this;
}

Context_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Context_valueContext.prototype.constructor = Context_valueContext;

Context_valueContext.prototype.INT = function() {
    return this.getToken(cdqlv3Parser.INT, 0);
};

Context_valueContext.prototype.ID = function() {
    return this.getToken(cdqlv3Parser.ID, 0);
};

Context_valueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitContext_value(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Context_valueContext = Context_valueContext;

cdqlv3Parser.prototype.context_value = function() {

    var localctx = new Context_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, cdqlv3Parser.RULE_context_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        _la = this._input.LA(1);
        if(!(_la===cdqlv3Parser.INT || _la===cdqlv3Parser.ID)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function When_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_when_clause;
    return this;
}

When_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
When_clauseContext.prototype.constructor = When_clauseContext;

When_clauseContext.prototype.WHEN = function() {
    return this.getToken(cdqlv3Parser.WHEN, 0);
};

When_clauseContext.prototype.condition_clause = function() {
    return this.getTypedRuleContext(Condition_clauseContext,0);
};

When_clauseContext.prototype.EVERY = function() {
    return this.getToken(cdqlv3Parser.EVERY, 0);
};

When_clauseContext.prototype.INT = function() {
    return this.getToken(cdqlv3Parser.INT, 0);
};

When_clauseContext.prototype.UNTIL = function() {
    return this.getToken(cdqlv3Parser.UNTIL, 0);
};

When_clauseContext.prototype.occurrence_clause = function() {
    return this.getTypedRuleContext(Occurrence_clauseContext,0);
};

When_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitWhen_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.When_clauseContext = When_clauseContext;

cdqlv3Parser.prototype.when_clause = function() {

    var localctx = new When_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, cdqlv3Parser.RULE_when_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.match(cdqlv3Parser.WHEN);
        this.state = 112;
        this.condition_clause(0);
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===cdqlv3Parser.EVERY) {
            this.state = 113;
            this.match(cdqlv3Parser.EVERY);
            this.state = 114;
            this.match(cdqlv3Parser.INT);
        }

        this.state = 119;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===cdqlv3Parser.UNTIL) {
            this.state = 117;
            this.match(cdqlv3Parser.UNTIL);
            this.state = 118;
            this.occurrence_clause();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Occurrence_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_occurrence_clause;
    return this;
}

Occurrence_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Occurrence_clauseContext.prototype.constructor = Occurrence_clauseContext;

Occurrence_clauseContext.prototype.DATE = function() {
    return this.getToken(cdqlv3Parser.DATE, 0);
};

Occurrence_clauseContext.prototype.INT = function() {
    return this.getToken(cdqlv3Parser.INT, 0);
};

Occurrence_clauseContext.prototype.LIFETIME = function() {
    return this.getToken(cdqlv3Parser.LIFETIME, 0);
};

Occurrence_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitOccurrence_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Occurrence_clauseContext = Occurrence_clauseContext;

cdqlv3Parser.prototype.occurrence_clause = function() {

    var localctx = new Occurrence_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, cdqlv3Parser.RULE_occurrence_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << cdqlv3Parser.LIFETIME) | (1 << cdqlv3Parser.DATE) | (1 << cdqlv3Parser.INT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Condition_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_condition_clause;
    return this;
}

Condition_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Condition_clauseContext.prototype.constructor = Condition_clauseContext;

Condition_clauseContext.prototype.constraint_clause = function() {
    return this.getTypedRuleContext(Constraint_clauseContext,0);
};

Condition_clauseContext.prototype.LPAREN = function() {
    return this.getToken(cdqlv3Parser.LPAREN, 0);
};

Condition_clauseContext.prototype.condition_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Condition_clauseContext);
    } else {
        return this.getTypedRuleContext(Condition_clauseContext,i);
    }
};

Condition_clauseContext.prototype.RPAREN = function() {
    return this.getToken(cdqlv3Parser.RPAREN, 0);
};

Condition_clauseContext.prototype.expr_op = function() {
    return this.getTypedRuleContext(Expr_opContext,0);
};

Condition_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitCondition_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};



cdqlv3Parser.prototype.condition_clause = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Condition_clauseContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 24;
    this.enterRecursionRule(localctx, 24, cdqlv3Parser.RULE_condition_clause, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case cdqlv3Parser.INT:
        case cdqlv3Parser.ID:
            this.state = 124;
            this.constraint_clause();
            break;
        case cdqlv3Parser.LPAREN:
            this.state = 125;
            this.match(cdqlv3Parser.LPAREN);
            this.state = 126;
            this.condition_clause(0);
            this.state = 127;
            this.match(cdqlv3Parser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 137;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Condition_clauseContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, cdqlv3Parser.RULE_condition_clause);
                this.state = 131;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 132;
                this.expr_op();
                this.state = 133;
                this.condition_clause(3); 
            }
            this.state = 139;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Expr_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_expr_op;
    return this;
}

Expr_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_opContext.prototype.constructor = Expr_opContext;

Expr_opContext.prototype.AND = function() {
    return this.getToken(cdqlv3Parser.AND, 0);
};

Expr_opContext.prototype.XOR = function() {
    return this.getToken(cdqlv3Parser.XOR, 0);
};

Expr_opContext.prototype.OR = function() {
    return this.getToken(cdqlv3Parser.OR, 0);
};

Expr_opContext.prototype.NOT = function() {
    return this.getToken(cdqlv3Parser.NOT, 0);
};

Expr_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitExpr_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Expr_opContext = Expr_opContext;

cdqlv3Parser.prototype.expr_op = function() {

    var localctx = new Expr_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, cdqlv3Parser.RULE_expr_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        _la = this._input.LA(1);
        if(!(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (cdqlv3Parser.NOT - 37)) | (1 << (cdqlv3Parser.AND - 37)) | (1 << (cdqlv3Parser.OR - 37)) | (1 << (cdqlv3Parser.XOR - 37)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Constraint_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_constraint_clause;
    return this;
}

Constraint_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Constraint_clauseContext.prototype.constructor = Constraint_clauseContext;

Constraint_clauseContext.prototype.left_element = function() {
    return this.getTypedRuleContext(Left_elementContext,0);
};

Constraint_clauseContext.prototype.relational_op = function() {
    return this.getTypedRuleContext(Relational_opContext,0);
};

Constraint_clauseContext.prototype.right_element = function() {
    return this.getTypedRuleContext(Right_elementContext,0);
};

Constraint_clauseContext.prototype.target_element = function() {
    return this.getTypedRuleContext(Target_elementContext,0);
};

Constraint_clauseContext.prototype.between_op = function() {
    return this.getTypedRuleContext(Between_opContext,0);
};

Constraint_clauseContext.prototype.AND = function() {
    return this.getToken(cdqlv3Parser.AND, 0);
};

Constraint_clauseContext.prototype.is_or_is_not = function() {
    return this.getTypedRuleContext(Is_or_is_notContext,0);
};

Constraint_clauseContext.prototype.NULL = function() {
    return this.getToken(cdqlv3Parser.NULL, 0);
};

Constraint_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitConstraint_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Constraint_clauseContext = Constraint_clauseContext;

cdqlv3Parser.prototype.constraint_clause = function() {

    var localctx = new Constraint_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, cdqlv3Parser.RULE_constraint_clause);
    try {
        this.state = 156;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 142;
            this.left_element();
            this.state = 143;
            this.relational_op();
            this.state = 144;
            this.right_element();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 146;
            this.target_element();
            this.state = 147;
            this.between_op();
            this.state = 148;
            this.left_element();
            this.state = 149;
            this.match(cdqlv3Parser.AND);
            this.state = 150;
            this.right_element();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 152;
            this.target_element();
            this.state = 153;
            this.is_or_is_not();
            this.state = 154;
            this.match(cdqlv3Parser.NULL);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Left_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_left_element;
    return this;
}

Left_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Left_elementContext.prototype.constructor = Left_elementContext;

Left_elementContext.prototype.operand = function() {
    return this.getTypedRuleContext(OperandContext,0);
};

Left_elementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitLeft_element(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Left_elementContext = Left_elementContext;

cdqlv3Parser.prototype.left_element = function() {

    var localctx = new Left_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, cdqlv3Parser.RULE_left_element);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.operand();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Right_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_right_element;
    return this;
}

Right_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Right_elementContext.prototype.constructor = Right_elementContext;

Right_elementContext.prototype.operand = function() {
    return this.getTypedRuleContext(OperandContext,0);
};

Right_elementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitRight_element(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Right_elementContext = Right_elementContext;

cdqlv3Parser.prototype.right_element = function() {

    var localctx = new Right_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, cdqlv3Parser.RULE_right_element);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.operand();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Target_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_target_element;
    return this;
}

Target_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Target_elementContext.prototype.constructor = Target_elementContext;

Target_elementContext.prototype.operand = function() {
    return this.getTypedRuleContext(OperandContext,0);
};

Target_elementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitTarget_element(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Target_elementContext = Target_elementContext;

cdqlv3Parser.prototype.target_element = function() {

    var localctx = new Target_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, cdqlv3Parser.RULE_target_element);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.operand();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Relational_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_relational_op;
    return this;
}

Relational_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Relational_opContext.prototype.constructor = Relational_opContext;

Relational_opContext.prototype.EQ = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(cdqlv3Parser.EQ);
    } else {
        return this.getToken(cdqlv3Parser.EQ, i);
    }
};


Relational_opContext.prototype.LTH = function() {
    return this.getToken(cdqlv3Parser.LTH, 0);
};

Relational_opContext.prototype.GTH = function() {
    return this.getToken(cdqlv3Parser.GTH, 0);
};

Relational_opContext.prototype.LET = function() {
    return this.getToken(cdqlv3Parser.LET, 0);
};

Relational_opContext.prototype.GET = function() {
    return this.getToken(cdqlv3Parser.GET, 0);
};

Relational_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitRelational_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Relational_opContext = Relational_opContext;

cdqlv3Parser.prototype.relational_op = function() {

    var localctx = new Relational_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, cdqlv3Parser.RULE_relational_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        _la = this._input.LA(1);
        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (cdqlv3Parser.EQ - 33)) | (1 << (cdqlv3Parser.LTH - 33)) | (1 << (cdqlv3Parser.GTH - 33)) | (1 << (cdqlv3Parser.LET - 33)) | (1 << (cdqlv3Parser.GET - 33)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Between_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_between_op;
    return this;
}

Between_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Between_opContext.prototype.constructor = Between_opContext;

Between_opContext.prototype.BETWEEN = function() {
    return this.getToken(cdqlv3Parser.BETWEEN, 0);
};

Between_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitBetween_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Between_opContext = Between_opContext;

cdqlv3Parser.prototype.between_op = function() {

    var localctx = new Between_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, cdqlv3Parser.RULE_between_op);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(cdqlv3Parser.BETWEEN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Is_or_is_notContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_is_or_is_not;
    return this;
}

Is_or_is_notContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Is_or_is_notContext.prototype.constructor = Is_or_is_notContext;

Is_or_is_notContext.prototype.IS = function() {
    return this.getToken(cdqlv3Parser.IS, 0);
};

Is_or_is_notContext.prototype.NOT = function() {
    return this.getToken(cdqlv3Parser.NOT, 0);
};

Is_or_is_notContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitIs_or_is_not(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Is_or_is_notContext = Is_or_is_notContext;

cdqlv3Parser.prototype.is_or_is_not = function() {

    var localctx = new Is_or_is_notContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, cdqlv3Parser.RULE_is_or_is_not);
    try {
        this.state = 171;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 168;
            this.match(cdqlv3Parser.IS);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 169;
            this.match(cdqlv3Parser.IS);
            this.state = 170;
            this.match(cdqlv3Parser.NOT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Define_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_define_clause;
    return this;
}

Define_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Define_clauseContext.prototype.constructor = Define_clauseContext;

Define_clauseContext.prototype.DEFINE = function() {
    return this.getToken(cdqlv3Parser.DEFINE, 0);
};

Define_clauseContext.prototype.CONTEXT_ENTITY = function() {
    return this.getToken(cdqlv3Parser.CONTEXT_ENTITY, 0);
};

Define_clauseContext.prototype.context_entity = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Context_entityContext);
    } else {
        return this.getTypedRuleContext(Context_entityContext,i);
    }
};

Define_clauseContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(cdqlv3Parser.COMMA);
    } else {
        return this.getToken(cdqlv3Parser.COMMA, i);
    }
};


Define_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitDefine_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Define_clauseContext = Define_clauseContext;

cdqlv3Parser.prototype.define_clause = function() {

    var localctx = new Define_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, cdqlv3Parser.RULE_define_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(cdqlv3Parser.DEFINE);
        this.state = 174;
        this.match(cdqlv3Parser.CONTEXT_ENTITY);

        this.state = 175;
        this.context_entity();
        this.state = 180;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===cdqlv3Parser.COMMA) {
            this.state = 176;
            this.match(cdqlv3Parser.COMMA);
            this.state = 177;
            this.context_entity();
            this.state = 182;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Context_entityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_context_entity;
    return this;
}

Context_entityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Context_entityContext.prototype.constructor = Context_entityContext;

Context_entityContext.prototype.ENTITY = function() {
    return this.getToken(cdqlv3Parser.ENTITY, 0);
};

Context_entityContext.prototype.entity_id = function() {
    return this.getTypedRuleContext(Entity_idContext,0);
};

Context_entityContext.prototype.IS_FROM = function() {
    return this.getToken(cdqlv3Parser.IS_FROM, 0);
};

Context_entityContext.prototype.ENTITY_TYPE = function() {
    return this.getToken(cdqlv3Parser.ENTITY_TYPE, 0);
};

Context_entityContext.prototype.WHERE = function() {
    return this.getToken(cdqlv3Parser.WHERE, 0);
};

Context_entityContext.prototype.condition_clause = function() {
    return this.getTypedRuleContext(Condition_clauseContext,0);
};

Context_entityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitContext_entity(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Context_entityContext = Context_entityContext;

cdqlv3Parser.prototype.context_entity = function() {

    var localctx = new Context_entityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, cdqlv3Parser.RULE_context_entity);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(cdqlv3Parser.ENTITY);
        this.state = 184;
        this.entity_id();
        this.state = 185;
        this.match(cdqlv3Parser.IS_FROM);
        this.state = 186;
        this.match(cdqlv3Parser.ENTITY_TYPE);
        this.state = 189;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===cdqlv3Parser.WHERE) {
            this.state = 187;
            this.match(cdqlv3Parser.WHERE);
            this.state = 188;
            this.condition_clause(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Entity_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = cdqlv3Parser.RULE_entity_id;
    return this;
}

Entity_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Entity_idContext.prototype.constructor = Entity_idContext;

Entity_idContext.prototype.ID = function() {
    return this.getToken(cdqlv3Parser.ID, 0);
};

Entity_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof cdqlv3Visitor ) {
        return visitor.visitEntity_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




cdqlv3Parser.Entity_idContext = Entity_idContext;

cdqlv3Parser.prototype.entity_id = function() {

    var localctx = new Entity_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, cdqlv3Parser.RULE_entity_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(cdqlv3Parser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


cdqlv3Parser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 12:
			return this.condition_clause_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

cdqlv3Parser.prototype.condition_clause_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.cdqlv3Parser = cdqlv3Parser;
