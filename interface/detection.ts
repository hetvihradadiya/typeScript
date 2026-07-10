interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square;

function area(arg: Shape) {
  if (arg.kind === "circle") {
    return Math.PI * arg.radius * arg.radius;
  } else {
    2;
    arg.side * arg.side;
  }
}

let a: Shape = { kind: "circle", radius: 5 };

area(a);


type A = string | number ;

type B = number | boolean;
 
type C = A & B; 