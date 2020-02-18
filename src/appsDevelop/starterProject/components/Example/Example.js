import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
/**
 my component Example doc
 **/
const Example = ({label , size , clickHandler}) => {
  return (
      <button onClick={()=>clickHandler('test data')}>
      Hello - {label} - {size}
  </button>)
}

Example.propTypes = {
    /**
     arrayOf [shape [
     *title: node*
     icon: node
     content: node
     expandLabel: node
     collapseLabel: node
     buttonType: oneOf ['textButton', 'button']
     **/
    label : PropTypes.string,
    size : PropTypes.number,
    clickHandler : PropTypes.func
}
Example.defaultProps = {
    label : 'Hello',
    size : 12
}

export default Example