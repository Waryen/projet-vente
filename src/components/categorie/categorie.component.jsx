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
              id: 1,
              linkUrl: 'chapeaux'
            },
            {
              titre: 'vestes',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'vestes'
            },
            {
              titre: 'baskets',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'baskets'
            },
            {
              titre: 'femmes',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              taille: 'large',
              id: 4,
              linkUrl: 'femmes'
            },
            {
              titre: 'hommes',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              taille: 'large',
              id: 5,
              linkUrl: 'hommes'
            }
          ]
    }
  }

  render() {
    return (
      <div className="categories">
        {
            this.state.sections.map(({id, ...autreSectionProps}) => (
                <ChoixItem key={id} {...autreSectionProps} />
            ))
        }
      </div>
    )
  }
}

export default Categorie