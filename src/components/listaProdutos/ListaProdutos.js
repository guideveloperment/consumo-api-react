import React from "react";
import { Link } from 'react-router-dom'

 export default function ListaProdutos(props) {

    const produtos = props.produtos || []

    return (
        <>
            <h1>Lista de Produtos</h1>
            {
                produtos.map(item => {
                    return (
                        <h3 key={item.id}>
                            <div>
                                <img width="150" src={item.imgUrl}/>
                            </div>
                            {item.id} - {item.nome} - R${item.preco} <br/>
                            <Link to={'/produto/'+item.id}>Ir para produto</Link>
                        </h3>
                    )
                })
            }

        </>
    )
}

