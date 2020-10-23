import React from 'react'
import './categorie.style.scss'
import ChoixItem from '../choix-item/choix-item.component.jsx'

class Categorie extends React.Component {
  constructor() {
    super()
    this.state = {
        sections : [
            {
              titre: 'chapeaux',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1
            },
            {
              titre: 'vestes',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2
            },
            {
              titre: 'baskets',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3
            },
            {
              titre: 'femmes',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              taille: 'large',
              id: 4
            },
            {
              titre: 'hommes',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              taille: 'large',
              id: 5
            }
          ]
    }
  }

  render() {
    return (
      <div className="categories">
        {
            this.state.sections.map(({titre, imageUrl, taille, id}) => (
                <ChoixItem key={id} titre={titre} imageUrl={imageUrl} taille={taille} />
            ))
        }
      </div>
    )
  }
}

export default Categorie