import {autoReducer} from 'fast-redux-reducer'
import NavBar from '../containers/NavBar/NavBar.reducer'

export const reducersObject = {
    NavBar
}
export default autoReducer(reducersObject)