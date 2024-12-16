function setup() {
  createCanvas(600, 600);
  noLoop();
  background(240);
  stroke(0);
  noFill();

  let initialSize = 200;
  drawSquare(width / 2, height / 2, initialSize, 4); 
}

function drawSquare(x, y, size, level) {
  if (level <= 0 || size < 2) return; 


  rectMode(CENTER);
  rect(x, y, size, size);


  let newSize = size / 2;
  drawSquare(x - size / 2, y - size / 2, newSize, level - 1); 
  drawSquare(x + size / 2, y - size / 2, newSize, level - 1); 
  drawSquare(x - size / 2, y + size / 2, newSize, level - 1); 
  drawSquare(x + size / 2, y + size / 2, newSize, level - 1); 
}


let fibMemo = [0, 1]; 

function setupFibonacci() {
  console.log("Fibonacci Sequence:");
  for (let i = 0; i < 20; i++) {
    console.log(`Fib(${i}) = ${fib(i)}`);
  }
}

function fib(n) {
  if (fibMemo[n] != null) {

    return fibMemo[n];
  }


  fibMemo[n] = fib(n - 1) + fib(n - 2);
  return fibMemo[n];
}


