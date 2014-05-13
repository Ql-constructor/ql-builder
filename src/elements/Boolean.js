


module.exports = Boolean;

var
	inherit = require('./../util/inherit'),
	error   = require('./../util/error'),
	Element = require('./Element');

function Boolean (value)
{
	this.value = value;
}

inherit(Boolean, Element);

Boolean.prototype.toSQL = function Boolean__toSQL ()
{
	return Boolean.toSQL(this.value);
};

var
	SQL_TRUE    = 'TRUE',
	SQL_FALSE   = 'FALSE',
	SQL_UNKNOWN = 'UNKNOWN';

Boolean.toSQL = function Boolean_toSQL (value)
{
	if (value === true)
	{
		return SQL_TRUE;
	}
	else if (value === false)
	{
		return SQL_FALSE;
	}
	else if (value === null)
	{
		return SQL_UNKNOWN;
	}
	else
	{
		throw Boolean.NotALogicValue({ value: value });
	}
};

Boolean.NotALogicValue = error.ErrorConstructor(
	'Supplied value is not representable as SQL boolean.',
	'not_a_logic_value'
);

Boolean.TRUE    = function Boolean_TRUE    () { return new Boolean(true);  };
Boolean.FALSE   = function Boolean_FALSE   () { return new Boolean(false); };
Boolean.UNKNOWN = function Boolean_UNKNOWN () { return new Boolean(null);  };
