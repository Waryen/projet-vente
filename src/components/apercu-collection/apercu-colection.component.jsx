import React from 'react';
import './apercu-collection.style.scss'

const ApercuCollection = ({ titre, items}) => (
    <div className='apercu-collection'>
        <h1 className='titre'>{titre.toUpperCase()}</h1>
        <div className='apercu'>
            {
                items.map(item => (
                    <div key={item.id}> {item.nom}</div>
                ))
            }
        </div>
    </div>
)

export default ApercuCollection