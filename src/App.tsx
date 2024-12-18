// import { QuestionCard } from './Components/questionPopUp';


// function App() {
//   return (
//     <QuestionCard question={''} currectAnswer={''} wrongAnswer1={''} wrongAnswer2={''} wrongAnswer3={''} />
//   );
// }

// export default App;

// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { StyledContainer } from './Styles/StyledComponents';
import QuestionCard from './Components/questionCard';
import { fetchQuestions } from './services/api/questionService';
import './Styles/global.css';

// QuestionType interface
type QuestionType = {
    save(): unknown;
    _id: string;
    question: string;
    currectAnswer: string;
    wrongAnswer1: string;
    wrongAnswer2: string;
    wrongAnswer3: string;
};

const App = () => {
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetchQuestions().then((data) => {
            setQuestions(data);
        });
    }, []);

    const handleNextQuestion = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(score + 10);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert(`Quiz complete! Your score is: ${score + (isCorrect ? 10 : 0)}%`);
        }
    };

    if (questions.length === 0) {
        return <Typography variant="h5">Loading...</Typography>;
    }

    return (
        <StyledContainer maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Quiz Time!
            </Typography>
            <QuestionCard 
                question={questions[currentQuestionIndex]} 
                onAnswerSelected={handleNextQuestion} 
            />
            <Typography variant="h6">Score: {score}%</Typography>
        </StyledContainer>
    );
};

export default App;