import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function BackButton({ history }) {

    const user = useAuth(history)

    return (
        <Link to={`/${user}/inicio`}>
            <div class='back-button' style={{color:'black'}}><h1>Volver</h1></div>
        </Link>
    );
}