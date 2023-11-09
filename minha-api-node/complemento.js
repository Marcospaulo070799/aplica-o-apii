app.get('/', (req, res) => {
    res.send('Bem-vindo à API!');
  });
  const express = require('express');
  const app = express();
  const port = 3310;
  
  app.use(express.json());
  
  let data = [
    { id: 1, name: 'dia' },
    { id: 2, name: 'mes' }
  ];
  
  app.get('/', (req, res) => {
    res.send('Bem-vindo à API!');
  });
  
  app.get('/dia/:1', (req, res) => {
    res.json(data);
  });
  
  app.get('/mes /:2', (req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find(item => item.id === id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).send('Item não encontrado.');
    }
  });
  
  app.post('/dia', (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.status(201).json(newItem);
  });
  
  app.put('/mes/:2', (req, res) => {
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
  
  app.delete('/mes/:2', (req, res) => {
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
    console.log(`Servidor rodando em http://localhost:${3310}`);
  });
    