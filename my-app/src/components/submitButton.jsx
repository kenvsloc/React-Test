import { useState,useRef } from 'react';
import useToggleDisplay from '../hooks/useToggleDisplay';

function SubmitButton() {

    const box1Ref = useRef(null);
const box2Ref = useRef(null);
const box3Ref = useRef(null);

const box1 = useToggleDisplay(box1Ref);
const box2 = useToggleDisplay(box2Ref);
const box3 = useToggleDisplay(box3Ref);
const [isSubmitted, setIsSubmitted] = useState(false);
function handleSubmit() {
setIsSubmitted(true);
};
return (
    <>
    <div>
        <button onClick={box1}>ok roi</button>
        <h1>guy</h1>
        <div ref={box1Ref}>
            <p>ok chua</p>
            <p>ok chua</p>
            <p>ok chua</p>
            <p>ok chua</p>
        </div>
    </div>

    <button onClick={handleSubmit}>
{ isSubmitted ? 'Loading…' : 'Submit' }
    </button>
</>
);
};
export default SubmitButton;