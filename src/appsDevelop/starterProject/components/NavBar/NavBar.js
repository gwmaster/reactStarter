import React from 'react'
import { Menu, Icon, Switch } from 'antd';
import './NavBar.less'

const { SubMenu } = Menu;

class NavBar extends React.Component {
    state = {
        mode: 'vertical',
        theme: 'dark',
    };

    changeMode = value => {
        this.setState({
            mode: value ? 'vertical' : 'inline',
        });
    };

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };

    render() {
        return (
            <div>
                <div className='logo'>Logo</div>
                <div className='copyright'>©2020 Reigo onv.</div>
                <Menu
                    className='menu'
                    defaultSelectedKeys={['sub2']}
                    defaultOpenKeys={[]}
                    mode={this.state.mode}
                    theme={this.state.theme}
                >
                    <Menu.Item key="1">
                        <Icon type="bar-chart" />
                        Dashboard
                    </Menu.Item>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="home" /><span>Loan Analysis</span></span>}
                    >
                        <Menu.Item key="7">Option 1</Menu.Item>
                        <Menu.Item key="8">Option 2</Menu.Item>
                        <Menu.Item key="9">Option 3</Menu.Item>
                        <Menu.Item key="10">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="form" /><span>Reports</span></span>}>
                        <Menu.Item key="3">Option 5</Menu.Item>
                        <Menu.Item key="4">Option 6</Menu.Item>
                        <SubMenu key="sub1-2" title="Submenu">
                            <Menu.Item key="5">Option 7</Menu.Item>
                            <Menu.Item key="6">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>

                    <Menu.Item key="11">
                        <Icon type="clock-circle" />
                        Support
                    </Menu.Item>
                    <Menu.Item key="12">
                        <Icon type="setting" />
                        Setings
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
export default NavBar;