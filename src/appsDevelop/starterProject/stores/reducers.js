import {autoReducer} from 'fast-redux-reducer'
import NavBar from '../containers/NavBar/NavBar.reducer'
import LocalStorage from "../containers/Develop/LocalStorage/LocalStorage.reducer";

export const reducersObject = {
    NavBar,
    LocalStorage
}
// config what store data save to localStorage
export function customSlicer () {
    return (state) => {
        const {
            localStorageSavedData,
        } = state
        return {
            localStorageSavedData,
        }
    }
}
export default autoReducer(reducersObject)