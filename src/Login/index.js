import React from 'react';
import { connect } from 'react-redux';
import { login } from "./loginActions";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            submitted: true,
        });
        const { username, password } = this.state;
        if(username && password) {
            this.props.dispatch(login(username, password, this.props.history));
        }
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className='form-container'>
                <div>
                    {!this.props.error && this.state.submitted ? <div>Please fill all fields</div> :
                    <div className='error'>{this.props.error}</div>}
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">First name:</label>
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Submit" />
                        </div>
                        {this.props.loggingIn && 'Loading...'}
                    </form>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.login.loggingIn,
    loggedIn: state.login.loggedIn,
    error: state.login.error,
});

export default connect(mapStateToProps)(Login);