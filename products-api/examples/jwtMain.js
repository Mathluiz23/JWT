const jwt = require('jsonwebtoken');

// const user = {
//   id: 1,
//   username: 'renato.filho',
//   email: 'renato.filho@betrybe.com'
// };

// const token = jwt.sign(user, 'SEGREDO', {
//   algorithm: 'HS256',
//   expiresIn: '60h'
// });

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJyZW5hdG8uZmlsaG8iLCJlbWFpbCI6InJlbmF0by5maWxob0BnbWFpbC5jb20uYnIiLCJpYXQiOjE2NDM4MzE3MTQsImV4cCI6MTY0NDA0NzcxNH0._wbfriGEUgfFiOekA-OtGK7F96y48JBHrHCHGDDi2h4';

const payload = jwt.verify(token, 'NOVO_SEGREDO');
console.log(payload);

