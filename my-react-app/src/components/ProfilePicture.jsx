import ProfilePic from './assets/1.png';



function ProfilePicture() {

    const  handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} className="card" src={ProfilePic}></img>);

}

export default ProfilePicture