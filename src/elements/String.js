


module.exports = String;

var
	inherit = require('./../util/inherit'),
	error   = require('./../util/error'),
	Element = require('./Element');

function String (value)
{
	this.value = value;
}

inherit(String, Element);

String.prototype.toSQL = function String__toSQL ()
{
	return String.stringy(this.value);
};

String.stringy = function String_stringy (value)
{
	if (typeof value !== 'string')
	{
		throw new String.NotAString({ value: value });
	}

	value = '' + value;
	value = String.escape(value);
	value = String.embrace(value);
	return value;
};

String.NotAString = error.ErrorConstructor(
	'Value is not a string.',
	'not_a_string'
);

String.escape = function String_escape (string)
{
	return string.replace(/'/g, "''");
};

String.embrace = function String_embrace (string)
{
	return "'"+ string +"'";
};
