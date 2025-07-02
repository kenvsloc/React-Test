function Button(){



        const handleClick = (e) => e.target.textContent = "Good thing";


    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    return(<button onClick={ (e) => handleClick(e)} >Click me 😂</button>);
}

export default Button;