import React from 'react';
import App from '../app';

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='user-modal-input'>
                        <input type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            placeholder='First Name'/>
                        <input type="text"
                            value={this.state.first_name}
                            onChange={this.update('last_name')}
                            placeholder='Last Name' />
                        <input type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder='Email Address' />
                        <input type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder='Password' />
                    </div>
                    <br />
                    <input type='submit' value='Register' />
                    {this.renderErrors()}
                    <br />
                    <div>
                        Already have an account?
                        <input type='submit' value='Log In' />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;