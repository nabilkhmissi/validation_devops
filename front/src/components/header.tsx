
import { useEffect, useRef } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

    const header = useRef<any>(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const headerElement = header.current;
            const scrollY = window.scrollY;
            if (scrollY > 200) {
                headerElement.style.backgroundColor = "white"
            } else {
                headerElement.style.backgroundColor = "transparent"
                headerElement.style.backdropFilter = "none"
            }
        })
    }, [])

    return (
        <div className="header" ref={header}>
            <Link to='' className="logo">
                <h1>RentWheels</h1>
            </Link>
            <div className="nav-links">
                <NavLink to=''>Home</NavLink>
                <NavLink to='about' >About</NavLink>
                <NavLink to='cars' >Cars</NavLink>
                <NavLink to='pricing' >Pricing</NavLink>
                <NavLink to='contact' >Contact</NavLink>
            </div>
            <div className="nav-actions">
                <button>Search</button>
                <button>Login</button>
            </div>
        </div >
    )
}