import React from 'react'
import {connect} from 'react-redux'
import { Menu, Icon, Switch } from 'antd';
const { SubMenu } = Menu;
import {mapStoreToProps,mapActionsToProps} from 'fast-redux-reducer'
import {RoutesActions} from '../../stores/actions'
import {ROUTES} from '../../stores/constants'
const {PAGES} = ROUTES


const MenuItem = ({path,...props}) => {
    const KEY = path.split('/').pop();
    return  <Menu.Item {...props} data-path={path} key={KEY}>{KEY}</Menu.Item>
}

function NavBar(props) {
    // reducer
    const {router : {location : {pathname}}} = props;
    // actions
    const {navigate} = props

    const onSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        navigate(key)

    }
    const getName = (path) => {
        return path.split("/").pop()
    }
    return (
        <div className='nav-bar'>
            {JSON.stringify(pathname)}
            <Menu
                className='menu'
                selectedKeys={pathname}
                mode='vertical'
                theme='dark'
                onSelect = {onSelect}
            >
                <SubMenu title={<span><Icon type="tool" /><span>Develop</span></span>}>
                    <Menu.Item key={PAGES.DEVELOP.REST_API}>{getName(PAGES.DEVELOP.REST_API)}</Menu.Item>
                    <Menu.Item key={PAGES.DEVELOP.I18}>{getName(PAGES.DEVELOP.I18)}</Menu.Item>
                    <Menu.Item key={PAGES.DEVELOP.REDUCERS_MANAGER}>{getName(PAGES.DEVELOP.REDUCERS_MANAGER)}</Menu.Item>
                </SubMenu>
                <Menu.Item key={PAGES.HOME}>{getName(PAGES.HOME)}</Menu.Item>
            </Menu>
        </div>
    )
}

// old map props
// function mapStoreToProps({router}, ownProps) {
//     return {
//         router
//     }
// }


NavBar.propTypes = {};
NavBar.defaultProps = {};

export default connect(
    mapStoreToProps('router'),
    mapActionsToProps(RoutesActions)
)(NavBar)