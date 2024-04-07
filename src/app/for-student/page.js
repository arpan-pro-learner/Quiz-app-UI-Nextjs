"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const questions = [
    {
      id: 1,
      question: "Q1. What is the capital of France?",
      options: ["Berlin", "Paris", "London"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      question: "Q2. What is the capital of Italy?",
      options: ["Rome", "Berlin", "London"],
      correctAnswer: "Rome",
    },
    {
      id: 3,
      question: "Q3. What is the capital of Germany?",
      options: ["Berlin", "Paris", "Rome"],
      correctAnswer: "Berlin",
    },
    {
      id: 4,
      question: "Q4. What is the capital of Spain?",
      options: ["London", "Madrid", "Brussels"],
      correctAnswer: "Madrid",
    },
    {
      id: 5,
      question: "Q5. What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Tokyo"],
      correctAnswer: "Tokyo",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setSelectedAnswer("");
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowDialog(true);
      }
    } else {
      // Handle incorrect answer
      // You can show an error message or do other actions here
      alert(
        `❌Incorrect answer❌ \nCorrect Answer: ${currentQuestion.correctAnswer}`
      );
    }
  };

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setCurrentQuestionIndex(0); // Reset to first question
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="bg-gray-1000 min-h-screen py-12 sm:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">
                Quiz Id: #Q107
              </p>
              <h1 className="text-3xl font-bold tracking-tight">
                {currentQuestion.question}
              </h1>
              <p className="text-base leading-loose text-gray-500">
                Choose the correct answer.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 cursor-pointer"
                    onClick={() => handleAnswerSelection(option)}
                  >
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id={option}
                        name="answer"
                        required
                        type="radio"
                        checked={selectedAnswer === option}
                        onChange={() => {}}
                      />
                      <label className="form-check-label" htmlFor={option}>
                        {option}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Button size="lg" variant="outline">
              Previous
            </Button>
            <Button
              size="lg"
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
            >
              {currentQuestionIndex === questions.length - 1
                ? "Finish"
                : "Next"}
            </Button>
          </div>
        </div>
      </div>
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-3xl font-semibold mb-4">Congratulations 🎊</p>
            <p className="text-lg text-gray-700 mb-6">
              You have passed the quiz.
            </p>
            <Link href="/">
              {" "}
              <Button size="lg" onClick={handleDialogClose}>
                Go back home
              </Button>{" "}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
