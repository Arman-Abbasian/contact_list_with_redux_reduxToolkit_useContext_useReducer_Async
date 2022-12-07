import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header className="p-2 bg-primary-4 sticky top-0 right-0 left-0 mb-5">
            <nav>
                <ul className="flex justify-start items-center gap-10">
                    <li><img src={'/images/logo.png'} className='w-20' /></li>
                    <ul className="flex-1 flex justify-start items-center gap-6">
                        <li className="hover:bg-primary-1 p-2 rounded-sm transition-all duration-300"><Link to="/">contact List</Link></li>
                        <li className="hover:bg-primary-1 p-2 rounded-sm transition-all duration-300"><Link to="/add">Add contact</Link></li>
                    </ul>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;