const NavBar = () => {
  return(
   <>
   <header>
    <div className="nav-bar">
        <div className="brand">E-Cart</div>
        <div className="search-bar">
            <input type="text" placeholder="Search Products" />
        </div>
        <div className="cart">Cart</div>
    </div>

    <div className="nav-bar-wrapper">
        <div className="items">Filter by{"->"}</div>
        <div className="items">Mobiles</div>
        <div className="items">Laptops</div>
        <div className="items">Tablets</div>
    </div>


   </header>
   </>
  )
};
export default NavBar;
