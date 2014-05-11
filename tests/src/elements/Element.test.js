


var
	Element = require('../../../src/').elements.Element;

describe('Element', function ()
{
	describe('toSQL', function ()
	{
		it('throws error', function ()
		{
			try
			{
				var element = new Element;
				element.toSQL();
			} catch (e)
			{
				expect(e).toEqual(Element.NoRepresentationError());
				return;
			}
			throw new Error;
		});
	});
});
