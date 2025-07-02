// ParentComponent.jsx
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const admin = {name: 'Huy', age: '26', email: 'huykenvsloc@gmail.com', phone: "0986675807"};
  const {name, age, email, phone} = admin;

  console.log(name,age,email,phone);
  const userName = "Huy";

  const currentYear = new Date().getFullYear();
  const birthYear = 1999;
  const userAge = currentYear - birthYear;

  const userPhone = "0986675807";
  const userEmail = "huykenvsloc@gmail.com";


  const InfoAdmin = () => {

    return <h1>helo {admin.name}</h1>
  }

  return (
    <div>
      <InfoAdmin />
      <ChildComponent name={userName} age={userAge} phone={userPhone} email={userEmail} />
    </div>
  );
}

export default ParentComponent;