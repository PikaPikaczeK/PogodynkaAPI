const { error } = require("console");
const express = require("express");
const cors = require("cors");
const serwer = express();
serwer.use(cors());
const port = 8080;
const weather = require("weather-js");
serwer.use(express.json());
serwer.get("/sprawdz", (req, res) => {
  weather.find(
    { search: "Biała Podlaska, 21-500", degreeType: "C" },
    (error, result) => {
      if (error) throw error;
      res.send(result).status(200);
    }
  );
});
try {
  serwer.listen(port, () => {
    console.log(`Nasłuchiwanie portu ${port}...`);
  });
} catch (error) {
  console.log(error);
}
