function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 89 },
    { id: 3, name: "orange", calories: 47 },
    { id: 4, name: "grape", calories: 69 },
    { id: 5, name: "kiwi", calories: 61 },
  ];

      //  fruits.sort((a, b) => a.calories - b.calories);
      // fruits.sort((a, b) => a.name.localeCompare(b.name));

      // const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 70);
      const lowCalorieFruits = fruits.filter(fruit => fruit.calories > 70);


  const listItems = lowCalorieFruits.map(lowCalorieFruits => (
    <li key={lowCalorieFruits.id}>{lowCalorieFruits.name}: &nbsp;{lowCalorieFruits.calories}</li>
  ));

  return <ul>{listItems}</ul>;
}

export default List;