const score: Array<number> = [];

//also we can create array for other

function IndentityOne(val: number | boolean): number | boolean {
  return val;
}

function indentityTwo(val: any): any {
  return val;
}

function indentityThree<Type>(val: Type): Type {
  return val;
}

interface Bottle {
  brand: string;
  count: number;
}

function identityFour<t>(val: t): t {
  return val;
}
identityFour<Bottle>({ brand: "hr", count: 3 });

// function indentityFive<t>(val: Array<t>): Array<t>{
function indentityFive<t>(val: t[]): t[] {
  console.log(val.length);
  return val;
}

let indentitySix = <T>(val: T[]): T => {
  return val[0];
};

export {};
