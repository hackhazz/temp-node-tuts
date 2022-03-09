const path = require('path')



console.log(path.sep)
// displaying the path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
// displaying the last item
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)

