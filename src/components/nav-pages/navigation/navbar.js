import React, { Component } from 'react';

import NavToggle from '../navigation/nav-toggle';
import '../../../assets/css/navigation/navbar.css'

class NavBar extends Component {
    constructor(props){
        super(props);

        this.state  = {
            isTop: true
        };
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount(){
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if(isTop !== this.state.isTop){
                this.onScroll(isTop);
            }
        });
    }

    onScroll(isTop){
        this.setState({
            isTop
        });
    }

    render(){

        let backColor = 'navBar';
        let text_color = '';

        if(!this.state.isTop){
            backColor = 'navBar solid'
            text_color = 'color'
        }
        return (
            <div className = {backColor}>
                <nav className = "navBar__body">
                    <div className="navBar__logo"><a className = {text_color} href="#">SageApe</a></div>
                    <div className = "navBar__navigation">
                        <ul className = "navBar__navigation--list">
                            <li><a className={text_color} href="#">one</a></li>
                            <li><a className={text_color} href="#">two</a></li>
                            <li><a className={text_color} href="#">three</a></li>
                        </ul>
                    </div>
                    <div className = "navToggleDiv">
                        <NavToggle click={this.props.sideNavClickHandler}  top = {this.state.isTop}/>
                    </div>
                    
                </nav>
            </div>
        );
    }
}

export default NavBar;