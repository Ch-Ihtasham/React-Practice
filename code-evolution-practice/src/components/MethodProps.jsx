import React, { Component } from 'react'
import ChildPros from './ChildPros'

export class MethodProps extends Component {
    constructor() {
        super()
        this.state = {
            name: 'ihtasham',
            ans: false
        }
        this.handelClick = this.handelClick.bind(this)
    }
    handelClick() {
        alert(`hello ${this.state.name}`)
    }

    render() {
        return (
            <div>
                <ChildPros handelChange={this.handelClick} />
                {this.state.ans ? <button>helo</button> : 'noting'}

            </div>
        )
    }
}

export default MethodProps
