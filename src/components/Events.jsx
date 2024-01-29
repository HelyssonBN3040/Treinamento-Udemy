import React from 'react'

const Events = () => {
    const HandleClick = () => {
        console.log("Executou!")
    }

    return (
        <div>
            <div>
                <button onClick={() => console.log("testando o botao")}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={HandleClick}>Executou</button>
            </div>
        </div>
    )
}

export default Events