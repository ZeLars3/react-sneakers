function Header(props) {
    return (
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={80} height={60} src="/img/logo.png" alt="logo"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={23} height={23} src="/img/cart.png" alt="cart-logo" />
            <span>1205 руб.</span>
          </li>
          <li className="cu-p">
            <img width={23} height={23} src="/img/user.png" alt="user-logo"/>
          </li>
        </ul>
      </header>
    );
  }
  
  export default Header;