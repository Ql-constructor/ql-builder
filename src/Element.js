


module.exports = Element;

function Element ()
{

}

Element.prototype.toSQL = function Element__toSQL ()
{
	throw Element.noRepresentation;
};

Element.noRepresentation = new Error('Element has no adequate SQL representation.');

Element.prototype.toString = function Element__toString ()
{
	return this.toSQL();
};
