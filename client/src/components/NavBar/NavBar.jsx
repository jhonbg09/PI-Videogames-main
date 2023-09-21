import { Link } from "react-router-dom/cjs/react-router-dom"
import style from "./NavBar.module.css"
const NavBar=()=>{
    return(
        <div className={style.navBar}>
            <Link className={style.links} to="/videogames">Home</Link>
            <Link className={style.links} to="/form">Created Videogames</Link>
        </div>
    )
}

export default NavBar