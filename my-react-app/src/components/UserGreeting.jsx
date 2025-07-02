import Button from "./Button";
import Card from "./Card";

export default function UserGreeting(props) {

    const welcomtetext = "Welcome to our website";

    const welcomeMessage = <h2><Card cardName="okla" description={welcomtetext} />,{props.username}</h2>

    const notLogin = <h2><Button />, {props.notLog}</h2>

   return(props.isLoggedIn ? welcomeMessage : notLogin);
    // return (
    //     <div className="user-greeting">
    //         {props.isLoggedIn ? welcomeMessage : notWelcomeMessage}
    //     </div>
    // );
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
