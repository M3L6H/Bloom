import React from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            fName: '',
            lName: '',
            password: '',
            password2: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
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
                        onChange={this.update('fName')}
                    />
                    <Form.Input
                        placeholder='Last Name'
                        onChange={this.update('lName')}
                    />
                    <Form.Input
                        fluid icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange={this.update('password')}
                    />
                    <Form.Input
                        fluid icon='lock'
                        iconPosition='left'
                        placeholder='Confirm Password'
                        type='password'
                        onChange={this.update('password2')}
                    />
                    <Button className='ui test button' fluid size='large'>
                        Register
                    </Button>
                </Form>

                </Grid.Column>
            </Grid>
        );
    }
}

export default SignupForm;