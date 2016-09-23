/**
 * Created by Owner on 9/23/2016.
 */
// link to url module to parse url parameters
var url = require('url');
// link to the connect module
var connect = require('connect');

var app = connect();
// setting up a new function to calculate
var lab3= function (req, res, next)
{
    var qs = url.parse(req.url, true).query;
    var method = qs.method;
    var x = qs.x;
    var y = qs.y;

    if (method == 'add')
    {
        res.end('Method: ' + method + '\n'
            + 'X= ' + x + '\n' +
            'Y=' + y + '\n' + 'Result:x+y = ' + (parseInt(x) + parseInt(y)));
    }
    else if (method == 'substract')
    {
        res.end('Method: ' + method + '\n'
            + 'X= ' + x + '\n' +
            'Y=' + y + '\n' + 'Result:x-y =  ' + (parseInt(x) - parseInt(y)));
    }
    else if (method == 'multiply')
    {
        res.end('Method: ' + method + '\n'
            + 'X= ' + x + '\n' +
            'Y=' + y + '\n' + 'Result:x*y =  ' + (parseInt(x) * parseInt(y)));
    }
    else if (method == 'divide')
    {
        res.end('Method: ' + method + '\n'
            + 'X= ' + x + '\n' +
            'Y=' + y + '\n' + 'Result:x/y = ' + (parseInt(x) / parseInt(y)));
    }
    else
    {
        res.end('Sorry! This method is not appropriate');
    }

}
// to run the function on localport 3000
app.listen(3000);
// to use the function lab
app.use('/lab3', lab3);