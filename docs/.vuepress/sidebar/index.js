const html = require('./00html')
const css = require('./01css')
const react = require('./react')
const mongodb = require('./05mongodb')
const interview = require('./06interview')
const win = require('./08win')
module.exports = {
  // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
  '/00html/': html,
  '/01css/': css,
  '/react/': react,
  '/05mongodb/': mongodb,
  '/06interview/': interview,
  '/08win/': win,
}
