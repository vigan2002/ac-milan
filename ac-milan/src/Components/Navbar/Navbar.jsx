import React, { useEffect, useState } from 'react';
import logo from '../../Assets/sponsor/logo.png';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import LoginModal from '../Login/Modal/LoginModal';
import Login from '../Login/Login';


const Navbar = () => {

    const [toggleBtn, setToggleBtn] = useState(false);
    const [checkUser, setCheckUser] = useState(localStorage.getItem("user"));
    const [openModal, setOpenModal] = useState(false);


    const toggleMenu = () => {
        if (window.innerWidth <= 768) {
            setToggleBtn(!toggleBtn);
            document.body.classList.toggle("scroll-y");
            window.scrollTo(0, 0);
        }
    }

    const logOut = () => {
        localStorage.setItem("user", "")
        setCheckUser("")
    }

    useEffect(() => {
        setCheckUser(localStorage.getItem("user"))
    }, [openModal])


    return (
        <div className='navbar'>
            <div className="navbar-wrapper">
                <ul
                    onClick={() => toggleMenu()}
                    className={`${toggleBtn ? "mobile-menu" : ""} menu`}
                >
                    <li>
                        <img src={logo} alt="" />
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/glory">Glory</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/season">Season</NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/team">Team</NavLink>
                    </li>
                    <li>
                        <NavLink to="/academy">Academy</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-player">My Player</NavLink>
                    </li>
                    <li>
                        {checkUser ? (
                            <>
                                <button onClick={() => logOut()}>Log out</button>
                                <span>"{checkUser}"</span>
                            </>
                        ) : (
                            <button onClick={() => setOpenModal(true)}>Login</button>
                        )}
                    </li>
                </ul>
                <button className='btn-menu' onClick={() => toggleMenu()}>
                    Menu
                </button>
                <LoginModal isOpen={openModal} closeModal={()=>setOpenModal(false)}>
                    <Login close={() =>setOpenModal(false)}/>
                </LoginModal>
            </div>
        </div>
    )
}

export default Navbar