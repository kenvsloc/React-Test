// ParentComponent.jsx
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const userName = "Alice";
  const userAge = 30;
  const userPhone = "0986675807";

  return (
    <div>
      <ChildComponent name={userName} age={userAge} phone={userPhone} />
    </div>
  );
}

export default ParentComponent;