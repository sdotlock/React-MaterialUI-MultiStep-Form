import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem } from 'material-ui/List'

export class Confirm extends Component {

    continue = e => {
        e.preventDefault()
        //THIS IS WHERE YOU WOULD PROCESS THE FORM
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    render() {
        const { values: {firstName, lastName, email, occupation, city, bio}} = this.props
        return (

            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Your Details"/>

                    <List>
                        <ListItem
                        primaryText = "First name"
                        secondaryText = {firstName}
                        />

                        <ListItem
                            primaryText = "Last name"
                            secondaryText = {lastName}
                        />

                        <ListItem
                            primaryText = "Email name"
                            secondaryText = {email}
                        />

                        <ListItem
                            primaryText = "Occupation"
                            secondaryText = {occupation}
                        />

                        <ListItem
                            primaryText = "City"
                            secondaryText = {city}
                        />

                        <ListItem
                            primaryText = "Bio"
                            secondaryText = {bio}
                        />

                    </List>

                    <br/>

                    <RaisedButton
                        label = "Back"
                        primary = {false}
                        style = {styles.button}
                        onClick = {this.back}
                    />

                    <RaisedButton
                        label = "Confirm and continue"
                        primary = {true}
                        style = {styles.button}
                        onClick = {this.continue}
                    />

                </React.Fragment>
            </MuiThemeProvider>

        )
    }
}

const styles = {
    button:  {
        margin: 15
    }
}

export default Confirm