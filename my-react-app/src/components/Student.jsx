function Student(props) {

    return (
         <div className="student">
            <p>Name: {props.name}</p>
            <p>Name: {props.age}</p>
            <p>Name: {props.isStudent ? "Yes" : "No"}</p>
         </div>
);

}
export default Student;