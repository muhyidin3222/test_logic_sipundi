const A = [21, 13, 27, 39, 47, 42, 52, 17]
const B = [7, 13, 21, 31, 47, 17]

/// core logic
const results = A.filter(val => B.find(item => val === item)).sort()

console.log(results)