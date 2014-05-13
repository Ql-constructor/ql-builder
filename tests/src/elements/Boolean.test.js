


var _Boolean = Boolean;

describe('Boolean', function ()
{
	var Boolean = require('../../../src/').elements.Boolean;

	describe('static toSQL', function ()
	{
		it('works with true', function ()
		{
			expect(Boolean.toSQL(true)).toBe('TRUE');
			expect(Boolean.toSQL(true)).toBe(Boolean.TRUE().toSQL());
		});

		it('works with false', function ()
		{
			expect(Boolean.toSQL(false)).toBe('FALSE');
			expect(Boolean.toSQL(false)).toBe(Boolean.FALSE().toSQL());
		});

		it('works with null', function ()
		{
			expect(Boolean.toSQL(null)).toBe('UNKNOWN');
			expect(Boolean.toSQL(null)).toBe(Boolean.UNKNOWN().toSQL());
		});

		it('throws `NotALogicValue` if another value', function ()
		{
			doTestOtherBunch(doTestOtherLogicValue);

			function doTestOtherLogicValue (value)
			{
				try
				{
					Boolean.toSQL(value);
				} catch (e)
				{
					expect(e).toEqual(Boolean.NotALogicValue({ value: value }));
					return;
				}
				throw new Error;
			}
		});
	});

	describe('toSQL', function ()
	{
		it('works with true', function ()
		{
			var b = new Boolean(true);

			expect(b.toSQL()).toBe('TRUE');
			expect(b.toSQL()).toBe(Boolean.TRUE().toSQL());
		});

		it('works with false', function ()
		{
			var b = new Boolean(false);

			expect(b.toSQL()).toBe('FALSE');
			expect(b.toSQL()).toBe(Boolean.FALSE().toSQL());
		});

		it('works with unknown', function ()
		{
			var b = new Boolean(null);

			expect(b.toSQL()).toBe('UNKNOWN');
			expect(b.toSQL()).toBe(Boolean.UNKNOWN().toSQL());
		});

		it('throws `NotALogicValue` if another value', function ()
		{
			doTestOtherBunch(doTestOtherLogicValue);

			function doTestOtherLogicValue (value)
			{
				try
				{
					var b = new Boolean(value);
					b.toSQL();
				} catch (e)
				{
					expect(e).toEqual(Boolean.NotALogicValue({ value: value }));
					return;
				}
				throw new Error;
			}
		});

	});

	function doTestOtherBunch (doTestOtherLogicValue)
	{
		doTestOtherLogicValue(0);
		doTestOtherLogicValue('');
		doTestOtherLogicValue(NaN);

		doTestOtherLogicValue('abc');

		doTestOtherLogicValue('false');
		doTestOtherLogicValue('true');
		doTestOtherLogicValue('unknown');

		doTestOtherLogicValue('FALSE');
		doTestOtherLogicValue('TRUE');
		doTestOtherLogicValue('UNKNOWN');

		doTestOtherLogicValue(new _Boolean);
		doTestOtherLogicValue(new _Boolean(true));
		doTestOtherLogicValue(new _Boolean(false));
	}

});
