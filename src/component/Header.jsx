import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(UserContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Auth Hutt</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <button onClick={handleLogOut} className="btn btn-xs mx-2">Sign out</button>
                        </>
                        :
                        <>
                            <Link className='mx-2' to='/login'>Login</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;