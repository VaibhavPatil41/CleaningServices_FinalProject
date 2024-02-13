import { useDispatch, useSelector } from "react-redux";
import { logout } from "../loggedSlice";
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
    const dispatch = useDispatch()
    const mystate = useSelector(state=>state.logged)

    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/login')
    }

    
  return (
    <center>
        <p> Logged in : {mystate.loggedIn.toString()} </p>
      <div >
      <h4 className='mx-2'>Are you sure you want to log out?</h4>
      <button onClick={handleLogout} className='btn btn-outline-danger mx-2 mt-2'>Logout</button>
    </div>
    </center>
  );
};