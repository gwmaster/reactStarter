import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {mapStoreToProps, mapActionsToProps} from 'fast-redux-reducer'
import { I18n } from 'react-redux-i18n'
import { Translate } from 'react-redux-i18n'

import I18Component from '../../../i18/i18'

function I18(props) {
    // redcuer
    const {i18SelectedLanguage , i18AvailableLanguages} = props
    return (
        <div>
            "starterProject:start": "npm start -- --env.APP /appsDevelop/starterProject --env.TRANSLATE en,he,ru",
            <br/>
            src/appsDevelop/starterProject/assets-translate/  en.json , he.json , ru.json
            <br/>
            i18SelectedLanguage : {JSON.stringify(i18SelectedLanguage)}
            <br/>
            i18AvailableLanguages :  {JSON.stringify(i18AvailableLanguages)}
            <br/>
            logo : {I18n.t(`logo`)} , `<Translate value="logo"/>
            <br/>
            <I18Component/>
        </div>)
}

I18.propTypes = {};
I18.defaultProps = {};

export default connect(
    mapStoreToProps('i18SelectedLanguage' , 'i18AvailableLanguages'),
    mapActionsToProps()
)(I18)
