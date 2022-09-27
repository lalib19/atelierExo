import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Arena.css";
import { Link, useNavigate } from "react-router-dom";

export default function Arena() {
  const [cats, setCats] = useState(false);
  const [orderedCats, setOrderedCats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    {
      isLoading &&
        axios
          .get("https://latelier.co/data/cats.json")
          .then((res) => {
            setCats(res.data.images.slice(90));
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
    }
  }, [cats]);

  const handleSelect = (i) => {
    let copy = [...cats];
    orderedCats.push(copy[i]);
    copy.splice(i, 1);
    setCats(copy);
  };

  const toResults = () => {
    orderedCats.push(cats[0]);
    orderedCats.reverse();
    navigate("/results", {
      state: { orderedCats },
    });
  };

  return (
    <div className="container">
      {cats && cats.length > 1 ? (
        <div className="inner">
          <h1>Click and eliminate a cat</h1>
          <div className="showdown">
            <div>
              <img
                src={cats[0].url}
                alt="Cat"
                className="contender"
                height={500}
                width={500}
                onClick={() => handleSelect(0)}
              />
            </div>
            <div>
              <img
                src={cats[1].url}
                alt="Cat"
                className="contender"
                height={500}
                width={500}
                onClick={() => handleSelect(1)}
              />
            </div>
          </div>
        </div>
      ) : (
        cats && (
          <div className="victory">
            <h2>Victory to the cutest cat !!</h2>
            <img
              src={cats[0].url}
              alt="Cat"
              className="contender"
              height={500}
              width={500}
            />
            <a className="button" onClick={toResults}>
              Results
            </a>
          </div>
        )
      )}
    </div>
  );
}
