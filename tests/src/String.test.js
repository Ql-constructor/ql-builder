


var
	String = require('../../src/').elements.String;

describe('String', function ()
{
	describe('toSQL', function ()
	{
		it('outputs string', function ()
		{
			var string = new String('abc');
			expect(string.toSQL()).toBe("'abc'");
		});

		it('escapes quotes', function ()
		{
			var string = new String("a'; SELECT 1, ''; SELECT 2;");
			expect(string.toSQL()).toBe("'a''; SELECT 1, ''''; SELECT 2;'");
		})
	});
});
