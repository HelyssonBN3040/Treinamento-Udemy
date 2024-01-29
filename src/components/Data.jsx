import React from 'react'
import { useState } from 'react'


const Data = () => {
    const [DpsNumero, setDpsNumero] = useState(15)

    return (
        <div>
            <div>
                {/*Utilizando Hooks com useState*/}
                <p>Valor com userState: {DpsNumero}</p>
                <button onClick={() => setDpsNumero(50)}>Muda o Valor Acima</button>
            </div>
        </div>
    )
}

export default Data