import React from 'react'
import { Link } from 'react-router-dom'

 export default function ProdutoItem(props) {

    const produto = props.produto || []

    return(
        <>
        <h1>Produto</h1>
        <div>
            <div><img width="450" src={produto.imgUrl} /></div>
            <h2>{produto.id} - {produto.nome} - R${produto.preco}</h2>
            <h3>Descricao: {produto.descricao}</h3>
            <Link to="/">Voltar para home</Link>
        </div>
        </>
    )
}
