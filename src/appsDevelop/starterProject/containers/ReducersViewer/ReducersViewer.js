import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { reducersObject as mainReducers } from '../../stores/reducers'
import { reducersObject as workerReducers } from '../../stores/storeWorker/reducers.js'

import { DevelopActions } from './ReducersViewer.action'

import { Button, Checkbox, Col, Row } from 'antd'

import JSONEditorDemo, { JSON_EDITOR_MODES } from '../../components/JSONEditor/JSONEditor'

const reducersLiveInit = {
  main: {},
  worker: {}
}

function initReducers (reducersNames, worker) {
  for (let group in reducersNames) {
    if (Array.isArray(reducersNames[group]) == false) {
      for (let reducer in reducersNames[group]) {
        if (!reducersLiveInit[worker][group]) {
          reducersLiveInit[worker][group] = {}
        }
        reducersLiveInit[worker][group][reducer] = false
      }
    }
  }
}

initReducers(mainReducers, 'main')
initReducers(workerReducers, 'worker')


function ReducersViewer (props) {
  // reducer value
  const { reducerViwerLiveViewReducers: registeredReducers } = props
  // action

  const [isPaused, setIsPaused] = useState(false)
  const { setLiveViewerReducers } = props
  const resetHandler = () => {
    setLiveViewerReducers(JSON.parse(JSON.stringify(reducersLiveInit)))
  }
  useEffect(() => {
    if (registeredReducers == null) {
      resetHandler()
    }
  }, [])

  const [reducersData, setReducerData] = useState({})
  useEffect(() => {
    if (registeredReducers != null) {
      let data = {
        main: {},
        worker: {}
      }
      const loopRegisteredReducers = (worker) => {
        for (let name in registeredReducers[worker]) {
          if (registeredReducers[worker][name]) {
            if (typeof registeredReducers[worker][name] == 'object') {
              for (let reducerName in registeredReducers[worker][name]) {

                if (registeredReducers[worker][name][reducerName]) {
                  if (!data[worker][name]) {
                    data[worker][name] = {}
                  }
                  data[worker][name][reducerName] = props[reducerName]
                }
              }
            } else {
              if (registeredReducers[worker][name]) {
                data[worker][name] = props[name]
              }
            }
          }
        }
      }
      loopRegisteredReducers('main')
      loopRegisteredReducers('worker')
      if (isPaused == false) {
        setReducerData(data)
      }
    }
  }, [registeredReducers, props])

  if (registeredReducers == null) {
    return null
  }
  const onChangeJSON = (newJSON) => {
    setLiveViewerReducers(newJSON)
  }

  const onClickPause = () => {
    setIsPaused(!isPaused)
  }

  // redcuer
  return (
    <div>
      <Row>
        <Col span={10}>
          <JSONEditorDemo json={registeredReducers} onChangeJSON={onChangeJSON}/>
        </Col>
        <Col span={12}>
          <JSONEditorDemo json={reducersData}/>
        </Col>
        <Col span={2}>
          <Button type={isPaused ? 'danger' : 'primary'} onClick={onClickPause} style={{ marginRight: 10 }}>
            {isPaused ? 'Resume' : 'Pause'}
          </Button>
          <br/>
          <Button onClick={resetHandler}>Reset</Button>
        </Col>
      </Row>


    </div>
  )
}

function mapActionsToProps (dispatch) {
  return bindActionCreators(
    {
      ...DevelopActions
    }
    , dispatch)
}

function mapStoreToProps (params, ownProps) {
  return params
}

ReducersViewer.propTypes = {}
ReducersViewer.defaultProps = {}

export default connect(mapStoreToProps, mapActionsToProps)(ReducersViewer)