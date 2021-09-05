import React, { Component } from 'react';
import Header from '../organisms/header'
import Footer from '../organisms/footer'
import {Container} from 'react-bootstrap'

class main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                    <Container className="mt-4">
                        {this.props.children}
                    </Container>
                <Footer />
            </>
        );
    }
}

export default main;
