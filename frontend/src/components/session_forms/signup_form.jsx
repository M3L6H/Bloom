import React from 'react';
import { Button, Form, Input, Message, Grid, Header } from 'semantic-ui-react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.prevnetDefault();

        let user = {
            email: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name
        };

        this.props.signup(user);
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
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>Sign Up</Header>
                <Form className='user-input-form' size='medium'>
                    <Form.Input
                        fluid icon='user'
                        iconPosition='left'
                        placeholder='Email' 
                        onChange={this.update('email')} />
                    <Form.Input
                        placeholder='First Name'
                        onChange={this.update('first_name')}
                    />
                    <Form.Input
                        placeholder='Last Name'
                        onChange={this.update('last_name')}
                    />
                    <Form.Input
                        fluid icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange={this.update('password')}
                    />
                    <Button class='ui test button' fluid size='large'>
                        Register
                    </Button>
                </Form>

                <Message>
                    Already have an account? <a href="#"> Log In</a>
                </Message>
                </Grid.Column>
            </Grid>


        );
    }
}

export default SignupForm;