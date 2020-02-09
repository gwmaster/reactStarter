import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';

const Task = (props) => {
  const {label , onClick} = props
  return (<button onClick={() => onClick(label)}>
     Task - {label}
  </button>)
}

Task.propTypes = {}
Task.defaultProps = {}

export default Task