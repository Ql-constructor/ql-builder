


var
	String = require('../../../src/').elements.String;

describe('String', function ()
{
	describe('embrace', function ()
	{
		it('embraces string in quotes', function ()
		{
			expect(String.embrace('abc')).toBe("'abc'");
			expect(String.embrace('')).toBe("''");
		});
	});

	describe('escape', function ()
	{
		it('escapes quotes', function ()
		{
			expect(String.escape("a'bc")).toBe("a''bc");
			expect(String.escape('abc')).toBe('abc');
			expect(String.escape('')).toBe('');
		});
	});

	describe('static toSQL', function ()
	{
		it('outputs string', function ()
		{
			expect(String.toSQL('abc')).toBe("'abc'");
		});

		it('escapes quotes', function ()
		{
			expect(String.toSQL("a'; SELECT 1, ''; SELECT 2;")).toBe("'a''; SELECT 1, ''''; SELECT 2;'");
		});

		it('throws `NotAString` if another value', function ()
		{
			try
			{
				var value = 1;
				String.toSQL(value);
			} catch (e)
			{
				expect(e).toEqual(String.NotAString({ value: value }));
				return;
			}
			throw new Error;
		});
	});

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
		});

		it('throws `NotAString` if another value', function ()
		{
			try
			{
				var value = 1;
				var string = new String(value);
				string.toSQL();
			} catch (e)
			{
				expect(e).toEqual(String.NotAString({ value: value }));
				return;
			}
			throw new Error;
		});
	});
});
