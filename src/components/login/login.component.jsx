import React from 'react'
import FormInput from '../form-input/form-input.component'
import BoutonCustom from '../bouton-custom/bouton-custom.component'
import { loginAvecGoogle } from '../../firebase/firebase.utils'
import './login.style.scss'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    gestionSubmit = event => {
        event.preventDefault()
        this.setState({email:'', password: ''})
    }

    gestionChangement = event => {
        const { value, name } = event.target
        this.setState({ [name] : value })
    }

    render() {
        return (
            <div className='login'>
                <h2 className='titre'>J'ai déjà un compte</h2>
                <span>Connectez vous avec votre email et mot de passe</span>
                <form onSubmit={this.gestionSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.gestionChangement}
                        label="email"
                    required />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.gestionChangement}
                        label="password"
                    required />
                    <div className="bouttons">
                        <BoutonCustom type="submit">Connecter</BoutonCustom>
                        <BoutonCustom onClick={loginAvecGoogle} isGoogleLogin>Connecter avec Google</BoutonCustom>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login