function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart.svg" alt="heart" height={32} width={32}/>
            </div>
            <img width={112} height={112} src="/img/sneakers/1.jpg" alt="sneakers" className="ml-20"/>
            <h5>Men sneakers Rabook or Nikey version 44</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>$159.99</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                </button>
            </div>
        </div>
    );
}

export default Card;