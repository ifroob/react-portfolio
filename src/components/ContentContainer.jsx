import React, { Component } from 'react';
import ContentBlock from './ContentBlock';

class ContentContainer extends Component {
    render() {
        return (
            <div className="content-container">
                <h1> ContentContainer </h1>
                <ContentBlock />
            </div>
        )
    }
}

export default ContentContainer;