import React from 'react';
import './index.css';

class Formulario extends React.Component {
    render() {
        return (
            <div className='form'>
                <div className='content'>
                    <span>Login</span>
                    <span className='subtitle'>Please enter you Login and your Password</span>
                    <div className='content-inputs'>
                        <input className='input-text1' placeholder='Username or E-mail' type={'text'} />
                        <input className='input-text2' placeholder='Password' type={'text'} />
                        <span className='fgt-psw'>Forgot password?</span>
                    </div>
                    <div className='button'>
                        <span className='btn-text'>Entrar</span>
                    </div>
                    <span className='fgt-psw'>Not a member yet? <span className='register'>Register!</span></span>
                </div>
            </div>
        )
    }
}

export default Formulario;

