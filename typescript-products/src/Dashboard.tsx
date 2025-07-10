import { Link } from "react-router-dom";

const Dashboard = () => {

    const dashboarditems = [
        { id: 1, title: 'My Profile',},
        { id: 2, title: 'Settings',},
        { id: 3, title: 'Notifications',},
    ];

    return (
        <>
        <div>
            <h1>Dashboard Page</h1>
        </div>
        <ul>
            {dashboarditems.map(item => (
                <li key={item.id}>
                    <Link to={`/dashboard/${item.id}`}>
                        <h2>{item.title}</h2>
                    </Link>
                </li>
            ))}

        </ul>
        </>
    );

};

export default Dashboard;