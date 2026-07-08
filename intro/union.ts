let score: number | string = "34";

type User = {
  name: String;
  id: Number;
};

type Admin = {
  username: String;
  id: Number;
};

let hetvi: User | Admin = { name: "HR", id: 987 };

hetvi = { username: "HHr", id: 320 };

function getDBId(id: string | number) {
  console.log(`DB is having id and that is ${id}`);
}

getDBId(5);

const data1: number[] = [1, 2, 3, 6];
const data2: (string | number | boolean)[] = ["h", 1, 3, true, "g", "hetvi"];

let seatAllotment: "aisle" | "middle" | "window";

export{}