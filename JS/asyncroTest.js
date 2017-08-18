var maxTime = 1000;

var evenDoubler = function(v, callback){
    if(v % 2 == 0) {
        v = v * 2;
        callback(null, v);
    } else {
        var myErr = Error("Not even");
        callback(myErr, null);
    }
}

var handleResults = function(err, results) {
    if (err) {
        console.log("Error: " + err.message);
    } else {
        console.log("Result: " + results);
    }
}

evenDoubler(2, handleResults);
evenDoubler(3, handleResults);

// Node Modules
// fs - file system
// http - http requests
// crypto - cryptographic functions
// os - accessing attributes of underlying os

/* Callbacks:   - Requests / Reply model
 * 		- No results until all results		
 * Events: 	- Publish / Subscribe model
 * 		- Act on results as they arrive


*/
