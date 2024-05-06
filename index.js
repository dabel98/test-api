const express = require('express');

const dataStore = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/users", (req, res) => {
  res.json(dataStore);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
