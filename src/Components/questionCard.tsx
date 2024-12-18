import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

type QuestionCardProps = {
    question: {
        question: string;
        currectAnswer: string;
        wrongAnswer1: string;
        wrongAnswer2: string;
        wrongAnswer3: string;
    };
    onAnswerSelected: (isCorrect: boolean) => void;
};

const AnswerButton = styled(Button)({
    margin: '10px',
    width: '100%',
});

const ButtonContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
});

const StyledCard = styled(Card)({
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    textAlign: 'center',
    color: '#333',
});

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswerSelected }) => {
    const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

    useEffect(() => {
        const answers = [
            question.currectAnswer,
            question.wrongAnswer1,
            question.wrongAnswer2,
            question.wrongAnswer3,
        ];
        setShuffledAnswers(answers.sort(() => Math.random() - 0.5));
    }, [question]);

    return (
        <StyledCard>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {question.question}
                </Typography>
                <ButtonContainer>
                    {shuffledAnswers.map((answer, index) => (
                        <AnswerButton
                            variant="contained"
                            color="primary"
                            key={index}
                            onClick={() => onAnswerSelected(answer === question.currectAnswer)}
                        >
                            {answer}
                        </AnswerButton>
                    ))}
                </ButtonContainer>
            </CardContent>
        </StyledCard>
    );
};

export default QuestionCard;