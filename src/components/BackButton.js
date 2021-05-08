import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function BackButton({ history }) {

    const user = useAuth(history)

    return (
        <Link to={`/${user}/inicio`}>
            <div className='bg-botoncito btn mt-3 ml-3' type="button">Volver</div>
        </Link>
    );
}