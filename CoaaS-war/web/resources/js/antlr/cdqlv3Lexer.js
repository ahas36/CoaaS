// Generated from /Users/ali/CDQLParserV3/cdqlv3.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00023\u0195\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u00b7",
    "\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0006\u001b\u0143\n\u001b\r\u001b\u000e\u001b\u0144\u0003\u001c",
    "\u0005\u001c\u0148\n\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0006\u001d\u014f\n\u001d\r\u001d\u000e\u001d\u0150",
    "\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f",
    "\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003",
    "$\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003",
    "\'\u0003(\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003",
    ",\u0003,\u0003-\u0003-\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    "/\u0003/\u0003/\u0003/\u0003/\u0005/\u0185\n/\u00030\u00030\u00030\u0003",
    "0\u00050\u018b\n0\u00031\u00031\u00031\u00031\u00032\u00062\u0192\n",
    "2\r2\u000e2\u0193\u0002\u00023\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019",
    "\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015",
    ")\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f",
    "= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a2c3\u0003\u0002\u0004\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"\u0005\u0002C\\aac|\u019e\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002",
    "\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002",
    "\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u0002",
    "1\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003",
    "\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002",
    "\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002",
    "\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002",
    "\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002",
    "G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003",
    "\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002",
    "\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002",
    "\u0002\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002",
    "\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002",
    "]\u0003\u0002\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003",
    "\u0002\u0002\u0002\u0002c\u0003\u0002\u0002\u0002\u0003e\u0003\u0002",
    "\u0002\u0002\u0005j\u0003\u0002\u0002\u0002\u0007q\u0003\u0002\u0002",
    "\u0002\t\u0080\u0003\u0002\u0002\u0002\u000b\u00b6\u0003\u0002\u0002",
    "\u0002\r\u00b8\u0003\u0002\u0002\u0002\u000f\u00bf\u0003\u0002\u0002",
    "\u0002\u0011\u00c7\u0003\u0002\u0002\u0002\u0013\u00cd\u0003\u0002\u0002",
    "\u0002\u0015\u00d2\u0003\u0002\u0002\u0002\u0017\u00dc\u0003\u0002\u0002",
    "\u0002\u0019\u00e7\u0003\u0002\u0002\u0002\u001b\u00f1\u0003\u0002\u0002",
    "\u0002\u001d\u00fb\u0003\u0002\u0002\u0002\u001f\u0105\u0003\u0002\u0002",
    "\u0002!\u010a\u0003\u0002\u0002\u0002#\u0113\u0003\u0002\u0002\u0002",
    "%\u0118\u0003\u0002\u0002\u0002\'\u011d\u0003\u0002\u0002\u0002)\u0122",
    "\u0003\u0002\u0002\u0002+\u0128\u0003\u0002\u0002\u0002-\u012e\u0003",
    "\u0002\u0002\u0002/\u0133\u0003\u0002\u0002\u00021\u0136\u0003\u0002",
    "\u0002\u00023\u0139\u0003\u0002\u0002\u00025\u0142\u0003\u0002\u0002",
    "\u00027\u0147\u0003\u0002\u0002\u00029\u014e\u0003\u0002\u0002\u0002",
    ";\u0154\u0003\u0002\u0002\u0002=\u0156\u0003\u0002\u0002\u0002?\u0158",
    "\u0003\u0002\u0002\u0002A\u015a\u0003\u0002\u0002\u0002C\u015c\u0003",
    "\u0002\u0002\u0002E\u015e\u0003\u0002\u0002\u0002G\u0160\u0003\u0002",
    "\u0002\u0002I\u0162\u0003\u0002\u0002\u0002K\u0165\u0003\u0002\u0002",
    "\u0002M\u0169\u0003\u0002\u0002\u0002O\u016c\u0003\u0002\u0002\u0002",
    "Q\u016f\u0003\u0002\u0002\u0002S\u0171\u0003\u0002\u0002\u0002U\u0173",
    "\u0003\u0002\u0002\u0002W\u0175\u0003\u0002\u0002\u0002Y\u0177\u0003",
    "\u0002\u0002\u0002[\u0179\u0003\u0002\u0002\u0002]\u0184\u0003\u0002",
    "\u0002\u0002_\u018a\u0003\u0002\u0002\u0002a\u018c\u0003\u0002\u0002",
    "\u0002c\u0191\u0003\u0002\u0002\u0002ef\u0007r\u0002\u0002fg\u0007w",
    "\u0002\u0002gh\u0007n\u0002\u0002hi\u0007n\u0002\u0002i\u0004\u0003",
    "\u0002\u0002\u0002jk\u0007f\u0002\u0002kl\u0007g\u0002\u0002lm\u0007",
    "h\u0002\u0002mn\u0007k\u0002\u0002no\u0007p\u0002\u0002op\u0007g\u0002",
    "\u0002p\u0006\u0003\u0002\u0002\u0002qr\u0007e\u0002\u0002rs\u0007q",
    "\u0002\u0002st\u0007p\u0002\u0002tu\u0007v\u0002\u0002uv\u0007g\u0002",
    "\u0002vw\u0007z\u0002\u0002wx\u0007v\u0002\u0002xy\u0007\"\u0002\u0002",
    "yz\u0007g\u0002\u0002z{\u0007p\u0002\u0002{|\u0007v\u0002\u0002|}\u0007",
    "k\u0002\u0002}~\u0007v\u0002\u0002~\u007f\u0007{\u0002\u0002\u007f\b",
    "\u0003\u0002\u0002\u0002\u0080\u0081\u0007e\u0002\u0002\u0081\u0082",
    "\u0007q\u0002\u0002\u0082\u0083\u0007p\u0002\u0002\u0083\u0084\u0007",
    "v\u0002\u0002\u0084\u0085\u0007g\u0002\u0002\u0085\u0086\u0007z\u0002",
    "\u0002\u0086\u0087\u0007v\u0002\u0002\u0087\u0088\u0007\"\u0002\u0002",
    "\u0088\u0089\u0007h\u0002\u0002\u0089\u008a\u0007w\u0002\u0002\u008a",
    "\u008b\u0007p\u0002\u0002\u008b\u008c\u0007e\u0002\u0002\u008c\u008d",
    "\u0007v\u0002\u0002\u008d\u008e\u0007k\u0002\u0002\u008e\u008f\u0007",
    "q\u0002\u0002\u008f\u0090\u0007p\u0002\u0002\u0090\n\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u0007R\u0002\u0002\u0092\u0093\u0007g\u0002\u0002",
    "\u0093\u0094\u0007t\u0002\u0002\u0094\u0095\u0007u\u0002\u0002\u0095",
    "\u0096\u0007q\u0002\u0002\u0096\u00b7\u0007p\u0002\u0002\u0097\u0098",
    "\u0007Q\u0002\u0002\u0098\u0099\u0007t\u0002\u0002\u0099\u009a\u0007",
    "i\u0002\u0002\u009a\u009b\u0007c\u0002\u0002\u009b\u009c\u0007p\u0002",
    "\u0002\u009c\u009d\u0007k\u0002\u0002\u009d\u009e\u0007|\u0002\u0002",
    "\u009e\u009f\u0007c\u0002\u0002\u009f\u00a0\u0007v\u0002\u0002\u00a0",
    "\u00a1\u0007k\u0002\u0002\u00a1\u00a2\u0007q\u0002\u0002\u00a2\u00b7",
    "\u0007p\u0002\u0002\u00a3\u00a4\u0007N\u0002\u0002\u00a4\u00a5\u0007",
    "q\u0002\u0002\u00a5\u00a6\u0007e\u0002\u0002\u00a6\u00a7\u0007c\u0002",
    "\u0002\u00a7\u00a8\u0007v\u0002\u0002\u00a8\u00a9\u0007k\u0002\u0002",
    "\u00a9\u00aa\u0007q\u0002\u0002\u00aa\u00b7\u0007p\u0002\u0002\u00ab",
    "\u00ac\u0007G\u0002\u0002\u00ac\u00ad\u0007x\u0002\u0002\u00ad\u00ae",
    "\u0007g\u0002\u0002\u00ae\u00af\u0007p\u0002\u0002\u00af\u00b7\u0007",
    "v\u0002\u0002\u00b0\u00b1\u0007F\u0002\u0002\u00b1\u00b2\u0007g\u0002",
    "\u0002\u00b2\u00b3\u0007x\u0002\u0002\u00b3\u00b4\u0007k\u0002\u0002",
    "\u00b4\u00b5\u0007e\u0002\u0002\u00b5\u00b7\u0007g\u0002\u0002\u00b6",
    "\u0091\u0003\u0002\u0002\u0002\u00b6\u0097\u0003\u0002\u0002\u0002\u00b6",
    "\u00a3\u0003\u0002\u0002\u0002\u00b6\u00ab\u0003\u0002\u0002\u0002\u00b6",
    "\u00b0\u0003\u0002\u0002\u0002\u00b7\f\u0003\u0002\u0002\u0002\u00b8",
    "\u00b9\u0007g\u0002\u0002\u00b9\u00ba\u0007p\u0002\u0002\u00ba\u00bb",
    "\u0007v\u0002\u0002\u00bb\u00bc\u0007k\u0002\u0002\u00bc\u00bd\u0007",
    "v\u0002\u0002\u00bd\u00be\u0007{\u0002\u0002\u00be\u000e\u0003\u0002",
    "\u0002\u0002\u00bf\u00c0\u0007k\u0002\u0002\u00c0\u00c1\u0007u\u0002",
    "\u0002\u00c1\u00c2\u0007\"\u0002\u0002\u00c2\u00c3\u0007h\u0002\u0002",
    "\u00c3\u00c4\u0007t\u0002\u0002\u00c4\u00c5\u0007q\u0002\u0002\u00c5",
    "\u00c6\u0007o\u0002\u0002\u00c6\u0010\u0003\u0002\u0002\u0002\u00c7",
    "\u00c8\u0007k\u0002\u0002\u00c8\u00c9\u0007u\u0002\u0002\u00c9\u00ca",
    "\u0007\"\u0002\u0002\u00ca\u00cb\u0007q\u0002\u0002\u00cb\u00cc\u0007",
    "p\u0002\u0002\u00cc\u0012\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007",
    "j\u0002\u0002\u00ce\u00cf\u0007v\u0002\u0002\u00cf\u00d0\u0007v\u0002",
    "\u0002\u00d0\u00d1\u0007r\u0002\u0002\u00d1\u0014\u0003\u0002\u0002",
    "\u0002\u00d2\u00d3\u0007t\u0002\u0002\u00d3\u00d4\u0007H\u0002\u0002",
    "\u00d4\u00d5\u0007w\u0002\u0002\u00d5\u00d6\u0007p\u0002\u0002\u00d6",
    "\u00d7\u0007e\u0002\u0002\u00d7\u00d8\u0007v\u0002\u0002\u00d8\u00d9",
    "\u0007k\u0002\u0002\u00d9\u00da\u0007q\u0002\u0002\u00da\u00db\u0007",
    "p\u0002\u0002\u00db\u0016\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007",
    "u\u0002\u0002\u00dd\u00de\u0007k\u0002\u0002\u00de\u00df\u0007v\u0002",
    "\u0002\u00df\u00e0\u0007w\u0002\u0002\u00e0\u00e1\u0007c\u0002\u0002",
    "\u00e1\u00e2\u0007v\u0002\u0002\u00e2\u00e3\u0007k\u0002\u0002\u00e3",
    "\u00e4\u0007q\u0002\u0002\u00e4\u00e5\u0007p\u0002\u0002\u00e5\u00e6",
    "\u0007u\u0002\u0002\u00e6\u0018\u0003\u0002\u0002\u0002\u00e7\u00e8",
    "\u0007u\u0002\u0002\u00e8\u00e9\u0007k\u0002\u0002\u00e9\u00ea\u0007",
    "v\u0002\u0002\u00ea\u00eb\u0007w\u0002\u0002\u00eb\u00ec\u0007c\u0002",
    "\u0002\u00ec\u00ed\u0007v\u0002\u0002\u00ed\u00ee\u0007k\u0002\u0002",
    "\u00ee\u00ef\u0007q\u0002\u0002\u00ef\u00f0\u0007p\u0002\u0002\u00f0",
    "\u001a\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007u\u0002\u0002\u00f2",
    "\u00f3\u0007H\u0002\u0002\u00f3\u00f4\u0007w\u0002\u0002\u00f4\u00f5",
    "\u0007p\u0002\u0002\u00f5\u00f6\u0007e\u0002\u0002\u00f6\u00f7\u0007",
    "v\u0002\u0002\u00f7\u00f8\u0007k\u0002\u0002\u00f8\u00f9\u0007q\u0002",
    "\u0002\u00f9\u00fa\u0007p\u0002\u0002\u00fa\u001c\u0003\u0002\u0002",
    "\u0002\u00fb\u00fc\u0007c\u0002\u0002\u00fc\u00fd\u0007H\u0002\u0002",
    "\u00fd\u00fe\u0007w\u0002\u0002\u00fe\u00ff\u0007p\u0002\u0002\u00ff",
    "\u0100\u0007e\u0002\u0002\u0100\u0101\u0007v\u0002\u0002\u0101\u0102",
    "\u0007k\u0002\u0002\u0102\u0103\u0007q\u0002\u0002\u0103\u0104\u0007",
    "p\u0002\u0002\u0104\u001e\u0003\u0002\u0002\u0002\u0105\u0106\u0007",
    "r\u0002\u0002\u0106\u0107\u0007w\u0002\u0002\u0107\u0108\u0007u\u0002",
    "\u0002\u0108\u0109\u0007j\u0002\u0002\u0109 \u0003\u0002\u0002\u0002",
    "\u010a\u010b\u0007n\u0002\u0002\u010b\u010c\u0007k\u0002\u0002\u010c",
    "\u010d\u0007h\u0002\u0002\u010d\u010e\u0007g\u0002\u0002\u010e\u010f",
    "\u0007v\u0002\u0002\u010f\u0110\u0007k\u0002\u0002\u0110\u0111\u0007",
    "o\u0002\u0002\u0111\u0112\u0007g\u0002\u0002\u0112\"\u0003\u0002\u0002",
    "\u0002\u0113\u0114\u0007k\u0002\u0002\u0114\u0115\u0007p\u0002\u0002",
    "\u0115\u0116\u0007v\u0002\u0002\u0116\u0117\u0007q\u0002\u0002\u0117",
    "$\u0003\u0002\u0002\u0002\u0118\u0119\u0007f\u0002\u0002\u0119\u011a",
    "\u0007c\u0002\u0002\u011a\u011b\u0007v\u0002\u0002\u011b\u011c\u0007",
    "g\u0002\u0002\u011c&\u0003\u0002\u0002\u0002\u011d\u011e\u0007y\u0002",
    "\u0002\u011e\u011f\u0007j\u0002\u0002\u011f\u0120\u0007g\u0002\u0002",
    "\u0120\u0121\u0007p\u0002\u0002\u0121(\u0003\u0002\u0002\u0002\u0122",
    "\u0123\u0007g\u0002\u0002\u0123\u0124\u0007x\u0002\u0002\u0124\u0125",
    "\u0007g\u0002\u0002\u0125\u0126\u0007t\u0002\u0002\u0126\u0127\u0007",
    "{\u0002\u0002\u0127*\u0003\u0002\u0002\u0002\u0128\u0129\u0007w\u0002",
    "\u0002\u0129\u012a\u0007p\u0002\u0002\u012a\u012b\u0007v\u0002\u0002",
    "\u012b\u012c\u0007k\u0002\u0002\u012c\u012d\u0007n\u0002\u0002\u012d",
    ",\u0003\u0002\u0002\u0002\u012e\u012f\u0007p\u0002\u0002\u012f\u0130",
    "\u0007w\u0002\u0002\u0130\u0131\u0007n\u0002\u0002\u0131\u0132\u0007",
    "n\u0002\u0002\u0132.\u0003\u0002\u0002\u0002\u0133\u0134\u0007c\u0002",
    "\u0002\u0134\u0135\u0007u\u0002\u0002\u01350\u0003\u0002\u0002\u0002",
    "\u0136\u0137\u0007k\u0002\u0002\u0137\u0138\u0007u\u0002\u0002\u0138",
    "2\u0003\u0002\u0002\u0002\u0139\u013a\u0007d\u0002\u0002\u013a\u013b",
    "\u0007g\u0002\u0002\u013b\u013c\u0007v\u0002\u0002\u013c\u013d\u0007",
    "y\u0002\u0002\u013d\u013e\u0007g\u0002\u0002\u013e\u013f\u0007g\u0002",
    "\u0002\u013f\u0140\u0007p\u0002\u0002\u01404\u0003\u0002\u0002\u0002",
    "\u0141\u0143\u00042;\u0002\u0142\u0141\u0003\u0002\u0002\u0002\u0143",
    "\u0144\u0003\u0002\u0002\u0002\u0144\u0142\u0003\u0002\u0002\u0002\u0144",
    "\u0145\u0003\u0002\u0002\u0002\u01456\u0003\u0002\u0002\u0002\u0146",
    "\u0148\u0007\u000f\u0002\u0002\u0147\u0146\u0003\u0002\u0002\u0002\u0147",
    "\u0148\u0003\u0002\u0002\u0002\u0148\u0149\u0003\u0002\u0002\u0002\u0149",
    "\u014a\u0007\f\u0002\u0002\u014a\u014b\u0003\u0002\u0002\u0002\u014b",
    "\u014c\b\u001c\u0002\u0002\u014c8\u0003\u0002\u0002\u0002\u014d\u014f",
    "\t\u0002\u0002\u0002\u014e\u014d\u0003\u0002\u0002\u0002\u014f\u0150",
    "\u0003\u0002\u0002\u0002\u0150\u014e\u0003\u0002\u0002\u0002\u0150\u0151",
    "\u0003\u0002\u0002\u0002\u0151\u0152\u0003\u0002\u0002\u0002\u0152\u0153",
    "\b\u001d\u0002\u0002\u0153:\u0003\u0002\u0002\u0002\u0154\u0155\u0007",
    "=\u0002\u0002\u0155<\u0003\u0002\u0002\u0002\u0156\u0157\u0007.\u0002",
    "\u0002\u0157>\u0003\u0002\u0002\u0002\u0158\u0159\u00070\u0002\u0002",
    "\u0159@\u0003\u0002\u0002\u0002\u015a\u015b\u0007,\u0002\u0002\u015b",
    "B\u0003\u0002\u0002\u0002\u015c\u015d\u0007?\u0002\u0002\u015dD\u0003",
    "\u0002\u0002\u0002\u015e\u015f\u0007>\u0002\u0002\u015fF\u0003\u0002",
    "\u0002\u0002\u0160\u0161\u0007@\u0002\u0002\u0161H\u0003\u0002\u0002",
    "\u0002\u0162\u0163\u0007#\u0002\u0002\u0163\u0164\u0007?\u0002\u0002",
    "\u0164J\u0003\u0002\u0002\u0002\u0165\u0166\u0007p\u0002\u0002\u0166",
    "\u0167\u0007q\u0002\u0002\u0167\u0168\u0007v\u0002\u0002\u0168L\u0003",
    "\u0002\u0002\u0002\u0169\u016a\u0007>\u0002\u0002\u016a\u016b\u0007",
    "?\u0002\u0002\u016bN\u0003\u0002\u0002\u0002\u016c\u016d\u0007@\u0002",
    "\u0002\u016d\u016e\u0007?\u0002\u0002\u016eP\u0003\u0002\u0002\u0002",
    "\u016f\u0170\u0007+\u0002\u0002\u0170R\u0003\u0002\u0002\u0002\u0171",
    "\u0172\u0007*\u0002\u0002\u0172T\u0003\u0002\u0002\u0002\u0173\u0174",
    "\u0007_\u0002\u0002\u0174V\u0003\u0002\u0002\u0002\u0175\u0176\u0007",
    "]\u0002\u0002\u0176X\u0003\u0002\u0002\u0002\u0177\u0178\u0007<\u0002",
    "\u0002\u0178Z\u0003\u0002\u0002\u0002\u0179\u017a\u0007y\u0002\u0002",
    "\u017a\u017b\u0007j\u0002\u0002\u017b\u017c\u0007g\u0002\u0002\u017c",
    "\u017d\u0007t\u0002\u0002\u017d\u017e\u0007g\u0002\u0002\u017e\\\u0003",
    "\u0002\u0002\u0002\u017f\u0180\u0007c\u0002\u0002\u0180\u0181\u0007",
    "p\u0002\u0002\u0181\u0185\u0007f\u0002\u0002\u0182\u0183\u0007(\u0002",
    "\u0002\u0183\u0185\u0007(\u0002\u0002\u0184\u017f\u0003\u0002\u0002",
    "\u0002\u0184\u0182\u0003\u0002\u0002\u0002\u0185^\u0003\u0002\u0002",
    "\u0002\u0186\u0187\u0007q\u0002\u0002\u0187\u018b\u0007t\u0002\u0002",
    "\u0188\u0189\u0007~\u0002\u0002\u0189\u018b\u0007~\u0002\u0002\u018a",
    "\u0186\u0003\u0002\u0002\u0002\u018a\u0188\u0003\u0002\u0002\u0002\u018b",
    "`\u0003\u0002\u0002\u0002\u018c\u018d\u0007z\u0002\u0002\u018d\u018e",
    "\u0007q\u0002\u0002\u018e\u018f\u0007t\u0002\u0002\u018fb\u0003\u0002",
    "\u0002\u0002\u0190\u0192\t\u0003\u0002\u0002\u0191\u0190\u0003\u0002",
    "\u0002\u0002\u0192\u0193\u0003\u0002\u0002\u0002\u0193\u0191\u0003\u0002",
    "\u0002\u0002\u0193\u0194\u0003\u0002\u0002\u0002\u0194d\u0003\u0002",
    "\u0002\u0002\n\u0002\u00b6\u0144\u0147\u0150\u0184\u018a\u0193\u0003",
    "\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function cdqlv3Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

