


var _Boolean = Boolean;

describe('Boolean', function ()
{
	var Boolean = require('../../../src/').elements.Boolean;

	describe('logic', function ()
	{
		it('works with true', function ()
		{
			expect(Boolean.logic(true)).toBe('TRUE');
			expect(Boolean.logic(true)).toBe(Boolean.TRUE().toSQL());
		});

		it('works with false', function ()
		{
			expect(Boolean.logic(false)).toBe('FALSE');
			expect(Boolean.logic(false)).toBe(Boolean.FALSE().toSQL());
		});

		it('works with null', function ()
		{
			expect(Boolean.logic(null)).toBe('UNKNOWN');
			expect(Boolean.logic(null)).toBe(Boolean.UNKNOWN().toSQL());
		});

		it('throws `NotALogicValue` if another value', function ()
		{
			doTestOtherBunch(doTestOtherLogicValue);

			function doTestOtherLogicValue (value)
			{
				expect(function ()
				{
					Boolean.logic(value);
				})
				.toThrow(Boolean.NotALogicValue());
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
				var b = new Boolean(value);

				expect(function ()
				{
					b.toSQL();
				})
				.toThrow(Boolean.NotALogicValue());
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
