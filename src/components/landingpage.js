import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
class LandingPage extends Component {
    render() {
        return (
                <div style = {{width: '100%', margin: 'auto'}}>
                    <Grid className="landing-grid">
                        <Cell col={12}>
                            <img 
                                src="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/20374747_1413168372100411_1827436129673397792_n.jpg?_nc_cat=106&_nc_ht=scontent-maa2-1.xx&oh=9bb5c3bb1f6fc1570688ae461fccf93d&oe=5C63A12D"
                                alt="avatar"
                                className="avatar-image"
                            />
                            

                            <div className="banner-text">
                                <h1> Software Developer</h1>
                                <hr/>
                                <p> HTML/CSS | Javascript | NodeJS | Express | Java | C | C++ </p>
                                <div className="social-links">
                                    {/* Linkedin */}
                                    <a href="https://www.linkedin.com/in/shradheyt/" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-linkedin"  aria-hidden="true" />
                                    </a>
                                      {/* Github */}
                                    <a href="https://github.com/shradheyt" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-github"  aria-hidden="true" />
                                    </a>
                                      {/* Facebook */}
                                    <a href="https://www.facebook.com/shradheyt" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-facebook"  aria-hidden="true" />
                                    </a>
                                     {/* Stack Overflow */}
                                    <a href="https://stackoverflow.com/users/6519468/shradhey-tripathi" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-stack-overflow"  aria-hidden="true" />
                                    </a>
                                    
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            )
    }
    
}

export default LandingPage;