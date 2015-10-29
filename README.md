# express-response-facade
Abstraction facade for HTTP JSON responses in Express.

##
Package provides mulitple HTTP responses in JSON with their appropriate HTTP status code.

- respondOk //200
- respondCreated //201
- respondUnauthorized //401
- respondForbidden //403
- respondNotFound //404
- respondMethodNotAllowed //405
- respondConflict //409
- respondFormValidation //422
- respondInternalError //500

### Example
```
var express = require('express');
var responder = require('express-response-facade');

app.get('/', function(req, res){

  var data = {
    some: "data"
  };

  responder(res).respondOk(data);
});


app.listen(3000);

##### Returns
// Status Code:200 OK
{
  "some": "data
}
```
