import triangle from "./triangle";
const hash = require("object-hash");

const sums = [];

class Triangle {
  value: number;
  left?: Triangle;
  right?: Triangle;
  isLeaf: boolean;

  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.isLeaf = !(this.left && this.right);
  }

  maximalSum() {
    if (sums[hash(this)]) {
      return sums[hash(this)];
    } else {
      const sum = this.isLeaf
        ? this.value
        : this.value +
          Math.max(this.left.maximalSum(), this.right.maximalSum());

      sums[hash(this).toString()] = sum;
      return sum;
    }
  }
}

function arrayToTriangle(array: number[][]) {
  const totalRows = array.length - 1;

  if (array[totalRows].length !== array.length) {
    throw new Error("Bad input arrays passed, check the triangle 1");
  }

  let currentTriangles: Triangle[] = [];
  for (let i = totalRows; i >= 0; i--) {
    const currentRow = array[i];
    console.log(i, totalRows);
    if (currentRow.length !== i + 1) {
      throw new Error(`Bad triangle, check row ${i}`);
    }
    if (i === totalRows) {
      currentTriangles = currentRow.map((n) => new Triangle(n, null, null));
    } else {
      currentTriangles = currentRow.map(
        (n, i) => new Triangle(n, currentTriangles[i], currentTriangles[i + 1])
      );
    }
  }
  console.log(currentTriangles[0]);
  return currentTriangles[0];
}

// const arr = [
//   [75],
//   [95, 64],
//   [17, 47, 82],
//   [18, 35, 87, 10],
//   [20, 4, 82, 47, 65],
//   [19, 1, 23, 75, 3, 34],
//   [88, 2, 77, 73, 7, 63, 67],
//   [99, 65, 4, 28, 6, 16, 70, 92],
//   [41, 41, 26, 56, 83, 40, 80, 70, 33],
//   [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
//   [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
//   [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
//   [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
//   [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
//   [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
// ];

const smallArr = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];
console.log(arrayToTriangle(triangle).maximalSum());
