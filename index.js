const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.createServer(app);
const router = express.Router();
const contextPath = '/mock';
app.use(contextPath, router);


router.get('/', function (req, res) {
  res.send('Hello to the mock server.')
})


router.get('/wait', function (req, res) {
  waitTime = 8000
  setTimeout(()=>{
    res2 = {
		message:"waited for: "+waitTime/1000+"seconds"
	}
    res.send(res2)
  },waitTime)
})

router.put('/wait', function (req, res) {
  waitTime = 8000
  setTimeout(()=>{
    res2 = {
		message:"waited for: "+waitTime/1000+" seconds"
	}
    res.send(res2)
  },waitTime)
})

console.log('Started server	listening on port: 8080 context path:'+contextPath)
app.listen(8080)