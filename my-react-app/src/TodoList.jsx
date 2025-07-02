import React, {useState} from 'react';
import { Header, Nav, ListArea, Footer } from './components/TodoListComponents.jsx';

function TodoList() {

//Global state
  const [items, setItems] = useState([]);

//handler function that takes item as a parameter
  function handleAddItems(item) {

  //setter function that returns a new array with elements from current state with a new item
    setItems((items) => [...items, item]);
  }

    return (
         <>
    <div>
        <Header />
        <Nav  handleAddItems={handleAddItems} />
        <ListArea items={items}/>
        <Footer  items={items}/>
    </div>
        </>
);

}
export default TodoList;