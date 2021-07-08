import {React,Component} from 'react';
import FormInPut from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''

        }
    }


    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handelChange = event =>{
        const{value, name }=event.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>  
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                <FormInPut 
                name="email"
                type='email' 
                handelChange={this.handelChange}  
                value={this.state.email} 
                label='Email' 
                required/>
                
                <FormInPut 
                name="password"
                type='password'
                handelChange={this.handelChange} 
                value={this.state.password} 
                label='Password' 
                required/>
            
                </form>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle}>Sign In with Google</CustomButton>
            </div>
        )
    }

}


export default SignIn;