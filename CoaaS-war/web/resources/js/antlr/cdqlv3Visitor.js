// Generated from /Users/ali/CDQLParserV3/cdqlv3.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by cdqlv3Parser.

function cdqlv3Visitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

cdqlv3Visitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
cdqlv3Visitor.prototype.constructor = cdqlv3Visitor;

// Visit a parse tree produced by cdqlv3Parser#cdql.
cdqlv3Visitor.prototype.visitCdql = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#pull_clause.
cdqlv3Visitor.prototype.visitPull_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#select_clause.
cdqlv3Visitor.prototype.visitSelect_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#context_attribute.
cdqlv3Visitor.prototype.visitContext_attribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#entity_title.
cdqlv3Visitor.prototype.visitEntity_title = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#attribute_title.
cdqlv3Visitor.prototype.visitAttribute_title = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#function_call.
cdqlv3Visitor.prototype.visitFunction_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#function_title.
cdqlv3Visitor.prototype.visitFunction_title = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#operand.
cdqlv3Visitor.prototype.visitOperand = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#context_value.
cdqlv3Visitor.prototype.visitContext_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#when_clause.
cdqlv3Visitor.prototype.visitWhen_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#occurrence_clause.
cdqlv3Visitor.prototype.visitOccurrence_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#condition_clause.
cdqlv3Visitor.prototype.visitCondition_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#expr_op.
cdqlv3Visitor.prototype.visitExpr_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#constraint_clause.
cdqlv3Visitor.prototype.visitConstraint_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#left_element.
cdqlv3Visitor.prototype.visitLeft_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#right_element.
cdqlv3Visitor.prototype.visitRight_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#target_element.
cdqlv3Visitor.prototype.visitTarget_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#relational_op.
cdqlv3Visitor.prototype.visitRelational_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#between_op.
cdqlv3Visitor.prototype.visitBetween_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#is_or_is_not.
cdqlv3Visitor.prototype.visitIs_or_is_not = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#define_clause.
cdqlv3Visitor.prototype.visitDefine_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#context_entity.
cdqlv3Visitor.prototype.visitContext_entity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by cdqlv3Parser#entity_id.
cdqlv3Visitor.prototype.visitEntity_id = function(ctx) {
  return this.visitChildren(ctx);
};



exports.cdqlv3Visitor = cdqlv3Visitor;