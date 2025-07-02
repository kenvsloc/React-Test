import {useState} from "react"

function Test() {
    const [user, setUser] = useState({
  name: '',
  email: '',
  number: ""
});

function handleChange(event) {
  const { name, value } = event.target;
  setUser({
    ...user,
    [name]: value
  });
}

return (
  <div>
    <input name="name" onChange={handleChange} />
    <input type="number" name="number" onChange={handleChange} />
    <input name="email" onChange={handleChange} />
    <p>{user.name}</p>
    <p>{user.number}</p>
    <p>{user.email}</p>
  </div>
);

}

export default Test;