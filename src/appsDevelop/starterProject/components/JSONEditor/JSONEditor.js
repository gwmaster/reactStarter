import React, { useEffect, useRef, useState, Component } from 'react'
import PropTypes from 'prop-types'

import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'

import './JSONEditor.css'

export const JSON_EDITOR_MODES = {
  TREE: 'tree',
  VIEW: 'view',
  FORM: 'form',
  TEXT: 'text',
  CODE: 'code'
}

class JSONEditorDemo extends Component {
  componentDidMount () {
    this.buildEditor()
  }

  componentWillUnmount () {
    this.deleteEditor()
  }

  componentWillUpdate (nextProps, nextState) {
    if (this.props.mode != nextProps.mode) {
      this.deleteEditor()
      this.buildEditor()
    } else {
      this.jsoneditor.update(nextProps.json)
    }
  }

  buildEditor () {
    const options = {
      mode: this.props.mode,
      onChangeJSON: this.props.onChangeJSON
    }

    this.jsoneditor = new JSONEditor(this.container, options)
    this.jsoneditor.set(this.props.json)
  }

  deleteEditor () {
    if (this.jsoneditor) {
      this.jsoneditor.destroy()
    }
  }

  render () {
    return (
      <div className="jsoneditor-react-container" ref={elem => this.container = elem}/>
    )
  }
}

JSONEditorDemo.propTypes = {
  mode: PropTypes.string
}
JSONEditorDemo.defaultProps = {
  mode: JSON_EDITOR_MODES.TREE
}

export default JSONEditorDemo