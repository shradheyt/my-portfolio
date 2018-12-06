import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton} from 'react-mdl';
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth:'650', margin:'auto'}}>
                        <CardTitle style={{color:'#000', height:'176px', background: 'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>React Poject</CardTitle>
                        <CardText>
                        Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                     </Card>
                     <Card shadow={5} style={{minWidth:'650', margin:'auto'}}>
                        <CardTitle style={{color:'#000', height:'176px', background: 'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>React Poject</CardTitle>
                        <CardText>
                        Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                     </Card>
                     <Card shadow={5} style={{minWidth:'650', margin:'auto'}}>
                        <CardTitle style={{color:'#000', height:'176px', background: 'url(https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png) center / cover'}}>React Poject</CardTitle>
                        <CardText>
                        Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                     </Card>
                </div>
                
                
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is Java</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is C</h1></div>
            )
        } else {
            return(
                <div><h1>This is Node</h1></div>
            )
        }
    }

    render() {
        return (
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                        <Tab>React</Tab>
                        <Tab>Java</Tab>
                        <Tab>C</Tab>
                        <Tab>Node</Tab>
                    </Tabs>

                   
                    <Grid>
                            <Cell col={12}>
                                <div className="content">{this.toggleCategories()}</div>
                            </Cell>
                    </Grid>
                        
        
                </div>
            )
    }
    
}

export default Projects;