import { Component } from "react";

class Class1 extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Usman',
            fName: 'Saeed Sb',
            count: 0,
        }
    }
    changeMessage() {
        this.setState({
            fName: 'Saeed'
        })
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        }, () => { console.log('callback Value', this.state.count) })

    }
    render() {
        return (
            <div>
                <div>
                    Hello {this.state.fName}
                    {this.state.count}

                </div>
                <button onClick={() => this.changeMessage()}>
                    Subscribe
                </button>
                <button onClick={() => this.increment()}>Counter</button>
            </div>
        )
    }
}
export default Class1