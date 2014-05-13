


var
	Name = require('../../../src/').elements.Name;

describe('Name', function ()
{
	describe('embrace', function ()
	{
		it('embraces name in quotes', function ()
		{
			expect(Name.embrace('abc')).toBe('"abc"');
			expect(Name.embrace('')).toBe('""');
		});
	});

	describe('escape', function ()
	{
		it('escapes quotes', function ()
		{
			expect(Name.escape('a"bc')).toBe('a""bc');
			expect(Name.escape('abc')).toBe('abc');
			expect(Name.escape('')).toBe('');
		});
	});

	describe('static toSQL', function ()
	{
		it('outputs name with no quotes', function ()
		{
			expect(Name.toSQL('abc')).toBe('abc');
		});

		it('escapes quotes if so', function ()
		{
			expect(Name.toSQL('a"bc')).toBe('"a""bc"');
		});

		it('throws `NotANameString` if another value', function ()
		{
			try
			{
				var value = 1;
				Name.toSQL(value);
			} catch (e)
			{
				expect(e).toEqual(Name.NotANameString({ value: value }));
				return;
			}
			throw new Error;
		});
	});

	describe('toSQL', function ()
	{
		it('outputs name with no quotes', function ()
		{
			var name = new Name('abc');
			expect(name.toSQL()).toBe('abc');
		});

		it('escapes quotes if so', function ()
		{
			var name = new Name('a"bc');
			expect(name.toSQL()).toBe('"a""bc"');
		});

		it('throws `NotANameString` if another value', function ()
		{
			try
			{
				var value = 1;
				var name = new Name(value);
				name.toSQL();
			} catch (e)
			{
				expect(e).toEqual(Name.NotANameString({ value: value }));
				return;
			}
			throw new Error;
		});
	});
});
