import {autoReducer} from 'fast-redux-reducer'
import MainConfig from '../../mainConfig/mainConfig.reducer'
export const reducersObject = {
    MainConfig
}
export default autoReducer(reducersObject)