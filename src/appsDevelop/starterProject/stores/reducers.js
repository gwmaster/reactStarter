import {autoReducer} from 'fast-redux-reducer'
import NavBar from '../containers/NavBar/NavBar.reducer'
import MainConfig from '../mainConfig/mainConfig.reducer'
import LocalStorage from "../containers/Develop/LocalStorage/LocalStorage.reducer";
import ReducersViewer from '../containers/ReducersViewer/ReducersViewer.reducer'

export const reducersObject = {
    MainConfig,
    NavBar,
    LocalStorage,
    ReducersViewer
}
// config what store data save to localStorage
export function customSlicer () {
    return (state) => {
        const {
            localStorageSavedData,
            reducerViwerLiveViewReducers
        } = state
        return {
            localStorageSavedData,
            reducerViwerLiveViewReducers
        }
    }
}
export default autoReducer(reducersObject)