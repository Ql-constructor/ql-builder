


module.exports = function inherit (fn, base)
{
	var basePrototype;
	if (typeof base === 'function')
	{
		basePrototype = base.prototype;
	}
	else
	{
		basePrototype = base;
	}

	var prototype = Object.create(basePrototype,
	{
		constructor: { value: fn }
	});

	fn.prototype = prototype;

	return fn;
};
