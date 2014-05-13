


module.exports = Number;

var
	inherit = require('./../util/inherit'),
	error   = require('./../util/error'),
	Element = require('./Element');

function Number (value)
{
	this.value = value;
}

inherit(Number, Element);

Number.prototype.toSQL = function Number__toSQL ()
{
	return Number.toSQL(this.value);
};

Number.toSQL = function Number_toSQL (value)
{
	if (typeof value !== 'number')
	{
		throw new Number.NotANumber({ value: value });
	}
	else if (! isFinite(value))
	{
		throw new Number.NotAFiniteNumber({ value: value })
	}
	else
	{
		return '' + value;
	}
};

Number.NotANumber = error.ErrorConstructor(
	'Value is not a number.',
	'not_a_number'
);

Number.NotAFiniteNumber = error.ErrorConstructor(
	'Value is not a finite number.',
	'not_finite_a_number'
);
