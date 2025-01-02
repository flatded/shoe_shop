function Drawer() {
    return (
        <div style={{display: "none"}} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-40">Shopping cart <img className="cu-p" src="/img/remove.svg"
                                                                                alt="remove" height={32} width={32}/>
                </h2>
                <div className="items">
                    <div className="cartItems d-flex align-center mb-20">
                        <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemsImg"></div>
                        <div className="mr-20">
                            <p className="mb-5">Men sneakers Rabook or Nikey version 44</p>
                            <b>$159.99</b>
                        </div>
                        <img className="remove" src="/img/remove.svg" alt="remove" height={32} width={32}/>
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Total: </span>
                            <div></div>
                            <b>$1799.99</b>
                        </li>
                        <li className="d-flex">
                            <span>Tax 8%: </span>
                            <div></div>
                            <b>$143.99</b>
                        </li>
                    </ul>
                    <button className="greenButton">Make an order <img src="/img/arrow.svg" alt="arrow"/></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;