cdqlv3Lexer.prototype = Object.create(antlr4.Lexer.prototype);
cdqlv3Lexer.prototype.constructor = cdqlv3Lexer;

cdqlv3Lexer.EOF = antlr4.Token.EOF;
cdqlv3Lexer.PULL = 1;
cdqlv3Lexer.DEFINE = 2;
cdqlv3Lexer.CONTEXT_ENTITY = 3;
cdqlv3Lexer.CONTEXT_FUNCTION = 4;
cdqlv3Lexer.ENTITY_TYPE = 5;
cdqlv3Lexer.ENTITY = 6;
cdqlv3Lexer.IS_FROM = 7;
cdqlv3Lexer.IS_ON = 8;
cdqlv3Lexer.URI = 9;
cdqlv3Lexer.RELATIONAL_FUNCTION = 10;
cdqlv3Lexer.SITUATIONS = 11;
cdqlv3Lexer.SITUATION = 12;
cdqlv3Lexer.SITUATIONAL_FUNCTION = 13;
cdqlv3Lexer.AGGREGATION_FUNCTION = 14;
cdqlv3Lexer.PUSH = 15;
cdqlv3Lexer.LIFETIME = 16;
cdqlv3Lexer.INTO = 17;
cdqlv3Lexer.DATE = 18;
cdqlv3Lexer.WHEN = 19;
cdqlv3Lexer.EVERY = 20;
cdqlv3Lexer.UNTIL = 21;
cdqlv3Lexer.NULL = 22;
cdqlv3Lexer.AS = 23;
cdqlv3Lexer.IS = 24;
cdqlv3Lexer.BETWEEN = 25;
cdqlv3Lexer.INT = 26;
cdqlv3Lexer.NEWLINE = 27;
cdqlv3Lexer.WS = 28;
cdqlv3Lexer.SEMI = 29;
cdqlv3Lexer.COMMA = 30;
cdqlv3Lexer.DOT = 31;
cdqlv3Lexer.ALL_FIELDS = 32;
cdqlv3Lexer.EQ = 33;
cdqlv3Lexer.LTH = 34;
cdqlv3Lexer.GTH = 35;
cdqlv3Lexer.NOT_EQ = 36;
cdqlv3Lexer.NOT = 37;
cdqlv3Lexer.LET = 38;
cdqlv3Lexer.GET = 39;
cdqlv3Lexer.RPAREN = 40;
cdqlv3Lexer.LPAREN = 41;
cdqlv3Lexer.RBRACK = 42;
cdqlv3Lexer.LBRACK = 43;
cdqlv3Lexer.COLON = 44;
cdqlv3Lexer.WHERE = 45;
cdqlv3Lexer.AND = 46;
cdqlv3Lexer.OR = 47;
cdqlv3Lexer.XOR = 48;
cdqlv3Lexer.ID = 49;


