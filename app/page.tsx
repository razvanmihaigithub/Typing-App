"use client";

import React, { useState } from "react";

export default function Home() {
  // Sample list of problem words
  const problemWords = `This paper outlines procedures for regular transactions like payments and accruals, focusing on consistency, security, and auditability. It details smart contract protocols and data management for transaction integrity and privacy, ensuring compatibility with existing systems. The aim is to standardize blockchain transactions to improve efficiency, transparency, and trust in decentralized finance, offering solutions for automated payments and accrual recognition, thus revolutionizing real-time economic interactions through decentralized finance.`
    .replace(/[,]/g, '') // Remove punctuation
    .split(' '); // Split the paragraph into individual words

  // These are states to keep track of the word index and the typed word
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");

  const handleInputChange = (event: any) => {
    const inputWord = event.target.value;
    setTypedWord(inputWord);

    if (inputWord.trim() === problemWords[currentWordIndex]) {
      // Move to the next word
      setCurrentWordIndex(currentWordIndex + 1);
      // Reset the input field
      setTypedWord("");
    }
  };

  const resetWordIndex = () => {
    setCurrentWordIndex(0);
  };

  return (
    <div className="container">
      <h1>You have {problemWords.length} problem words.</h1>
      <div className="words">
        {problemWords.map((word, index) => (
          <span
            key={index}
            className={index === currentWordIndex ? "current-word" : ""}
          >
            {word}{" "}
          </span>
        ))}
      </div>
      <input
        type="text"
        value={typedWord}
        onChange={handleInputChange}
        placeholder="Type the highlighted word"
        autoFocus
        style={{ color: "black" }} // This line changes the text color to black
      />

      <button onClick={resetWordIndex}>Reset me!</button>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        .words {
          margin-bottom: 20px;
        }
        .current-word {
          color: #5D5DEE;
          font-weight: bold;
        }
        input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
