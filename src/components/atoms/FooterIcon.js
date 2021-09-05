import React from 'react';

const FooterIcon = (props) => {
    return (
        <>
          <i className={`fa fa-${props.tipe}`}></i>
        </>
    );
}

export default FooterIcon;
