import React, { useContext } from 'react';
import { itemPortal } from './packagingArea.jsx';

function DiningRoom() {
    const { items, items3, items5 } = useContext(itemPortal);

    return (
        <div>
            <h2>Welcome to the Dining Room</h2>
            <p>Table 1: {items.food} with {items.drink}</p>
            <p>Table 3: {items3.food} with {items3.drink}</p>
            <p>Table 5: {items5.food} with {items5.drink}</p>
        </div>
    );
}

export default DiningRoom;