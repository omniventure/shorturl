import React, { useState } from "react";
// import UrlForm from "./components/UrlForm";
import "./App.css";

function App() {
  const [urlStr, setUrlStr] = useState("example.com");
  const [shortUrl, setShortUrl] = useState();
  const [urlList, setUrlList] = useState([]);
  const onUrlSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${urlStr}`
      );
      const response = await data.json();
      const shrtco = response;
      const shortUrl = shrtco["result"]["short_link"];
      for (let item of Object.keys(shrtco["result"])) {
        console.log(item);
      }
      setShortUrl(shortUrl);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <header className="container">
        <h1>Short Url App</h1>
        <form onSubmit={onUrlSubmit}>
          <input
            type="text"
            value={urlStr}
            onChange={(e) => setUrlStr(e.target.value)}
          />
          <button>submit</button>
        </form>
      </header>
      <section className="container">
        <div>{shortUrl}</div>
      </section>
    </>
  );
}

export default App;
