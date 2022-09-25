import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Mash.css";

export default function Mash() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios
      .get("https://latelier.co/data/cats.json")
      .then((res) => {
        console.log(res.data.images);
        setCats(res.data.images);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Container">
      <a className="Button" href="/leaderboard">
        Leaderboard
      </a>
      <div className="Gallery">
        <ul>
          {cats.map((cat) => (
            <img src={cat.url} alt="Cat" height={50} width={50} />
          ))}
        </ul>
      </div>
    </div>
  );
}
