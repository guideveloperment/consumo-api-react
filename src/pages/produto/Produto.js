import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseAPI } from '../../environments'
import ProdutoItem from '../../components/produtoItem/ProdutoItem'

 export default function Produto(props) {

    const { id } = useParams()

    const [produto, setProduto] = useState({})

    useEffect(()=>{
        axios.get(`${baseAPI}/produtos/${id}`)
        .then((response) => {
            setProduto(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [])

    
    return(
        <>
        <ProdutoItem produto={produto}/>
        </>
    )
}

