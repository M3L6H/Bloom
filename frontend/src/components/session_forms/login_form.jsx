import React from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.prevnetDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    renderErrors() {
        return (
            <div>
                error messages will be printed
            </div>
        )
    }

    render() {
        return (
            <div> 
                I DON'T KNOW HOW TO USE THIS LIBRARY!!!!!;-;
                <FORM size='large'>
                    <FORM.Input 
                        fulid icon='user' 
                        iconPosition='left' 
                        placeholder='Email' />
                    <FORM.Input 
                        fluid icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />
                    <Button color='skyblue' fluid size='large'>
                        Login
                    </Button>
                </FORM>
                
                <Message>
                    Not a member? <a href="#">Sign Up</a>
                </Message>
            </div>


        );
    }
}

export default LoginForm;
{/* 
    <div className='login-container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='login-input'>
                        <input type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder='Email' />
                        <input type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder='Password' />
                    </div>
                    <br />
                    <Button class="ui button">Login</Button>
                    {this.renderErrors()}
                    <br />
                    <div>
                        Not a member?
                        <input type='submit' value='Sign Up' />
                    </div>
                </form>
            </div> */}