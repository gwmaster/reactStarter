import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Select } from 'antd'

const { Option } = Select

import { I_18 } from './i18.const'
import { i18Action } from './i18.action'

function i18 (props) {
  // actions
  const { loadTranslate, setLanguage } = props
  // reducers
  const { i18SelectedLanguage , i18AvailableLanguages } = props
  useEffect(() => {
    // component did mount
    loadTranslate()
  }, [])

  if (i18SelectedLanguage == null || i18AvailableLanguages.length < 2) {
    return null
  }

    function handleChange (value) {
      setLanguage(value)
    }

    return (
      <div>
        <Select value={i18SelectedLanguage} style={{ width: 120 }} onChange={handleChange}>
          {i18AvailableLanguages.map(item => {
            return <Option key={item.prefix} value={item.prefix}>{item.name}</Option>
          })}
        </Select>
      </div>)
}

function mapActionsToProps (dispatch) {
  return bindActionCreators(
    {
      ...i18Action
    }
    , dispatch)
}

function mapStoreToProps ({ i18SelectedLanguage, i18AvailableLanguages }, ownProps) {
  return {
    i18SelectedLanguage,
    i18AvailableLanguages
  }
}

i18.propTypes = {}
i18.defaultProps = {}

export default connect(mapStoreToProps, mapActionsToProps)(i18)