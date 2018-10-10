import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import {BrowserRouter as Link, Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      langs: [ "en-US", "fr-FR"],
      selectedNav: 1,
      dropdownOpen: false,
      loginError: null,
      backgroundImage : "url(https://betterairus.com/wp-content/uploads/2018/02/inside-airport-wallpaper-50123-51810-hd-wallpapers-1024x576.jpg)",
      fields: JSON.stringify([
        // {
        //   type: "radiobutton",
        //   label: "Gender",
        //   name: "gender",
        //   options: ["Male", "Female"],
        //   value: "Male"
        // },
        // {
        //   type: "date",
        //   label: "DOB",
        //   name: "dob"
        // },
        // {
        //   type: "checkbox",
        //   label: "Accept Terms",
        //   name: "term",
        //   value: true
        // },
        // {
        //   type: "input",
        //   label: "Email Address",
        //   inputType: "email",
        //   name: "email"
        // },
        {
          type: "select",
          label: "Site",
          name: "site",
          value: "ABC",
          options: ["ABC", "UAE", "UK", "US"]
        },      
        {
          type: "input",
          label: "Username",
          inputType: "text",
          name: "username"        
        },      
        {
          type: "input",
          label: "Password",
          inputType: "password",
          name: "password"
        },
        {
          type: "switch",
          label: "LDAP Auth",
          name: "ldap",
          value: false,
          textAlign: "right"
        },
        {
          type: "button",
          label: "Login",
          textAlign: "center"
        }
      ])     
    };
    
  }
  
  selectItem(id){
    this.setState({selectedNav: id});
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  setLanguage(lang){
     console.log(`setting lang ${lang}`);
     this.toggle();
  }
  handleNvEnter(ev) {
    console.log(ev.detail);
    this.loginError = "login error, check your credential";
    
  }
  componentDidMount() {
    this.nv.addEventListener("submit", this.handleNvEnter);
  }

  componentWillUnmount() {
    this.nv.removeEventListener("submit", this.handleNvEnter);
  }
  render() {
    return (
      <div className="App">
          <div className="app-content">
            <div>
              <ng-sitamat-toolbar>
                 <span toolbar-title="true">
                    SitaUI React
                </span>
                <span toolbar-lang="true">                   
                   <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle
                      tag="span"
                      onClick={this.toggle}
                      data-toggle="dropdown"
                      aria-expanded={this.state.dropdownOpen}
                    >
                      <i className="fas fa-globe"></i>
                    </DropdownToggle>
                    <DropdownMenu>
                      {this.state.langs.map( (language, index) => {
                        return (<button key={index} className="mat-btn" onClick={this.setLanguage.bind(this, language)}>
                          {language}
                        </button>)
                      })}                      
                    </DropdownMenu>
                  </Dropdown>
               </span>
              </ng-sitamat-toolbar>
            </div>
            <div className="sidebar-container">
              <ng-sitamat-navbar>            
                <Link to={{ pathname: '/dashboard' }}>
                  <ng-sitamat-navbar-item active={this.state.selectedNav === 1} onClick={this.selectItem.bind(this, 1)}>                 
                      <span icon-html="true">
                        <i className="fas fa-tachometer-alt"></i>
                      </span>
                      <div nav-text="true">
                        LOCAL ROUTING
                      </div>
                  </ng-sitamat-navbar-item>
                </Link>  
                <Link to={{ pathname: '/dashboard1' }}>
                  <ng-sitamat-navbar-item active={this.state.selectedNav === 2} onClick={this.selectItem.bind(this, 2)}>                 
                      <span icon-html="true">
                        <i className="fas fa-tachometer-alt"></i>
                      </span>
                      <div nav-text="true">
                        LOCAL ROUTING 2
                      </div>
                  </ng-sitamat-navbar-item>
                </Link> 
                <a href="http://hellogoogle.com">
                  <ng-sitamat-navbar-item>                 
                      <span icon-html="true">
                      <i className="fas fa-cogs"></i>
                      </span>
                      <div nav-text="true">
                        OUTSIDE HREF
                      </div>
                  </ng-sitamat-navbar-item>
                </a>
              </ng-sitamat-navbar>
            </div>
            <div className="login-pane">
              <ng-sita-login 
                  title="SITA LOGIN"
                  loginBgImage="url(https://betterairus.com/wp-content/uploads/2018/02/inside-airport-wallpaper-50123-51810-hd-wallpapers-1024x576.jpg)"
                  fields={this.state.fields}
                  loginError={this.loginError}                  
                  ref={elem => this.nv = elem}>
                  <span toolbar-lang="true">                   
                   
                  </span>
              </ng-sita-login>
            </div>
          </div>          
      </div>
    );
  }
}

export default App;