cdqlv3Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

cdqlv3Lexer.prototype.literalNames = [ null, "'pull'", "'define'", "'context entity'", 
                                       "'context function'", null, "'entity'", 
                                       "'is from'", "'is on'", "'http'", 
                                       "'rFunction'", "'situations'", "'situation'", 
                                       "'sFunction'", "'aFunction'", "'push'", 
                                       "'lifetime'", "'into'", "'date'", 
                                       "'when'", "'every'", "'until'", "'null'", 
                                       "'as'", "'is'", "'between'", null, 
                                       null, null, "';'", "','", "'.'", 
                                       "'*'", "'='", "'<'", "'>'", "'!='", 
                                       "'not'", "'<='", "'>='", "')'", "'('", 
                                       "']'", "'['", "':'", "'where'", null, 
                                       null, "'xor'" ];

cdqlv3Lexer.prototype.symbolicNames = [ null, "PULL", "DEFINE", "CONTEXT_ENTITY", 
                                        "CONTEXT_FUNCTION", "ENTITY_TYPE", 
                                        "ENTITY", "IS_FROM", "IS_ON", "URI", 
                                        "RELATIONAL_FUNCTION", "SITUATIONS", 
                                        "SITUATION", "SITUATIONAL_FUNCTION", 
                                        "AGGREGATION_FUNCTION", "PUSH", 
                                        "LIFETIME", "INTO", "DATE", "WHEN", 
                                        "EVERY", "UNTIL", "NULL", "AS", 
                                        "IS", "BETWEEN", "INT", "NEWLINE", 
                                        "WS", "SEMI", "COMMA", "DOT", "ALL_FIELDS", 
                                        "EQ", "LTH", "GTH", "NOT_EQ", "NOT", 
                                        "LET", "GET", "RPAREN", "LPAREN", 
                                        "RBRACK", "LBRACK", "COLON", "WHERE", 
                                        "AND", "OR", "XOR", "ID" ];

cdqlv3Lexer.prototype.ruleNames = [ "PULL", "DEFINE", "CONTEXT_ENTITY", 
                                    "CONTEXT_FUNCTION", "ENTITY_TYPE", "ENTITY", 
                                    "IS_FROM", "IS_ON", "URI", "RELATIONAL_FUNCTION", 
                                    "SITUATIONS", "SITUATION", "SITUATIONAL_FUNCTION", 
                                    "AGGREGATION_FUNCTION", "PUSH", "LIFETIME", 
                                    "INTO", "DATE", "WHEN", "EVERY", "UNTIL", 
                                    "NULL", "AS", "IS", "BETWEEN", "INT", 
                                    "NEWLINE", "WS", "SEMI", "COMMA", "DOT", 
                                    "ALL_FIELDS", "EQ", "LTH", "GTH", "NOT_EQ", 
                                    "NOT", "LET", "GET", "RPAREN", "LPAREN", 
                                    "RBRACK", "LBRACK", "COLON", "WHERE", 
                                    "AND", "OR", "XOR", "ID" ];

cdqlv3Lexer.prototype.grammarFileName = "cdqlv3.g4";



exports.cdqlv3Lexer = cdqlv3Lexer;
