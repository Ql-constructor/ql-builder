


var
	inherit = require('./inherit');

function BuilderError (message, code, data)
{
	message = 'Ql-builder: '+ message;

	Error.call(this, message);
	this.code = code;

	if (data)
	{
		Object.keys(data).forEach(function (key)
		{
			this[key] = data[key];
		}, this);
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
