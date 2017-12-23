# Notes from You Don't Know JS

```js
var obj = {
	a: "hello world",
	b: 42
};

var b = "a";

obj[b];			// "hello world"
obj["b"];		// 42
```


To round a float point number use **toFixed(numbersAfterDecimal)**


Here's an example of *explicit* coercion:

```js
var a = "42";

var b = Number( a );

a;				// "42"
b;				// 42 -- the number!
```

And here's an example of *implicit* coercion:

```js
var a = "42";

var b = a * 1;	// "42" implicitly coerced to 42 here

a;				// "42"
b;				// 42 -- the number!
```




