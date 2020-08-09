import React, { Component } from 'react';
import './Main.css';

import { Form } from 'semantic-ui-react';

class Main extends Component {
    render() {
        return (
            <div>
                <h1 className="heading">is it bullsh*t?</h1>
                <Form>
                    <Form.TextArea label='bullsh*t checker' placeholder="copy the headline here and I'll tell you how bullsh*t it is."/>
                    <Form.Button primary floated='right'>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

export default Main;