


module.exports = String;

var
	inherit = require('./util/inherit'),
	Element = require('./Element');

function String (string)
{
	this.string = string;
}

inherit(String, Element);

String.prototype.toSQL = function String__toSQL ()
{
	var escaped = String.escape(this.string);
	return "'"+ escaped +"'";
};

String.escape = function String_escape (string)
{
	return string.replace(/'/g, "''");
};
