const Header = () => {
    return ( 
        <header className="p-2 bg-primary-4 sticky top-0 right-0 left-0">
            <nav>
                <ul className="flex justify-start items-center">
                    <li><img src={'/images/logo.png'} className='w-20' /></li>
                    <li className="flex-1 flex justify-center items-center">contact App</li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;