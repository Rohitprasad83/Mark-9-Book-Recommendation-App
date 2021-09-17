import "./styles.css";
import { useState } from "react";

var books = {
  javascript: [
    {
      "Eloquent JavaScript": "4/5",
      "You Don't Know JS": "3/5"
    }
  ],
  fiction: [
    {
      "Shiva Trilogy": "5/5",
      "Harry Potter and the Sorcerer's Stone": "3.5/5"
    }
  ],
  business: [
    {
      abcd: "2/5",
      efgh: "1/5"
    }
  ]
};

var genres = Object.keys(books);

export default function App() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  function itemClickHandler(item) {
    var name = books[item];
    var rating = books[item];
    var bookNames = Object.keys(name[0]);
    var bookRatings = Object.values(rating[0]);
    setName(bookNames);
    setRating(bookRatings);
  }
  return (
    <div className="App">
      <h1>book recommendation App</h1>
      <h2>Check out my favourite books. select a genre to get started</h2>
      <div>
        {genres.map((item) => {
          return (
            <button
              onClick={() => itemClickHandler(item)}
              style={{ margin: "1rem" }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        <div>{name[0]}</div>
        <div>{rating[0]}</div>

        <div>{name[1]}</div>
        <div>{rating[1]}</div>
      </div>
    </div>
  );
}
