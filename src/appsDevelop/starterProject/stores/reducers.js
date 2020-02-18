import {autoReducer} from 'fast-redux-reducer'
import NavBar from '../containers/NavBar/NavBar.reducer'
import MainConfig from '../mainConfig/mainConfig.reducer'
import LocalStorage from "../containers/Develop/LocalStorage/LocalStorage.reducer";
import ReducersViewer from '../containers/ReducersViewer/ReducersViewer.reducer'
import I18 from '../i18/i18.reducer'

export const reducersObject = {
    MainConfig,
    NavBar,
    LocalStorage,
    ReducersViewer,
    I18
}
// config what store data save to localStorage
export function customSlicer () {
    return (state) => {
        const {
            i18SelectedLanguage,
            localStorageSavedData,
            reducerViwerLiveViewReducers,
        } = state
        return {
            i18SelectedLanguage,
            localStorageSavedData,
            reducerViwerLiveViewReducers
        }
    }
}
export default autoReducer(reducersObject)