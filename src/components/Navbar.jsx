import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useEffect, useState } from "react";
import { login, logout, onUserStateChange } from '../api/firebase';

function Navbar () {
    const [user, setUser] = useState();
    
    useEffect(() => {
        onUserStateChange(setUser);
    }, [])

    const handleLogin = () => {
        login().then(setUser);
    }

    const handleLogout = () => {
        logout().then(setUser);
    }

    return (
        <header className="flex justify-between border-b border-gray-300 p-2">
            <Link to="/" className="flex items-center text-4xl text-brand">
                <FiShoppingBag></FiShoppingBag>
                Shoppy
            </Link>

            <nav className="flex items-center gap-4 font-semibold">
                <Link to="/products">Products</Link>
                <Link to="/cart">Carts</Link>
                <Link to="/products/new">
                    New Product
                </Link>

                {!user && <button onClick={handleLogin}>Login</button>}
                {user && <button onClick={handleLogout}>Logout</button>}
                
            </nav>
        </header>
    )
}

export default Navbar;