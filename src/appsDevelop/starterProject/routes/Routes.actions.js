import { ROUTES } from './Routes.const'

const navigate = payload => ({ type: ROUTES.NAVIGATE_SAGA, payload })
export const RoutesActions = {
    navigate
}