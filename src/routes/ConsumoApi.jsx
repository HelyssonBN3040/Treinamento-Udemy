import { useFetch } from '../hooks/useFetch'
import React, { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"


const ConsumoApi = () => {

    const { data: items, httpConfig, loading, error } = useFetch(url)
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const product = {
            name, price
        }
        httpConfig(product, "POST")
        // const res = await fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(product)
        // })
        // // // carregamento dinamici
        // const addeProduct = await res.json()
        // setProducts((prevProducts) => [...prevProducts, addeProduct])
    }

    // useEffect(() => {
    //     async function getData() {
    //         const res = await fetch(url)
    //         const data = await res.json()
    //         setProducts(data)
    //     }
    //     getData()
    // }, [])
    // envio de dados

    return (
        <div>

            <h1>Requisição HTTP</h1>
            {/*Loading*/}

            {loading && <p>Carregando...</p>}
            {/* tratando erros */}
            {error && <p>{error}</p>}
            <ul>
                {items && items.map((product) => (
                    <li key={product.id}>{product.name} - R${product.price}</li>
                ))}
            </ul>
            <div className="add-product">
                <form onSubmit={handleSubmit} >
                    <label>
                        <span>Nome</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        <span>Preço</span>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </label>
                    {/* <input type="submit" value="Enviar" /> */}
                    {/* Loading post */}
                    {loading && <input type='submit' disabled value="Aguarde"/>}
                    {!loading && <input type='submit'  value="Criar"/>}
                </form>
            </div>
        </div>
    )
}

export default ConsumoApi