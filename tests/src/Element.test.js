


var
	Element = require('../../src/').elements.Element;

describe('Element', function ()
{
	describe('toSQL', function ()
	{
		it('throws error', function ()
		{
			expect(function ()
			{
				var element = new Element;
				element.toSQL();
			})
			.toThrow(Element.NoRepresentationError);
		});
	});
});
