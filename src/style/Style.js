


module.exports = Style;

var
	_ = require('lodash');

var
	error = require('./../util/error');

function Style (styles)
{
	this.styles = {};
	if (styles)
	{
		if (_.isArray(styles))
		{
			this.styles = _.zipObject(styles);
		}
		else if (_.isObject(styles))
		{
			_.extend(this.styles, styles);
		}
	}
}

Style.prototype.get = function Style__get (name)
{
	return this.styles[name] || null;
};

Style.prototype.set = function Style__set (name, value)
{
	this.styles[name] = value;
};

Style.prototype.succeed = function Style__succeed (parent)
{
	Style.assertType(parent);
	return new Style(_.extend({}, parent.styles, this.styles));
};

Style.assertType = function Style_assertType (style)
{
	if (! Style.isStyle(style))
	{
		throw Style.NotAStyle({ value: style });
	}
};

Style.isStyle = function Style_isStyle (style)
{
	return style instanceof Style;
};

Style.NotAStyle = error.ErrorConstructor(
	'Object is not a Style.',
	'not_a_style'
);
