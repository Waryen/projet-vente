import React from 'react'
import './choix-item.style.scss'

const ChoixItem = ({titre, imageUrl, taille}) => (
    <div className={`${taille} choix-item`}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
            <div className="content">
                <h1 className='titre'>{titre.toUpperCase()}</h1>
                <span className="sous-titre">Achetez maintenant</span>
            </div>
    </div>
)

export default ChoixItem