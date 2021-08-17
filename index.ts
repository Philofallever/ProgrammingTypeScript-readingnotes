console.log("hello world");
let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b,
};

let d = c.apple + 4;

let _unknow: unknown;
let _void: void;
let _any: any;
let _null: null = null;

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

let _number: number;
let _bigInt: bigint;
let _boolean: boolean;
let _string: string;
let _symbol: symbol;
let _object: object;

let f = Math.pow(2, 53)
console.log(f)

const cc1 = true;

let c11:{
    firstName:string
    lastName:string
} = {
    firstName:'john',
    lastName:'barrowman'
}
