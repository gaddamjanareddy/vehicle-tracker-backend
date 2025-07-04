const express = require("express");
const routeData = require("./data/route.json");

const app = express();
let index = 0;

app.get("/api/location", (req, res) => {
  const location = routeData[index];
  index = (index + 1) % routeData.length;
  res.json(location);
});

app.get("/api/route", (req, res) => {
  res.json(routeData);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
