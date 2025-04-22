const express = require("express");
const axios = require("axios");
const { JSDOM } = require("jsdom");
const app = express();

const PORT = 3000;

app.get("/api/scrape", async (req, res) => {
  const keyword = req.query.keyword;
  if (!keyword) {
    return res.status(400).json({ error: "keyword is required " });
  }

  try {
    const response = await axios.get(`https://www.amazon.com/s?k=${keyword}`);

    const dom = new JSDOM(response.data);
    const products = [];

    const productElements = dom.window.document.querySelectorAll(
      ".s-main-slot .s-result-item"
    );
    productElements.forEach((item) => {
      const title = item.querySelector("h2 a span")?.textContent || "No title";
      const rating =
        item.querySelector(".a-icon-alt")?.textContent || "No rating";
      const reviews =
        item.querySelector(".a-size-base")?.textContent || "No reviews";
      const imageUrl = item.querySelector(".s-image")?.src || "No image";

      products.push({ title, rating, reviews, imageUrl });
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to scrape data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
