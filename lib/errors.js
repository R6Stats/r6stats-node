function MissingCredentialsError(message) {
	this.name = "MissingCredentialsError"
	this.message = message || "Login credentials were not provided to the constuctor"
}

MissingCredentialsError.prototype = Error.prototype;

function MissingUserAgentError(message) {
	this.name = "MissingUserAgentError"
	this.message = message || "A user agent was not provided"
}

MissingUserAgentError.prototype = Error.prototype;

function AuthenticationError(message) {
	this.name = "AuthenticationError"
	var msg = "An error occurred while authenticating the client"
	this.message = msg + ": " + message || msg;
}

AuthenticationError.prototype = Error.prototype;

function ServiceResponseError(message) {
	this.name = "ServiceResponseError"
	this.message = message || "";
}

ServiceResponseError.prototype = Error.prototype;


module.exports = {
	MissingCredentialsError,
	MissingUserAgentError,
	AuthenticationError,
	ServiceResponseError
}