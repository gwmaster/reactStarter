import { NAV_BAR } from './NavBar.const'

const setCollapsed = payload => ({ type: NAV_BAR.SET_COLLAPSED, payload })


export const NavBarActions = {
    setCollapsed
}