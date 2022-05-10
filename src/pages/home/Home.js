import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseAPI } from '../../environments'
import ListaProdutos from '../../components/listaProdutos/ListaProdutos'

function Home() {

    const [ofertas, setOfertas] = useState([])
    const [maisVendidos, setMaisVendidos] = useState([])
    const [produtos, setProdutos] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8080/produtos/')
            .then((response)=> {
                setProdutos(response.data)
            })
            .catch((err)=> {
                console.error("Ops! ocorreu um erro" + err)
            })


    }, [])

    useEffect(() => {
        axios.get(`${baseAPI}/ofertas`)
        .then((response)=> {
            setOfertas(response.data)
        })
        .catch((error) => {
            console.log("Ops! Ocorreu um erro: " + error.message)
        })

        axios.get(`${baseAPI}/maisvendidos`)
        .then((response)=> {
            setMaisVendidos(response.data)
        })
        .catch((error) => {
            console.log("Ops! Ocorreu um erro: " + error.message)
        })

    }, [])

    return (
        <> 
            <h1>Home</h1>
            <ListaProdutos titulo="Ofertas" produtos={ofertas}/>
            <ListaProdutos titulo="Mais Vendidos" produtos={maisVendidos}/>
            <ListaProdutos produtos={produtos}/>
        </>
    )
}

export default Home