import React, { Component } from 'react';
import './Main.css';

import { Form } from 'semantic-ui-react';

class Main extends Component {
    state = { headline: '', submittedHeadline: '' }

    handleChange = (e, {value}) => this.setState({headline: value})

    postHeadline = () => {
        const { headline } = this.state;

        this.setState({submittedHeadline: headline})
        
        // fetch here
        fetch('http://127.0.0.1:5000/fact-check', POST)
    }
    
    postHeadline(e) {
        console.log(e);
    }
    render() {
        return (
            <div>
                <h1 className="heading">is it bullsh*t?</h1>
                <Form onSubmit={this.postHeadline}>
                    <Form.TextArea label='bullsh*t checker' name='headline' onChange={this.handleChange} placeholder="copy the headline here and I'll tell you how bullsh*t it is."/>
                    <Form.Button primary floated='right'>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

export default Main;