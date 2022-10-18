## 笔记系统后台

此后台系统可以单独运行，负责通过api记录自己的笔记信息。

也可以通过以下方式运行：
1. 直接访问<https://note.glwsq.cn>然后配置后台服务器同步的地址，即可进行笔记信息的同步。
2. 通过浏览器插件快速在浏览器中添加笔记 <https://github.com/glwhappen/idea-note-chrome>
3. 通过iphone，ipad等快捷指令快速添加笔记，快捷指令
   1. 直接添加剪切板中的内容 <https://www.icloud.com/shortcuts/08664b9bcd964df0be22db4dfef48882>
   2. 打开对话框输入内容并添加 <https://www.icloud.com/shortcuts/102f19bba21e41b390783de4717ca9a5>

通过浏览器插件可以方便的在浏览器中

### 快速启动

1. 安装依赖 npm install
2. 运行命令 npm start

### 配置请求头

发送请求必须携带password请求头，内容为server.js中设置的密码

### 添加日志

发送post请求

http://localhost:3000/note-logs

内容：
```json
{
    "option": "AddNoteApi",
    "content": "添加一个日志"
}
```

###
可以在server.js 中修改密码，这个时候想访问后台，必须在header中携带password字段