import React, {useState} from 'react';

function MyComponents() {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [payment, setPayment] = useState("Cash");
    const [shipping, setShipping] = useState("");
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] =useState(new Date().getFullYear());
    const [carMaker, setCarMaker] = useState("");
    const [carModel, setCarModel] = useState("");

    const [foods, setFoods] = useState(["Apple", "Banana", "Orange", "Mango"]);

    const updateName = () => {
        setName("Huy Chu");
        console.log(" Huy Chu Login");

    }

    function handleAddCar() {
        const newCar = {year: carYear, maker: carMaker, model: carModel}

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMaker("");
        setCarModel("");

    }
    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));

    }

    function handleYearChange(event){
        setCarYear(event.target.value)

    }

    function handleMakerChange(event){
         setCarMaker(event.target.value)

    }

    function handleModelChange(event){
         setCarModel(event.target.value)

    }


    function handleAddFoods() {

        const newsFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f =>[...f, newsFood]);
        console.log(setFoods);
    }

    function handleRemoveFoods(index) {

        setFoods(foods.filter((_, i) => i !== index));

    }
    function handlePaymentChange(event) {
        setPayment(event.target.value);
        console.log("Payment Method: ", event.target.value);
    }


    function handleQuantityChange(event) {
        setQuantity(event.target.value);
        console.log("Quantity: ", event.target.value);
    }

    const incrementAge = () => {
        setAge(age + 1);
        console.log("Incremented Age: ", age + 1);

    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
        console.log("Toggled Employment Status: ", !isEmployed);
    }

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);

    }
    return (
        <div>

            <div>
                <h2>List of car object</h2>
                <ul>
                    {cars.map((car, index) =>
                         <li key={index} onClick={() => handleRemoveCar(index)} >
                            {car.year} {car.maker} {car.model}

                         </li>)}

                </ul>

                <input type="number" value={carYear} onChange={handleYearChange} /><br />
                <input type="text" value={carMaker} onChange={handleMakerChange} /><br />
                <input type="text" value={carModel} onChange={handleModelChange} /><br />
                <button onClick={handleAddCar}>Add Car</button>

            </div>

            <h2>list of Food</h2>
            <ul>
                {foods.map((food, index) =>
                <li key={index}  onClick={() => handleRemoveFoods(index)}>
                {food}
                </li>)}
            </ul>
            <input type="text" name="" id="foodInput" />
            <button onClick={handleAddFoods}>Add Food</button>
            <input value={name} onChange={handleNameChange} type="text" />
            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>
            <p>Name: {name}</p>
            <button onClick={updateName}>set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>true flase</button>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="All school">All School</option>
                <option value={"Ajang"}>Ajang</option>
                <option  value={"Ninje"}>Ninje</option>
                <option value={"Hyang"}>Hyang</option>
                <option  value={"shinchi"}>shinchi</option>
            </select><br/>

            <input type="radio"  value="GHN" checked={shipping === "GHN"}
            onChange={handleShippingChange}/>
            <label htmlFor="">GHN</label><br/>


            <input type="radio"  value="GHTK" checked={shipping === "GHTK"}
            onChange={handleShippingChange}/>
            <label htmlFor="shipping">GHTK</label>
            <p id='shiping'>Shipping : {shipping}</p>
        </div>
    );

}

export default MyComponents;