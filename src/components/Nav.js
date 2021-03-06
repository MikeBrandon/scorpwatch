import React , { useEffect , useState } from 'react'
import logo from "../logo/netflix_logo.png"
import profile from "../logo/profile2.png"
import "../css/Nav.css"
import {Link} from "react-router-dom";

function Nav() {
    const [show, handleShow] = useState(false);

    function scrollListener() {
        if (window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollListener);
        return () => {
            window.removeEventListener("scroll", scrollListener)
        };
    },[]);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <Link to={"/"}>
                <img
                    className={"nav_logo"}
                    src={logo}
                    alt={"scorp_watch"}/>
            </Link>
            <img
                className={"nav_avatar"}
                src={profile}
                alt={"avatar"}/>
        </div>
    )
}

export default Nav
