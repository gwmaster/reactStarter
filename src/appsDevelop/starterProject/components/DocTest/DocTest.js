import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';

/**
 - example
 - example 2
 **/
const DocTest = ({label}) => {
  return (<div>DocTest - {label}</div>)
}

DocTest.propTypes = {
    /**
    label Description
     */
    label : PropTypes.string
}
DocTest.defaultProps = {
    label : 'test'
}

export default DocTest