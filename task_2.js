const data = "Green Tea 12000, Thai Tea 8000, Taro 14000, Red Velvet 18000"

//core logic
//conver from string to array object
const convertToArrayObject = data.split(",").map(val => ({ number: Number(val.match(/(\d+)/)[0]), string: val.replace(/[0-9]/g, '') }))
//sort to small size and get small size
const results = convertToArrayObject.sort((a, b) => a.number - b.number)[0].string

console.log(results)