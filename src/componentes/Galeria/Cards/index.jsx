import React from 'react'
import open from './open.png'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

export default function Cards({ itens, styles, favoritar }) {

    const propsFavorito = {
        size: 30,
        color: '#FFF'
    }
    return (
        <ul className={styles.galeria__cards}>
            {itens.map((foto) => {
                return (
                    <li key={foto.id} className={styles.galeria__card}>
                        <img
                            className={styles.galeria__imagem}
                            src={foto.imagem}
                            alt={foto.titulo}
                        />
                        <p className={styles.galeria__descricao}>{foto.titulo}</p>
                        <div>
                            <p>{foto.creditos}</p>
                            <span>
                                <div>
                                    {
                                        (foto.favorito) ?
                                             <AiFillHeart {...propsFavorito} onClick={() => favoritar(foto.id)}/>
                                            :<AiOutlineHeart {...propsFavorito} onClick={() => favoritar(foto.id)}/>
                                    }
                                </div>
                                <img src={open} alt='Ícone de abrir modal'></img>
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
