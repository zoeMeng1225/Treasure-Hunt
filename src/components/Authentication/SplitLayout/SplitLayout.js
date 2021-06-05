import React, {Component} from 'react';

import {Col, Row } from 'antd';

class SplitLayout extends Component {

    constructor() {
        super();
    }

    render() {
        let left = null, right = null;
        if(this.props.content === 'right') {
            left = (<img className="split-layout-photo" src={ this.props.src } alt="photo"></img>)
            right = (this.props.children)
        } else {
            right = (<img className="split-layout-photo" src={ this.props.src } alt="photo"></img>)
            left = (this.props.children)
        }


        return (
            <Row>
                <Col span={12}>
                    { left }
                </Col>
                <Col span={12}>
                    { right }
                </Col>
            </Row>
        );
    }
}

export default SplitLayout;