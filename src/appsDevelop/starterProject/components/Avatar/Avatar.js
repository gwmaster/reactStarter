import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import './Avatar.less'

export const Avatar = ({label , loading  , size , counter }) => {
  return (
      <div className='test'>
          Avatar - {label}
          <br/>
          loading : {JSON.stringify(loading)}
          <br/>
          size : {size}
          <br/>
          counter : {counter}
      </div>
  )
}

Avatar.propTypes = {
    /**
     Use the loading state to indicate that the data Avatar needs is still loading.
     */
    loading: PropTypes.bool,
    /**
     Avatar falls back to the user's initial when no image is provided.
     Supply a `username` and omit `src` to see what this looks like.
     */
    username: PropTypes.string,
};
Avatar.defaultProps = {
    loading : true,
    username : 'username'
}