import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './Welcome.css';

export default class WelocomeCard extends React.Component{
    render(){
        return(
            <div className="viewWelcomeBoard">
                <span className="textTitleWelcome">{`Welcome, ${this.props.currentUserName} to the MS World.`}</span>
                <span className="textDesciptionWelcome">
                    You can search and ping anyone from the left side users or you can navigate to the calls from right dashboard.
                </span>
                <span className="textDesciptionWelcome">
                    Click on profile to set your Profile Pic and Description.
                </span>
            </div>
        )
    }
}