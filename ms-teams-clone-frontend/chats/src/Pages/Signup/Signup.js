import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import "./Signup.css";
import {Card} from 'react-bootstrap';
import firebase from '../../Services/firebase';

import CssBaseline from '@material-ui/core/CssBaseline';
import LoginString from '../Login/LoginStrings';
import Grid from '@material-ui/core/Grid';
import logo from '../../logo.svg';
export default class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            email:"",
            password:"",
            name:"",
            error:null
        }
        this.handlechange = this.handlechange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handlechange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    async handleSubmit(event){

        const {name,password,email}=this.state;
        event.preventDefault();
        this.setState({error:""})
        try{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async result =>{
                firebase.firestore().collection('users')
                .add({
                    name,
                    id: result.user.uid,
                    email,
                    password,
                    URL:'',
                    description:'',
                    messages:[{notificationId:"",number: 0}]
                }).then((docRef)=>{
                    localStorage.setItem(LoginString.ID, result.user.uid);
                    localStorage.setItem(LoginString.Name, name);
                    localStorage.setItem(LoginString.Email, email);
                    localStorage.setItem(LoginString.Password, password);
                    localStorage.setItem(LoginString.PhotoURL, "");
                    localStorage.setItem(LoginString.UPLOAD_CHANGED, 'state_changed');
                    localStorage.setItem(LoginString.Description, "");
                    localStorage.setItem(LoginString.FirebaseDocumentId, docRef.id );
                    localStorage.setItem(LoginString.Description, "")
                    this.setState({
                        name:'',
                        password:'',
                        url:'',
                    });
                    this.props.history.push("/chat");
                })
               .catch((error) =>{
                   console.error("Error adding document", error)
               })  
         
            })
        }
        catch(error){
            document.getElementById('1').innerHTML = "Error in signing up please try again"
        }

    }
    render(){
         
        return(
            <Grid container component="main" className="signup_root">
                <CssBaseline/>
                <div className="signup_right_component" elevation={6} square>
                <Card className="Signupsee">
                    <img className='dashboard_logo_image' src={logo} alt=""/>
                    
                    <div className="signup_to">
                        <Typography component="h1" variant="h5">
                            Sign Up
                            To
                        </Typography>
                    </div>
                    <div>
                        <Link to="/">
                            <button class="btn"><i class="fa fa-home"></i> MsTeamsClone</button>
                        </Link>
                    </div>
                </Card> 
                <Card className="signup_paper">
               
                    <form className="form" noValidate onSubmit={this.handleSubmit}>
                        <div style={{marginLeft:'5px'}}>
                            <p style={{color:'red',fontSize:'15px'}}><bold style={{color:'black'}}>Note :</bold>All fields must be greater than 6 characters</p>
                        </div>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={this.handlechange}
                        value={this.state.email}
                        />
                        
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Your Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        onChange={this.handlechange}
                        value={this.state.name}
                        />
                        
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        autoFocus
                        onChange={this.handlechange}
                        value={this.state.password}
                        />
                        
                        <div className="CenterAliningItems">
                            <button class="button1">
                                <span>Sign Up</span>
                            </button>
                        </div>
                        <div>
                            <p style={{color:'grey', paddingLeft:'10%'}}>Already have and account? 
                            <Link to="/login">
                                <bold style={{fontSize:20}}> Login In </bold>
                            </Link>
                            </p>
                        </div>
                        <div className="error">
                            <p id='1' style={{color:'red'}}></p>

                        </div>

                    </form>
                </Card>
                </div>


            </Grid>
        )
    }
}