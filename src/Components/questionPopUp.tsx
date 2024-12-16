import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, Typography } from '@mui/material';
import { BoxStyled, CardCoverStyle, CardStyled } from '../Styles/cardStyle';
import { useState } from 'react';

interface QuestionProp {
  question: string;
  currectAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
  wrongAnswer3: string;
}

const data: QuestionProp = {
  question: "question one",
  currectAnswer: "Right answer",
  wrongAnswer1: "Wrong answer1",
  wrongAnswer2: "Wrong answer2",
  wrongAnswer3: "Wrong answer3",
}


export const QuestionCard = ({ currectAnswer, question, wrongAnswer1, wrongAnswer2, wrongAnswer3 }: QuestionProp) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <BoxStyled>

      <CardStyled  >
        <CardCoverStyle>
          <FormGroup style={{ alignItems: 'flex-start'}} >
            <Typography style={{ position: "absolute", top: "5%", left: "5%", fontWeight: "bold" }}>{data.question}</Typography>
            <RadioGroup value={selectedValue} onChange={handleChange} style={{ gap: '30px', paddingTop: "15%", paddingLeft: "5%" }}>
              <FormControlLabel value={data.currectAnswer} control={<Radio />} label={data.currectAnswer} />
              <FormControlLabel value={data.wrongAnswer1} control={<Radio />} label={data.wrongAnswer1} />
              <FormControlLabel value={data.wrongAnswer2} control={<Radio />} label={data.wrongAnswer2} />
              <FormControlLabel value={data.wrongAnswer3} control={<Radio />} label={data.wrongAnswer3} />
            </RadioGroup>
          </FormGroup>


        </CardCoverStyle>
      </CardStyled>
    </BoxStyled>
  )
}
