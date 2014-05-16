


var
	inherit = require('./inherit'),
	extend  = require('lodash').extend;

function BuilderError (message, code, data)
{
	message = 'Ql-builder: '+ message;

	Error.call(this, message);
	this.code = code;

	if (data)
	{
		extend(this, data);
	}
}

inherit(BuilderError, Error);

function ErrorConstructor (message, code)
{
	return function (data)
	{
		return new BuilderError(message, code, data);
	}
}

module.exports =
{
	BuilderError: BuilderError,
	ErrorConstructor: ErrorConstructor
};
