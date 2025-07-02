import {useState, useEffect, useRef} from 'react';



const ToDoList = () => {

    function OpenClose2 () {
        const myElementRef = useRef(null);

        useEffect(() => {
            if (myElementRef.current) {
                myElementRef.current.style.color = "blue";
            }
        }, []);

        return (
            <>
            <h1>helo</h1>
        <button ref={myElementRef}>lieu phan tu co doi mau hay khong</button>
        </>
        )
    }

    function OpenClosePlus2 () {
        const handleClicks = (e) => {
            console.log('kieu su kien:', e.type);
            console.log('phan tu duoc click:', e.target);
            e.preventDefault();// ngan hanh vi mac dinh
        };

        return <button onClick={handleClicks}>Nhan vao day</button>
    };

    function OpenClosePlus () {
        useEffect(() => {
            const handleScroll = () => {
                console.log("cua so duoc cuon xuong");
            };

            window.addEventListener('scroll',  handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };

        }, []);

        return <div>cuon de xem log trong console</div>
    };

    function OpenClose () {
    const myButton = document.getElementById("mybutton");
    const handleClick = () => {
        if(myButton.style.display == "none"){
        myButton.style.display = "block";
        // myHide.textContent = "Hide";
    }
    else{
        myButton.style.display = "none";
        // myHide.textContent = "Show";
    }
    };

    return <button onClick={handleClick}>Click me</button>

}

    const [isEmployed, setIsEmployed] = useState(false);
    const handleChangeText= (e) => e.target.textContent = "Good thing"; // change Text

    //Get Id
    const AddTodo = document.getElementById('AddTask');


    const [optionsChange, setOptionsChange] = useState("");


    function handleChangeColor () {
        console.log("mau da duoc thay doi ")

    };




    function handleOptionsChange(event) {
        setOptionsChange(event.target.value);
        console.log("Payment Method: ", event.target.value);
    }







    console.log(AddTodo);



    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
        console.log("Toggled Employment Status: ", !isEmployed);
    }


    return(
        <div className="lab-Area1">
            <button onClick={toggleEmployedStatus}>ADD</button>
            <button className='button-edit' onClick={handleChangeColor} id='mybutton'>asd</button>
            <p>Is employed: {isEmployed ? "ADD+" : "InputTask"}</p>
            <select className='option-1' value={optionsChange} onChange={handleOptionsChange}>
                <option value="All school">All School</option>
                <option value={"Ajang"}>Ajang</option>
                <option  value={"Ninje"}>Ninje</option>
                <option value={"Hyang"}>Hyang</option>
                <option  value={"shinchi"}>shinchi</option>
            </select><br/>
            <p>option: {optionsChange}</p>
            <OpenClose />
            <OpenClose2 />
            <OpenClosePlus />
            <OpenClosePlus2 />

            <button onClick={handleChangeText}  id='AddTask'>AddTask</button>


        </div>
    )

    }

export default ToDoList;