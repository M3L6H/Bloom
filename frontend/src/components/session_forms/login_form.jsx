import React from 'react';
import { Modal, Button, Form, Input, Grid, Message, Header } from 'semantic-ui-react';

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

            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ width: 250 }}>
                <Form className='user-input-form' >
                    <Form.Input 
                        fulid icon='user' 
                        iconPosition='left' 
                        placeholder='Email' 
                        onChange={this.update('email')} />
                    <Form.Input 
                        fluid icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange={this.update('password')} />
                    <Button class='ui test button' fluid size='large'>
                            Log In
                    </Button>
                </Form>
                
                {/* <Message>
                    Not a member? <a href="#">Sign Up</a>
                </Message> */}
                </Grid.Column>
            </Grid>



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