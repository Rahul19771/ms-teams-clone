import React, { Component } from 'react';
import Header from '../../Components/Header';
import './Home.css';
import { Link } from 'react-router-dom';
import Groupcall from '../../images/GroupCall.png';
import images from '../../ProjectImages/ProjectImages';
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="splash-container">
                    <div class="splash">
                        {/* <img src={logo}> </img> */}
                        <h1 class="splash-head">Ms Teams Clone</h1>
                        <p class="splash-subhead">
                            Welcome to the MS World
                        </p>

                        <div id="custom-button-wrapper">
                            <Link to='/login'>
                                <a class="my-super-cool-btn">
                                    <div class="dots-container">
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                    </div>
                                    <span className="buttoncooltext">Get Started</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="content-wrapper">
                    <div class="content">
                        <h2 class="content-head is-center"> <img src={Groupcall}/>Features of Ms Teams Clone</h2>


                        <div className="Appfeatures">
                            <div className="contenthead" >

                                <h3 class="content-subhead">
                                    <i class="fa fa-rocket"></i>
                                    Get Started Quickly
                                </h3>
                                <p>
                                    Just <a href="/signup">register</a> yourself with this app and enter into the MS world.
                                </p>
                            </div>
                            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 class="content-subhead">
                                    <i class="fa fa-sign-in"></i>
                                    Firebase Authentication
                                </h3>
                                <p>
                                    Firebase Authentication has been implemented in this app.
                                </p>
                            </div>
                            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 class="content-subhead">
                                    <i class="fa fa-th-large"></i>
                                    Media
                                </h3>
                                <p>
                                    You can share images from your device or stickers with your friends for better experience.
                                </p>
                            </div>
                            <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 class="content-subhead">
                                    <i class="fa fa-refresh"></i>
                                    Updates
                                </h3>
                                <p>
                                    We will working with new features for this app for better experience in future.
                                </p>
                            </div>
                            
                        </div>
                        <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4" style={{ backgroundImage: Groupcall }}>
                            <h3 class="content-subhead">
                                <i class="fa fa-th-large"></i>
                                Video Callings
                            </h3>
                            <ul>
                                <li>one to one calls </li>
                                <li> Create Rooms</li>
                                <li>Screen Sharing</li>
                            </ul>

                        </div>
                        
                    </div>
                </div>

            </div>
        )
    }
}
