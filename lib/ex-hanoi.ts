export class HanoiSolver {
  constructor(n: number) {
    let filler = 1;
    while (this.c.stack.length < n) {
      this.a.stack.push(filler);
      this.b.stack.push(filler + 1);
      this.c.stack.push(filler + 2);
      filler += 3;
    }
    this.extendedHanoi(n, this.a, this.b, this.c);
  }

  a = {
    name: "A",
    stack: [],
  };
  b = {
    name: "B",
    stack: [],
  };
  c = {
    name: "C",
    stack: [],
  };
  history = [];

  extendedHanoi(n, A, B, C) {
    if (n === 1) {
      this.move(C, B);
      this.move(A, C);
      this.move(B, A);
      this.move(B, C);
      this.move(A, C);
    } else {
      this.extendedHanoi(n - 1, A, B, C);
      this.hanoi(3 * n - 2, C, A, B);
      this.move(A, C);
      this.hanoi(3 * n - 1, B, A, C);
    }
  }

  hanoi(n, A, B, C) {
    if (n === 1) {
      this.move(A, C);
    } else {
      this.hanoi(n - 1, A, C, B);
      this.move(A, C);
      this.hanoi(n - 1, B, A, C);
    }
  }

  move(A, B) {
    const popped = A.stack.pop();
    B.stack.push(popped);
    this.history.push({
      from: A.name,
      to: B.name,
    });
  }
}
