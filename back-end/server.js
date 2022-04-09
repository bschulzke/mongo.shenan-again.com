const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
  }));


const mongoose = require('mongoose');


try {  
    let data = fs.readFileSync('connection.txt', 'utf8');
    mongoose.connect(data.toString(), {
    useNewUrlParser: true
});    
} catch(e) {
    console.log('Error:', e.stack);
}


const cardSchema = new mongoose.Schema({
    adjective: String,
    role: String,
    noun: String,
  });

  const Card = mongoose.model('Item', cardSchema);

  // Create a new item in the museum: takes a title and a path to an image.
  app.post('/api/cards', async (req, res) => {
    const card = new Card({
      adjective: req.body.adjective,
      role: req.body.role,
      noun: req.body.noun,
    });
    try {
      await card.save();
      res.send(card);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.get('/api/cards', async (req, res) => {
    try {
      let cards = await Card.find();
      res.send(cards);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.delete('/api/cards/:id', async (req, res) => {
    try {
      await Card.deleteOne({
        _id: req.params.id
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.listen(3000, () => console.log('Server listening on port 3000!'));




