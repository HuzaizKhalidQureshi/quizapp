import { useState } from "react";
import "./App.css";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";

function App() {
  const questions = [
    {
      question: "Total number of oceans in the World is",
      answers: [{ text: "7" }, { text: "6" }, { text: "5", isCorrect: true }],
    },
    {
      question: "Who is CEO of Tesla?",
      answers: [
        { text: "Jeff Bezos" },
        { text: "Elon Musk", isCorrect: true },
        { text: "Bill Gates" },
        { text: "Tony Stark" },
      ],
    },
    {
      question: "Who is the author of the Harry Potter book series?",
      answers: [
        { text: "J.K. Rowling", isCorrect: true },
        { text: "Stephenie Meyer" },
        { text: "Suzanne Collins" },
      ],
    },
    {
      question: "What is the smallest planet in our solar system?",
      answers: [
        { text: "Venus" },
        { text: "Mercury", isCorrect: true },
        { text: "Mars" },
      ],
    },
    {
      question: "What is the largest continent by land area?",
      answers: [
        { text: "Europe" },
        { text: "Asia", isCorrect: true },
        { text: "Africa" },
      ],
    },
    {
      question: `Who painted the famous artwork "The Mona Lisa"?`,
      answers: [
        { text: "Leonardo da Vinci", isCorrect: true },
        { text: "Pablo Picasso" },
        { text: "Vincent van Gogh" },
      ],
    },
    {
      question: "What is the highest mountain in the world?",
      answers: [
        { text: "Mount Kilimanjaro" },
        { text: "Mount Everest", isCorrect: true },
        { text: "Mount Fuji" },
      ],
    },
    {
      question: "Where is Statue of Liberty is located?",
      answers: [
        { text: "India" },
        { text: "Russia" },
        { text: "UK" },
        { text: "USA", isCorrect: true },
      ],
    },
    {
      question: "What is the capital of Germany?",
      answers: [
        { text: "Paris" },
        { text: "Berlin", isCorrect: true },
        { text: "London" },
        { text: "Dublin" },
      ],
    },
    {
      question: "Which one is the largest tropical rain forest in the world?",
      answers: [
        { text: "Amazon", isCorrect: true },
        { text: "Bosawas" },
        { text: "Southeast Asian Rain Forest" },
        { text: "Daintree Rain Forest" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    // check score
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: score not resetting
    setScore(0);

    setCurrentQuestion(0);
    setIsQuizOver(false);
  };

  return (
    <div className="App">
      {isQuizOver ? (
        <ScoreView handleResetClick={handleResetClick} score={score} />
      ) : (
        <QuizView
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;
