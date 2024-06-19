import React, { useState } from 'react'

const Formulario = () => {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Formulario enviado com sucesso!")
    }

    const handleName = (e) => setNome(e.target.value)
    console.log(nome)
    
    const handleEmail = (e) => setEmail(e.target.value)
    console.log(email)

    return (
        <div>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder='Digite seu nome' onChange={handleName} />
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Digite seu Email' onChange={handleEmail} />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Formulario