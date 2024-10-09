// import express from 'express';

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// }); 

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// }); 

let a = {
    'test': '123',
    'b': () => {
        return this;
    }
}
a.b(); // a.b.c

let dt = new Date().toLocaleTimeString();
console.log(dt);