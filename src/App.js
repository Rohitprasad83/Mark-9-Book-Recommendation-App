import React from "react";
import "./styles.css";
import { useState } from "react";

var books = {
  Java: [
    {
      bookName: "Head First Java",
      rating: "4/5",
      info:
        "A visually rich format designed for the way your brain works. If you haven't, you're in for a treat. You'll see why people say it's unlike any other Java book you've ever read."
    },
    {
      bookName: "Effective Java, Third Edition",
      rating: "4.5/5",
      info:
        "Each chapter of Effective Java, Third Edition, consists of several “items,” each presented in the form of a short, stand-alone essay that provides specific advice, insight into Java platform subtleties, and updated code examples. "
    },
    {
      bookName: "Java: The Complete Reference",
      rating: "4.1/5",
      info:
        "The Complete Reference, explains how to develop, compile, debug, and run Java programs. Best-selling programming author Herb Schildt covers the entire Java language, including its syntax, keywords, and fundamental programming principles. "
    }
  ],
  Python: [
    {
      bookName: "Think Python",
      rating: "4.5/5",
      info:
        "Think Python is undoubtedly one of the best books out there to get into the basics of Python programming."
    },
    {
      bookName: "Python Programming: An Introduction to Computer Science",
      rating: "4/5",
      info:
        "Thanks to the ease and simplicity of Python, it can be an awesome first programming language for beginners. Similarly, “Python Programming: An Introduction to Computer Science” has been written with a singular goal of making the fundamentals of Python as easy as possible for beginners."
    },
    {
      bookName: "Python Pocket Reference: Python in Your Pocket",
      rating: "4.5/5",
      info:
        "“Python Pocket Reference: Python in Your Pocket” is not really a full-on Python learning resource but instead offers instant references to developers on a host of Python topics.  "
    }
  ],
  "C++": [
    {
      bookName: "C++ Primer 5th Edition",
      rating: "4.5/5",
      info:
        "C++ Primer (5th Edition) 5th Edition written by Stanley B, introduces the C++ standard library from the outset. It helps you to write useful programs without the need to master every aspect of C++ language."
    },
    {
      bookName: " C++ Pocket Reference 1st Edition",
      rating: "4/5",
      info:
        "Accelerated C++: Practical Programming, written by Andrew Koenig. This introductory book that takes a practical approach to solve problems using C++. "
    },
    {
      bookName: "Effective Modern C++",
      rating: "4.6/5",
      info:
        "Effective Modern C++ is a book written in the form of guidelines and not rules because guidelines have exceptions. The most important part of each Item is not the advice it offers, but the rationale behind the advice.  "
    }
  ]
};

var genres = Object.keys(books);

export default function App() {
  var [name, setName] = useState("Java");
  function bookNameHandler(clickedName) {
    setName(clickedName);
  }
  return (
    <div className="App">
      <div id="container">
        <h1>Book recommendation App📚</h1>
        <h2>Check out my favourite books. select a genre to get started</h2>
        <div>
          {genres.map((item, index) => {
            return (
              <button
                onClick={() => bookNameHandler(item)}
                style={{ margin: "1rem" }}
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>
        <hr />
        <div id="content">
          <ul>
            {books[name].map((item, index) => (
              <li key={index}>
                <div className="info-list" id="bookHeading">
                  {item.bookName}
                </div>
                <div className="info-list" id="bookRating">
                  {item.rating}
                </div>
                <div className="info-list">{item.info}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
