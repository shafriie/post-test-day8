import React, { Component } from 'react';
import './style.scss'
import MolFooter from '../../molecules/CombineFooter'

class FooterClass extends Component {
    render() {
        return (
            <div style={{ marginTop: '200px' }}>
                <footer className="footerBottom">
                    <MolFooter />
                </footer>
            </div>
        );
    }
}

export default FooterClass;
