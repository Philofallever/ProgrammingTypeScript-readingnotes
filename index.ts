/* 
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
let al2: ReadonlyArray<number> = al.concat(5);

enum Language
{
    English,
    Spaish,
    Russian
}

let e1 = Language.Russian;
let e2 = Language['English'];

//枚举合并
enum Language2
{
    English,
    Spaish,
}

enum Language2
{
    Chinese = 2,
}


// 枚举的安全子集,const enum 不允许反向查找.默认也不会生成js代码,如果想为const enum生成运行时代码,需要把preserveConstEnums设为true
const enum Language3
{
    English,
    Spaish,
}

interface Animal
{
    eat(food: string): void;
    sleep(hours: number): void;
    age: number;
}

class Catt implements Animal
{
    eat(food: string): void
    {

    }
    sleep(hours: number): void
    {

    }
    age = 5;
}

let catt1 = (new Catt()).age;

type State = {
    [key: string]: string;
};

class StringDatabase
{
    state: State = {};

    get(key: string): string | null
    {
        return key in this.state ? this.state[key] : null;
    }

    set(key: string, value: string)
    {
        this.state[key] = value;
    }

    static from(state: State)
    {
        let db = new StringDatabase;
        for (let key in state)
            db.set(key, state[key]);

        return db;
    }
}

let db = new StringDatabase()
let info = typeof StringDatabase

*/

import { format } from "path/posix";

/* type FriendList = {
    count: number;
    friends: {
        firstName: string
        lastName:string
    }[]
}

type APIResponse = {
    user: {
        userId: string
        friendList:FriendList
    }
}
 */

/* type APIResponse = {
    user: {
        userId: string;
        friendList: {
            count: number;
            friends: {
                firstName: string;
                lastName: string;
            }[];
        };
    };
};

type ResponseKeys = keyof APIResponse; // 'user'
type UserKeys = keyof APIResponse['user'];  // 'userId'|friendList

type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = Weekday | "Sat" | "Sun";

let nextDay: Record<Weekday, Day> = {
    Mon: 'Fri',
    Tue: 'Mon',
    Wed: 'Sun',
    Thu: "Tue",
    Fri: 'Sun'
} */
/* 
type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = Weekday | "Sat" | "Sun";
let nextDay: { [key in Weekday]: Day } = {
    Mon: "Mon",
    Tue: "Sat",
    Wed: "Mon",
    Thu: "Mon",
    Fri: "Mon"
};

type Currency = {
    unit: "EUR" | "GBP" | "JPY" | "USD";
    value: number;
};

let Currency = {
    DEFAULT: "USD",
    from(value: number, unit = Currency.DEFAULT): Currency
    {
        return { unit, value };
    }
}; */

/* function tuple<T extends unknown[]>( ...ts:T) :T
{
    return ts;
}

let a = [1, true]; //
let b = tuple(1, true); //
let c = [1, true] as const; // readonly [1,true]
b[0] = 2; */

/* function isString(a: unknown): a is string
{
    return typeof a === 'string';
}

function parseInput(input: string | number)
{
    if (isString(input))
    {
        return input.toUpperCase()    
    }
} */

// type ToArray<T> = T extends unknown ? T[] : T[];
// type A = ToArray<number>;
// type B = ToArray<string | number>;

// let b: B = [1, 2, 3, 4];


type ElementType<T> = T extends unknown[] ? T[number] : T; //使用了键入
type A = ElementType<number[]>;

type ElementType2<T> = T extends (infer U)[] ? U : T;
type B = ElementType<number[]>;

type User = {
    name: string;
    id: number;
};
type C = Exclude<number | string, string>;
type c = Partial<User>;
type c1 = Readonly<User>;
// import 

type CompanyID = string & { readonly band: unique symbol; }
Optin