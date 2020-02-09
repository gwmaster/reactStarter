import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';

/**
 - Use an avatar for attributing actions or content to specific users.
 - The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
 **/
const Task = ({label , onClick, ...props}) => {
  return (<button onClick={() => onClick(label)}>
     Task - {label}
  </button>)
}

Task.propTypes = {
    /**
     Avatar falls back to the user's initial when no image is provided.
     Supply a `username` and omit `src` to see what this looks like.
     */
    label: PropTypes.string,
};
Task.defaultProps = {
    label : 'defaiult label'
}

export default Task


