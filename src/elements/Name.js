


module.exports = Name;

var
	inherit  = require('./../util/inherit'),
	error    = require('./../util/error'),
	reserved = require('./../reserved'),
	Element  = require('./Element');

function Name (value)
{
	this.value = value;
}

inherit(Name, Element);

Name.prototype.toSQL = function Name__toSQL ()
{
	return Name.toSQL(this.value);
};

Name.toSQL = function Name_toSQL (value)
{
	if (typeof value !== 'string')
	{
		throw new Name.NotANameString({ value: value });
	}

	value = '' + value;
	if (Name.isRequireQuotes(value))
	{
		value = Name.escape(value);
		value = Name.embrace(value);
	}

	return value;
};

Name.NotANameString = error.ErrorConstructor(
	'Name is not a string.',
	'not_a_string_name'
);

Name.escape = function Name_escape (string)
{
	return string.replace(/"/g, '""');
};

Name.isRequireQuotes = function Name_isRequireQuotes (name)
{
	return (
		Name.isSpecial(name)
		||
		Name.isReserved(name)
	);
};

Name.reIdentificator = /^[a-zA-Z][a-zA-Z01-9_$#]*$/;

Name.isSpecial = function Name_isSpecial (name)
{
	return ! Name.reIdentificator.test(name);
};

Name.isReserved = function Name_isReserved (name)
{
	name = name.toUpperCase();
	return reserved.indexOf(name) !== -1;
};

Name.embrace = function Name_embrace (name)
{
	return '"'+ name +'"';
};
