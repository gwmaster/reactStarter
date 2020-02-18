import React from 'react'
import {connect} from 'react-redux'
import {mapStoreToProps, mapActionsToProps} from 'fast-redux-reducer'

import {LOCAL_STORAGE} from './LocalStorage.const'
import {LocalStorageActions} from './LocalStorage.action'
import {Button} from 'antd'

function LocalStorage(props) {
    // redcuer
    const {localStorageSavedData} = props;
    // actions
    const {saveData} = props
    return (<div>
                <Button onClick={() => saveData(new Date().getTime().toString())}>Save data to localstorage</Button>
                {localStorageSavedData}
            </div
        >
    )
}

export default connect(
    mapStoreToProps('localStorageSavedData'),
    mapActionsToProps(LocalStorageActions)
)(LocalStorage)