import React, {useState , Fragment} from 'react'
import {connect} from 'react-redux'
import { Menu, Switch , Button } from 'antd';
import {HomeOutlined,  MenuUnfoldOutlined , MenuFoldOutlined , ToolOutlined} from '@ant-design/icons'
const { SubMenu } = Menu;
import {mapStoreToProps,mapActionsToProps} from 'fast-redux-reducer'
import {RoutesActions} from '../../stores/actions'
import {ROUTES , NavBarActions} from '../../stores/constants'
const {PAGES} = ROUTES


const MenuItem = ({path,...props}) => {
    const KEY = path.split('/').pop();
    return  <Menu.Item {...props} data-path={path} key={KEY}>{KEY}</Menu.Item>
}

function NavBar(props) {
    // reducer
    const {router : {location : {pathname}} , navBarIsCollapsed : collapsed} = props;
    // actions
    const {navigate , setCollapsed} = props
    const onSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        navigate(key)

    }
    const getName = (path) => {
        return path.split("/").pop()
    }
    const toggleCollapsed = (event) => {
        setCollapsed(!collapsed)
    }

    const CollapsButton = () => (
        <div className='collapsed-button'>
            <div onClick={toggleCollapsed}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
        </div>
    )

    const Logo = () => {
        if(collapsed){
            return <CollapsButton/>
        }
        return (
            <Fragment>
                <CollapsButton/>
                <div className='logo-text'>
                    Project Starter
                </div>
            </Fragment>
        )
    }

    return (
        <div className='nav-bar-component'>
            <div className='logo'>
               <Logo/>
            </div>
            <Menu
                className={`menu ${collapsed ? 'nav-bar-folded' : 'nav-bar-unfolded'}`}
                selectedKeys={pathname}
                mode='vertical'
                theme='dark'
                onSelect = {onSelect}
                 inlineCollapsed={collapsed}
            >
                <SubMenu title={<span><ToolOutlined /><span>Develop</span></span>}>
                    <Menu.Item key={PAGES.DEVELOP.REST_API}>{getName(PAGES.DEVELOP.REST_API)}</Menu.Item>
                    <Menu.Item key={PAGES.DEVELOP.I18}>{getName(PAGES.DEVELOP.I18)}</Menu.Item>
                    <Menu.Item key={PAGES.DEVELOP.LOCAL_STORAGE}>{getName(PAGES.DEVELOP.LOCAL_STORAGE)}</Menu.Item>
                    <Menu.Item key={PAGES.DEVELOP.REDUCERS_VIEWER}>{getName(PAGES.DEVELOP.REDUCERS_VIEWER)}</Menu.Item>
                </SubMenu>
                <Menu.Item key={PAGES.HOME} ><span><HomeOutlined /><span>{getName(PAGES.HOME)}</span></span></Menu.Item>
            </Menu>
        </div>
    )
}

NavBar.propTypes = {};
NavBar.defaultProps = {};

export default connect(
    mapStoreToProps('router','navBarIsCollapsed'),
    mapActionsToProps(RoutesActions , NavBarActions)
)(NavBar)