import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import {Button as ButtonAntd} from "antd";

const Button = ({children , color ,...props}) => {
    return (
        <div style={{backgroundColor : color , padding : 10}}>
            <ButtonAntd {...props}>{children}</ButtonAntd>
        </div>

    )
}

Button.propTypes = {
    /**
     There are primary button, default button, dashed button, danger button and link button in antd.
     **/
    type : PropTypes.string,
    /**
      Ant Design supports a default button size as well as a large and small size.
      If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size.
     */
    size : PropTypes.string,
    icon : PropTypes.string,
    loading : PropTypes.bool,
    onClick : PropTypes.func
}
Button.defaultProps = {
    size : 12
}

export default Button