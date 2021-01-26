const http = require('http');

const server = http.createServer((req, res) => {
  res.write('<h1>hello node!</h1>')
  res.write('<p>hello server</p>')
  res.end('<p>hello sunny</p>')
})
  .listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
  });

server.on('listening', () => {
  console.error('8080번 포트에서 서버 대기 중입니다.')
});
server.on('error', (error) => {
  console.error(error)
})