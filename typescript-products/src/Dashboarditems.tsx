import { useParams } from "react-router-dom";

const Dashboarditems = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Dashboard Items {id}</h1>
        </div>
    );
};

export default Dashboarditems;