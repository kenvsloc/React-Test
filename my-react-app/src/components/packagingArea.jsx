const itemPortal = React.createContext();
import DiningRoom from "./DiningRoom";

function Packing() {

    const items = { food: 'Pizza', drink: 'Coke' };
    const items2 = { food: 'Burger', drink: 'Pepsi' };
    const items3 = { food: 'Pasta', drink: 'Water' };
    const items4 = { food: 'Salad', drink: 'Juice' };
    const items5 = { food: 'Sushi', drink: 'Tea' };

    return (
        <itemPortal.Provider value={{ items, items2, items3, items4, items5 }}>
            <DiningRoom />
        </itemPortal.Provider>
    );
}

export default Packing;