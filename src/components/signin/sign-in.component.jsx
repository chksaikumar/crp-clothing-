import {React,Component} from 'react';
import FormInPut from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth,signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''

        }
    }


    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password} =this.state;
        
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(error) {
            console.log(error);
        }



    }

    handelChange = event =>{
        const{value, name }=event.target;
        this.setState({[name]:value})
    };

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
                
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
                </form>
            </div>
        );
    }

}


export default SignIn;