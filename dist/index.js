"use strict";
console.log("hello world");
var a = 1 + 2;
var b = a + 3;
var c = {
    apple: a,
    banana: b,
};
var d = c.apple + 4;
var _unknow;
var _void;
var _any;
var _null = null;
// _unknow = _void; ✔
// _unknow = _any; ✔
// _unknow = _null; ✔
// _void = _unknow; ❌
// _void = _any;  ✔
// _void = _null; ❌
// _any = _unknow; ✔
// _any = _void; ✔
// _any = _null; ✔
// _null = _unknow; ❌
// _null = _void; ❌
// _null = _any; ✔
var _number;
var _bigInt;
var _boolean;
var _string;
var _symbol;
var _object;
var f = Math.pow(2, 53);
console.log(f);
var cc1 = true;
var c11 = {
    firstName: 'john',
    lastName: 'barrowman'
};
//# sourceMappingURL=index.js.map