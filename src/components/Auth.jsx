
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from "react";
import { SignInContext } from "../context/AuthContext";

const AuthForm = () => {
    const {handleClick} = useContext(SignInContext)
return (
    <div className="flex items-center flex-col">
        <button className='hover:text-white m-1' onClick={handleClick}><FontAwesomeIcon icon="fa fa-sign-in"/>Login</button>
            
    </div>
);
};

export default AuthForm