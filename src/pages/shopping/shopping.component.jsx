import React from 'react'
import SHOP_DATA from './shopping.data.js'
import ApercuCollection from '../../components/apercu-collection/apercu-colection.component'
import './shopping.style.scss'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render () {
        const {collections} = this.state
        return (
            <div className='shop_page'>
                {
                    collections.map(({id, ...othercollectionprops}) => (
                        <ApercuCollection key={id} {...othercollectionprops} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage