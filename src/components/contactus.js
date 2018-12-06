import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class ContactUs extends Component {
    render() {
        return (
                <div className="contact-body">
                    <Grid className="contact-grid">
                        <Cell col={6}>
                            <h2>Shradhey Tripathi</h2>
                            <img 
                                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                                alt="avatar"
                                style={{height:'250px'}}
                             />
                             <p style={{width:'75%',margin:'auto', paddingTop: '1em'}}>
                             Lore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore Ipsum
                             Lore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore Ipsum
                             Lore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore IpsumLore Ipsum
                             </p>
                        </Cell>
                        <Cell col={6}>
                            <h2>Contact Me</h2>
                            <hr/>\
                            <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    +91 8096389886
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    shradhey029tripathi@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fab fa-skype" aria-hidden="true" />
                                    shradheyt
                                    </ListItemContent>
                                </ListItem>
                                
                            </List>
                            </div>
                            
                        </Cell>
                    </Grid>
                </div>
            )
    }
    
}

export default ContactUs;