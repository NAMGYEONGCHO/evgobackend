require('dotenv').config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dynamoDB = require('./dynamodb');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



const params = {
  TableName: 'ev-charging-station',
  Item: {
    id: '2',
    status: 'available',
    latitude: 12.350,
    longitude: 67.880,
  },
};

dynamoDB.put(params, (error, data) => {
  if (error) {
    console.error('Error adding item:', JSON.stringify(error, null, 2));
  } else {
    console.log('Item added:', JSON.stringify(data, null, 2));
  }
});