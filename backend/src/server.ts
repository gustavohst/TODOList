import express from 'express';

const app = express();

//ROUTES
app.get('/users', (request, response) => {
   return response.json({ message: 'hello world'});
});

app.listen(3333);