import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // Normally you'd process your form here. Eg. post to api
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (

            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success!"/>
                    <h1>Thanks for submitting your details</h1>
                    <p>Nothing will happen with these as this form goes nowhere and has no validation.</p>

                    <br/>
                    <br/>
                    <a href="https://samlock.nz">samlock.nz</a>
                </React.Fragment>
            </MuiThemeProvider>

        );
    }
}

export default Success;