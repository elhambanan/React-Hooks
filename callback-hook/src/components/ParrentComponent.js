import { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const ParentComp = () => {
    const [age, setAge] = useState(0);
    const [score, setScore] = useState(0);

    const ageHandler = useCallback(() => {
        setAge(age + 1)
    },[age]);

    const scoreHandler = useCallback(() => {
        setScore(score + 10)
    },[score])
    return ( 
        <div>
            <Title/>
            <Count text="age" count={age}/>
            <Button handleClick={ageHandler}>Age</Button>
            <Count text="score" count={score}/>
            <Button handleClick={scoreHandler}>Score</Button>
        </div>
     );
}
 
export default ParentComp;