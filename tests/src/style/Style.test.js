


var
	Style = require('../../../src/style');

describe('Style', function ()
{
	describe('constructor', function ()
	{
		it('allows empty instantiation', function ()
		{
			var style = new Style;
			expect(style.styles).toEqual({});
		});

		it('allows sample object', function ()
		{
			var sample = { x: 1, y: 'a' };
			var style = new Style(sample);
			expect(style.styles).toEqual(sample);
			expect(style.styles).not.toBe(sample);
		});

		it('allows key-value pairs', function ()
		{
			var style = new Style([
				[ 'x', 1 ],
				[ 'y', 'a' ]
			]);
			expect(style.styles).toEqual({ x: 1, y: 'a' });
		});
	});

	describe('get-set', function ()
	{
		var
			style  = new Style,
			styleB = new Style({ b: 1 });

		it('can get', function ()
		{
			expect(style.get('b')).toBe(null);
			expect(styleB.get('b')).toBe(1);
		});

		it('can set', function ()
		{
			style.set('c', 3);
			styleB.set('c', 3);

			expect(style.get('c')).toBe(3);
			expect(styleB.get('c')).toBe(3);
		});

		it('can overwrite', function ()
		{
			style.set('b', 2);
			styleB.set('b', 2);

			expect(style.get('b')).toBe(2);
			expect(styleB.get('b')).toBe(2);
		});
	});

	describe('type checking', function ()
	{
		it('isStyle check type', function ()
		{
			var style = new Style;
			expect(Style.isStyle(style)).toBe(true);
			expect(Style.isStyle({})).toBe(false);
			expect(Style.isStyle(1)).toBe(false);
		});

		it('assertType throws `NotAStyle` if wrong type', function ()
		{
			expect(function ()
			{
				Style.assertType(1);
			})
			.toThrow(Style.NotAStyle({ value: 1 }));
			
			expect(function ()
			{
				Style.assertType(new Style);
			})
			.not.toThrow();
		});
	});

	describe('object succession', function ()
	{
		it('throws `NotAStyle` if wrong parent', function ()
		{
			expect(function ()
			{
				var style = new Style;
				style.succeed(1);
			})
			.toThrow(Style.NotAStyle({ value: 1 }));

			var obj = {};
			expect(function ()
			{
				var style = new Style;
				style.succeed(obj);
			})
			.toThrow(Style.NotAStyle({ value: obj }));
		});

		it('can get parent\'s style', function ()
		{
			var
				s1 = new Style({ x: 1 }),
				s2 = new Style({ y: 2 });

			var
				s = s1.succeed(s2);

			expect(s.get('x')).toBe(1);
			expect(s.get('y')).toBe(2);

			expect(s).not.toBe(s1);
			expect(s).not.toBe(s2);
		});

		it('can shadow parent\'s style', function ()
		{
			var
				s1 = new Style({ x: 1 }),
				s2 = new Style({ x: 2 });

			var
				s = s1.succeed(s2);

			expect(s.get('x')).toBe(1);

			expect(s).not.toBe(s1);
			expect(s).not.toBe(s2);
		});

		it('does not modifies objects', function ()
		{
			var
				s1 = new Style({ x: 1 }),
				s2 = new Style({ x: 2, y: 2 });

			var
				s = s1.succeed(s2);

			expect(s).not.toBe(s1);
			expect(s).not.toBe(s2);

			s.set('x', 3);
			s.set('y', 3);

			expect(s.get('x')).toBe(3);
			expect(s.get('y')).toBe(3);

			expect(s1.get('x')).toBe(1);
			expect(s1.get('y')).toBe(null);

			expect(s2.get('x')).toBe(2);
			expect(s2.get('y')).toBe(2);
		});
	});
});
