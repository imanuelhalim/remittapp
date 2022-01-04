import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from './SideBarData';
import '../../style_components/NavBar.css';
import { IconContext } from 'react-icons';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideBar: false
        }
    }

    showSideBar = () => {
        this.setState({
            sideBar: !this.state.sideBar,
        })
    }

    render () {
        return(
            <>
                <IconContext.Provider value={{ color: '#ffffff' }}>
                    <div className="navbar">
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaBars onClick={this.showSideBar}/>
                        </Link>   
                    </div>
                    <nav className={this.state.sideBar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className="nav-menu-items" onClick={this.showSideBar}>
                            <li className="navbar-toggle">
                                <Link to="#" className="menu-bars">
                                    <AiIcons.AiOutlineClose />
                                </Link> 
                            </li>
                            {SideBarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
            </>
        )
    }
}