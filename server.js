import jsonServer from 'json-server'
import {nanoid} from 'nanoid'
// import { LowSync, JSONFileSync } from 'lowdb'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  if (req.method === 'POST') { 
    console.log()
    if(req.body.option === 'AddNoteApi') {
      const logId = nanoid()
      const noteId = nanoid()
      const nowData = new Date().getTime()
      const note = {
        id: logId,
        createAt: nowData,
        option: "AddNote",
        data: {
          note: {
            id: noteId, // 笔记唯一id
            content: req.body.content, // 笔记内容
            tags: {}, // 笔记标签
            background: "#ffffff", // 笔记背景颜色
            color: "#333333", // 笔记字体颜色
            top: "",
            type: "",
            height: 100,
            state: 0, // 笔记状态 0-正常
            secret: false, // 是否隐藏
            createAt: nowData,
            updateAt: nowData
          }
        }
      }
      req.body = note
    }
  }
  next()
})

server.use((req, res, next) => {
  if (req.headers.password === 'happen') { // 添加你的密码
    next() // 放行
  } else {
    res.sendStatus(401)
  }
 })

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
