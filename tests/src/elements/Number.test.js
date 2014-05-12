


var
	Number = require('../../../src/').elements.Number;

describe('Number', function ()
{
	describe('numeric', function ()
	{
		it('throws `NotANumber` if non-numeric value', function ()
		{
			try
			{
				var value = 'a';
				Number.numeric(value);
			} catch (e)
			{
				expect(e).toEqual(Number.NotANumber({ value: value }));
				return;
			}
			throw new Error;
		});

		it('throws `NotAFiniteNumber` if non-finite number', function ()
		{
			var value;
			try
			{
				value = Infinity;
				Number.numeric(value);
			} catch (e)
			{
				expect(e).toEqual(Number.NotAFiniteNumber({ value: value }));
				return;
			}
			throw new Error;

			try
			{
				value = NaN;
				Number.numeric(value);
			} catch (e)
			{
				expect(e).toEqual(Number.NotAFiniteNumber({ value: value }));
				return;
			}
			throw new Error;
		});

		it('outputs numeric string', function ()
		{
			expect(Number.numeric(17)).toBe('17');
			expect(Number.numeric(0.1)).toBe('0.1');
			expect(Number.numeric(1e-15)).toBe('1e-15');
		});
	});

	describe('toSQL', function ()
	{
		it('throws `NotANumber` if non-numeric value', function ()
		{
			try
			{
				var value = 'a';
				var number = new Number(value);
				number.toSQL();
			} catch (e)
			{
				expect(e).toEqual(Number.NotANumber({ value: value }));
				return;
			}
			throw new Error;
		});

		it('throws `NotAFiniteNumber` if non-finite number', function ()
		{
			var value;
			try
			{
				value = Infinity;
				var number = new Number(value);
				number.toSQL();
			} catch (e)
			{
				expect(e).toEqual(Number.NotAFiniteNumber({ value: value }));
				return;
			}
			throw new Error;

			try
			{
				value = NaN;
				var number = new Number(value);
				number.toSQL();
			} catch (e)
			{
				expect(e).toEqual(Number.NotAFiniteNumber({ value: value }));
				return;
			}
			throw new Error;
		});

		it('outputs numeric string', function ()
		{
			var number = new Number(17);
			expect(number.toSQL()).toBe('17');

			var number = new Number(0.1);
			expect(number.toSQL()).toBe('0.1');

			var number = new Number(1e-15);
			expect(number.toSQL()).toBe('1e-15');
		});
	});
});
