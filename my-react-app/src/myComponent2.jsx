import React, {useState} from 'react';

function MyComponent() {

    const [car, setCar] = useState({year:2024, model:"Honda", color:"Red", maker:"Honda"});

    function handleYearChange(event) {
        setCar(c => ({...c, year: event.target.value}));
        console.log("Year changed to: ", event.target.value);
    }
    function handleModelChange(event) {}
    function handleColorChange(event) {}
    function handleMakerChange(event) {}


    return (
        <>

        </>
    )
}

export default MyComponent