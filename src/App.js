

import { useState } from 'react';
import './App.css';
import Feddbackitem from './component/finderApp/Feddbackitem';
import Header from './component/finderApp/Header';
import FeedbackData from './component/finderApp/FeedbackData';
import FeedbackList from './component/finderApp/FeedbackList';

function App() {
  const [feedback, setFeedback]=useState(FeedbackData)
  return (
    <>
    <Header text="goodluck"></Header>
    <div className="container">
    <FeedbackList feedback={feedback}></FeedbackList>
    </div>
    </>
  );
}

export default App;
