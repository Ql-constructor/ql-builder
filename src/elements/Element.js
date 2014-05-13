


module.exports = Element;

var
	error   = require('./../util/error');

function Element ()
{

}

Element.prototype.toSQL = function Element__toSQL ()
{
	throw Element.NoRepresentationError();
};

Element.toSQL = function Element_toSQL ()
{
	throw Element.NoRepresentationError();
};

Element.NoRepresentationError = error.ErrorConstructor(
	'Element has no adequate SQL representation.',
	'no_representation_error'
);

Element.prototype.toString = function Element__toString ()
{
	return this.toSQL();
};
