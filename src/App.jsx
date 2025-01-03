import React from "react";
import Card from './components/Card/Card.jsx'
import Header from './components/Header/Header.jsx'
import Drawer from './components/Drawer/Drawer.jsx'

const arr = [
    { title: "Sneakers Norm", price: 499.99, imageUrl: "/img/sneakers/1.jpg"},
    { title: "Sneakers Rom", price: 4399.99, imageUrl: "/img/sneakers/2.jpg"},
    { title: "Sneakers Speed", price: 4199.99, imageUrl: "/img/sneakers/3.jpg"},
    { title: "Sneakers Mor", price: 4299.99, imageUrl: "/img/sneakers/4.jpg"},
]

function App() {
    const [cartOpened, setCartOpened] = React.useState(false);
    return <div className="wrapper clear">
        <Header onClickCart={() => setCartOpened(true)}/>
        {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}

        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>All sneakers</h1>
                <div className="search-block d-flex ">
                <img height={24} width={24} src="/img/search.svg" alt="search" />
                    <input placeholder="Search..." />
                </div>
            </div>

            <div className="d-flex">
                {
                    arr.map((obj)=> (
                    <Card
                        key={obj.id}
                        title={obj.title}
                        price={obj.price}
                        imageUrl={obj.imageUrl}
                        onAddItem={() => console.log("Added to cart")}
                        onAddFavorite={() => console.log("Added to favorite")}
                    />
                ))
                }
            </div>
        </div>
    </div>
}

export default App
