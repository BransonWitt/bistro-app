import { useRef } from "react";
import "./Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar () {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <img src = 'https://s28151.pcdn.co/offices/marketing-and-communications/wp-content/blogs.dir/3/files/sites/106/2019/08/CU_Seal_Red_SM_60_75_v4-300x300.png' 
                    alt='ClarkU Seal'
                    height = '70'
                    width = '70'/>
            <nav ref = {navRef}>
                <div id="HeaderText">
                    <a href ="index.html" className="navList">Home</a>

                    <a href ="index.html" className="navList">Menu</a>

                    <a href ="index.html" className="navList">Account</a>

                    <a href ="index.html" className="navList">
                        Cart
                    </a>
                </div>
                
                <button className = 'nav-btn nav-close-button' onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className = 'nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;