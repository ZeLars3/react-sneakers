function Header() {
    return (
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={80} height={60} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={23} height={23} src="/img/cart.png" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={23} height={23} src="/img/user.png" />
          </li>
        </ul>
      </header>
    );
  }
  
  export default Header;