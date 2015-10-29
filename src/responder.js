module.exports = function(response)
{
  var response = response;

  this.httpStatusCode = 200;

  this.meta = {};

  var success = function(data){
    return {
      data: data,
      meta: this.meta
    };
  };

  var error = function(message, errors){
    var errors = errors || [];

    return {
      errors: {
        message: message,
        errors: errors
      },
      meta: this.meta
    };
  };


  this.setMeta = function(meta)
  {
    this.meta = meta;

    return this;
  }


  this.respondOk = function(data)
  {
    this.httpStatusCode = 200;

    response.status(this.httpStatusCode).json(success(data));

    return this;
  };


  this.respondCreated = function(data)
  {
    this.httpStatusCode = 201;

    response.status(this.httpStatusCode).json(success(data));

    return this;
  };


  this.respondBadRequest = function(message, errors)
  {
    var message = message || "Bad Request!";

    this.httpStatusCode = 400;

    response.status(this.httpStatusCode).json(error(message, errors));

    return this;
  };


  this.respondUnauthorized = function(message, errors)
  {
    var message = message || "Unauthorized Request!";

    this.httpStatusCode = 401;

    response.status(this.httpStatusCode).json(error(message, errors));

    return this;
  };


  this.respondForbidden = function(message, errors)
  {
    var message = message || "Forbidden!";

    this.httpStatusCode = 403;

    response.status(this.httpStatusCode).json(error(message, errors));

    return this;
  };


  this.respondNotFound = function(message, errors)
  {
    var message = message || "Not Found!";

    this.httpStatusCode = 404;

    response.status(this.httpStatusCode).json(error(message, errors));

    return this;
  };


  this.respondMethodNotAllowed = function(message, errors)
  {
    var message = message || "Method Not Allowed!";

    this.httpStatusCode = 405;

    response.status(this.httpStatusCode).json(error(message, errors));

    return this;
  };


  this.respondConflict = function(message, errors)
  {
    var message = message || "Conflict!";

    this.httpStatusCode = 409;

    response.status(this.httpStatusCode).json(error(message, errors));

    return this;
  };


  this.respondFormValidation = function(message, errors)
  {
    var message = message || "Unprocessable Entity!";

    this.httpStatusCode = 422;

    response.status(this.httpStatusCode).json(error(message, errors));

    return this;
  };


  this.respondInternalError = function(message, errors)
  {
    var message = message || "Internal Error!";

    this.httpStatusCode = 500;

    response.status(this.httpStatusCode).json(error(message, errors));

    return this;
  };


  return this;
}
