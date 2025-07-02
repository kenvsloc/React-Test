// import Header from "./Header.jsx"
// import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import './App.css'

// import Card from "./components/Card.jsx"
// import Student from "./components/Student.jsx"
// import List from "./components/List.jsx"
// import UserGreeting from "./components/UserGreeting.jsx"
// import Button from "./Button/Button.jsx"
// import Button from "./components/BE.jsx"
import { ImageUploader, Card, Student, UserGreeting, List, ProfilePicture, Button } from './components';
import MyComponents from './MyComponents';
import ColorPicker from './ColorPicker';
// import TodoList from './TodoList.jsx';
import ToDoList from "./ToList.jsx";
import ProductCard from "./layouts/ProductCard.jsx";
import UserButton from "./UserButton.jsx";
import EmployeeCard from "./components/EmpoleyCard.jsx";
import ToggleButton from "./components/ToggleButton.jsx";
import Shopping from "./components/Shopping.jsx";




// import Counter from './Counter.jsx';

function App() {
  const a = 900;
  const b = 50;
  const sum = a + b;
  const subttract = a - b;
  const multiply = a * b;
  const divide = a / b;
  console.log("Tong la: ", sum);
  console.log("Hieu la: ", subttract);
  console.log("Tich la: ", multiply);
  console.log("Thuong la: ", divide);

  return (
      <>
      <Shopping />
      <ToggleButton />
      <EmployeeCard />
      <UserButton />
      <ProductCard price={a-b} name={"Gia san pham"}/>
      <ToDoList />
      {/* <TodoList /> */}
      <MyComponents />
      <ColorPicker />
      <Card />
      <Button />
      <ProfilePicture />
      <Student name="huy chu" age ="26" isStudent={false}/>
      <Student name="Legis" age ="23" isStudent={true}/>
      <UserGreeting isLoggedIn={true} username="kenvsloc" notLog="Guest" />
      <div className="card-container">
      <Card cardName={"Card 1"} description={"Ajang School"}/>
      <Card cardName={"Card 2"} description={"ninje School"}/>
      <Card cardName={"Card 3"} description={"Way School"}/>
      </div>
      <List />
      <ImageUploader />
      </>
  );

}

export default App
