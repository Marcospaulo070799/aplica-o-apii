
const express = require('express');
const app = express();
const port = 3310; 

app.use(express.json());


let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];


app.get('/items', (req, res) => {
  res.json(data);
});


app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find(item => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item não encontrado.');
  }
});


app.post('/items', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});


app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data[index] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).send('Item não encontrado.');
  }
});


app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send('Item não encontrado.');
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
