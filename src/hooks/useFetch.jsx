import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callfetch, setCallfetch] = useState(null)

    // LOADING
    const [loading, setLoading] = useState(false)

    //erros
    const [error, setError] = useState(null)
    const httpConfig = (data, method) => {
        if (method == "POST") {
            setConfig({
                method,
                Headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    useEffect(() => {
        //tratando erros com try catch
        const fetchData = async () => {
            try {
                setLoading(true)

                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            }
            catch (error) {
                console.log(error.message)
                setError("Houve um erro ao carregador dados!")
            }
            setLoading(false)

        }
        fetchData()
    }, [url, callfetch])
    // refatorando post

    useEffect(() => {
        const httpRequest = async () => {
            let json
            if (method == "POST") {
                //loading
                setLoading(true)
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                json = await res.json()
                setLoading(false)
            }
            setCallfetch(json)
        }
        httpRequest()
    }, [config, method, url])

    return { data, httpConfig, loading, error }
}