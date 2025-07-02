import ProfilePic from './assets/2.jpg';
import Button from './Button';

function Card(props) {

    

    return (
        <div className="card">
            {/* <img src={ProfilePic} alt="" /> */}
            <h1>{props.cardName}</h1>
            <p>{props.description}</p>
            <Button className='btn-get' variant="primary" onClick={() => alert('Secondary clicked')}>
                    Get Student
            </Button>
        </div>
    );

}
export default Card;