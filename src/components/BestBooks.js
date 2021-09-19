import React, { Component } from 'react'

/*
<p>{this.state.title}</p>
                <p>{this.state.description}</p>
                <p>{this.state.status}</p>
                <p>{this.state.email}</p>
*/
export class BestBooks extends Component {

    render() {
        return (
            <>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <p>{this.props.status}</p>
                <a href="{this.props.email}" >{this.props.email}</a>
                <hr></hr>
            </>
        )
    }
}
export default BestBooks