import React, { useEffect, useState } from "react";
import axios from "axios";
import cheerio from "cheerio";

const WebScrape: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://engineering.buffalo.edu/computer-science-engineering/undergraduate/courses.html",
      );
      console.log(result);
      const $ = cheerio.load(result.data);
      const scrapedData = $(".columns-bg columns-bg-1").text(); // replace 'div' with the selector for the data you want
      setData(scrapedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Scraped Data:</h1>
      <p>{data}</p>
    </div>
  );
};

export default WebScrape;
