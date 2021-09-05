import React, { Component } from 'react';
import './style.scss'

class index extends Component {
    render() {
        return (
            <footer class="fixed-bottom">
                <p align="center">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-youtube"></i>

                    <br />
                    <br />

                    <font>Copyright@{new Date().getFullYear()} BNI Corporate University</font>
                </p>
            </footer>
        );
    }
}

export default index;
