function summator(cb, n) {
  console.log(cb(n))
}

function fn(x) {
  return x + 100
}

summator(fn, 42)
