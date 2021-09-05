import React from 'react';
import FooterIcon from '../atoms/FooterIcon'

const CombineFooter = () => {
    return (
        <React.Fragment>
            <p align="center">
                    <FooterIcon tipe="facebook" />
                    <FooterIcon tipe="twitter" />
                    <FooterIcon tipe="instagram" />
                    <FooterIcon tipe="youtube" />
                    <br />
                    <br />

                    <font>Copyright@{new Date().getFullYear()} BNI Corporate University</font>
                </p>
        </React.Fragment>
    );
}

export default CombineFooter;
