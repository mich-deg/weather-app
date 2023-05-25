import express from "express";

import * as dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const port = process.env.PORT || 3000;
const apiKey = process.env.OPEN_WEATHER_API_KEY;

const app = express();

app.get("/weather", async (req, res) => {
  try {
    const city = req.query.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    const response = await axios.get(url);
    const weather = response.data;
    const message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    res.send(message);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
