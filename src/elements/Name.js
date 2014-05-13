


module.exports = Name;

var
	inherit = require('./../util/inherit'),
	error   = require('./../util/error'),
	Element = require('./Element');

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
	if (Name.isSpecial(value))
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

Name.isSpecial = function Name_isSpecial (name)
{
	return name.indexOf('"') !== -1;
};

Name.embrace = function Name_embrace (name)
{
	return '"'+ name +'"';
};
