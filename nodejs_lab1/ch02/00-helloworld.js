const http = require('http')
const port = process.env.PORT || 3000

const sever = http.createServer((req, res)=>{
    res.writeHead(200,{'Content_Type':'text/plain'})
    res.end('Hello world NODEJS!')
})
sever.listen(port,() => console.log(`sever started on port ${port};`+
'press Ctrl-C to terminate ...'))