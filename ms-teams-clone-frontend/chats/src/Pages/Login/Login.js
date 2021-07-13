import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Services/firebase';

import LoginString from '../Login/LoginStrings';
import './Login.css';
import { Card } from 'react-bootstrap';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import logo from '../../logo.svg';
import Typography from '@material-ui/core/Typography';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    componentDidMount() {
        if (localStorage.getItem(LoginString.ID)) {
            this.setState({ isLoading: false }, () => {
                this.setState({ isLoading: false })
                this.props.showToast(1, 'Login succes')
                this.props.history.push('./chat')
            })
        } else {
            this.setState({ isLoading: false })
        }
    }

    async handleSubmit(event) {
        event.preventDefault();

        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(async result => {
                let user = result.user;
                if (user) {
                    await firebase.firestore().collection('users')
                        .where('id', "==", user.uid)
                        .get()
                        .then(function (querySnapshot) {
                            querySnapshot.forEach(function (doc) {
                                const currentdata = doc.data();
                                localStorage.setItem(LoginString.FirebaseDocumentId, doc.id);
                                localStorage.setItem(LoginString.ID, currentdata.id);
                                localStorage.setItem(LoginString.Name, currentdata.name)
                                localStorage.setItem(LoginString.Email, currentdata.email)
                                localStorage.setItem(LoginString.Password, currentdata.password)
                                localStorage.setItem(LoginString.PhotoURL, currentdata.URL)
                                localStorage.setItem(LoginString.Description, currentdata.description)

                            })
                        })
                }
                this.props.history.push('/chat')
            }).catch(function (error) {
                document.getElementById('1').innerHTML = "incorrect email/password or poor internet"
            })
    }
    render() {

        return (
            <Grid container component="main" className="root">
                <CssBaseline />
                {/* <Grid item xs={1} sm={4} md={7} className="image">
                    <div className="image1"></div>
                </Grid> */}
                <div className="rightcomponent" elevation={6} square>
                <Card className="Signinsee">
                <img className='dashboard_logo_image' src={logo} alt=""/>
                    
                    <div className="signup_to">
                        <Typography component="h1" variant="h5">
                            Log In
                            To
                        </Typography>
                    </div>
                    <div>
                        <Link to="/">
                            <button class="btn"><i class="fa fa-home"></i> MsTeamsClone</button>
                        </Link>
                    </div>
                </Card>
                    <div className="paper">
                        <form className="form" noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                backgroundColor="white"
                                autoComplete="email"
                                autoFocus
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color='default' />}
                                label="Remember me"
                            />
                            <Typography component="h6" variant="h5">
                                {this.state.error ? (
                                    <p className="text-danger">{this.state.error}</p>
                                ) : null}
                            </Typography>

                            <div className="CenterAliningItems">
                                <button class="button1" type="submit">
                                    <span>Login In</span>
                                </button>
                            </div>

                            <div className="CenterAliningItems">
                                <p>Don't have and account?</p>
                                <Link to="/signup" variant="body2">
                                    Sign Up
                                </Link>
                            </div>
                            <div className="error">
                                <p id='1' style={{ color: 'red' }}></p>
                            </div>
                        </form>
                    </div>
                </div>
            </Grid>
        )
    }
}