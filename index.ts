import { emit } from "process";

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

let f = Math.pow(2, 53);
console.log(f);

const cc1 = true;

let c11: {
    firstName: string;
    lastName: string;
} = {
    firstName: 'john',
    lastName: 'barrowman'
};

let a1: {
    b: number;
    c?: string;
    [key: number]: boolean;
};

a1 = { b: 30, 10: true };

type Age = number;
type Person = { name: string, age: Age; };

type Cat = { name: string, purrs: boolean; };
type Dog = { name: string, barks: boolean, wag: boolean; };
type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

// Cat 
let a2: CatOrDogOrBoth = {
    name: "Bonkers",
    purrs: true
};

// Dog
a2 = {
    name: "Domino",
    barks: true,
    wag: true,
};

// Both
a2 = {
    name: "Donkers",
    barks: true,
    wag: true,
    purrs: true,
};


let b2: CatAndDog = {
    name: "Domino",
    purrs: true,
    barks: true,
    wag: true,
};
let a4 = [1, 2, 3, 4];
let a3: [number] = [1];

let al: readonly number[] = [1, 2, 3, 4];
let al1 = al.concat(5);
let al2:ReadonlyArray<number> = al.concat(5);

enum Language
{
    English,
    Spaish,
    Russian
}

let e1 = Language.Russian
let e2 = Language['English']

//枚举合并
enum Language2
{
    English,
    Spaish,
}

enum Language2
{
    Chinese =2,
}


// 枚举的安全子集,const enum 不允许反向查找.默认也不会生成js代码,如果想为const enum生成运行时代码,需要把preserveConstEnums设为true
const enum Language3
{
    English,
    Spaish,
}
