// import { useState } from 'react'
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import { useState, useEffect } from "react";

export default function App() {
    
  const getInitialFeedback = () => {
    const savedFeedbacks = localStorage.getItem("savedFeedbacks");
    return savedFeedbacks !== null
      ? JSON.parse(savedFeedbacks)
      : { good: 0, neutral: 0, bad: 0 };
  };
  const [feedback, setFeedback] = useState(getInitialFeedback);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const feedbackPositive = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedbacks = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("savedFeedbacks", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options
        reset={resetFeedbacks}
        total={totalFeedback}
        updateFeedback={updateFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          total={totalFeedback}
          positiveFeedback={feedbackPositive}
          feedbacks={feedback}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
}
