import  { useContext } from 'react';
import { Context } from '../User/ConTextApi/ConTextApi';
import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivetRouter = ({children}) => {
    const location = useLocation()
    const {user,loading}= useContext(Context)
    const navigate = useNavigate()
    console.log(location);
    if(loading){
        return <span className="loading loading-dots flex  mx-auto w-1/5"></span>
    }
        if(user){
            return children;
        }
         return <Navigate state={location.pathname} to={`/login`}></Navigate>
        // return navigate(`/login`)
};

export default PrivetRouter;

PrivetRouter.propTypes ={
    children: PropTypes.node
}