import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { routes } from './routes';
import './static/sass/project.sass';

class App extends Component {
    state = {
        isAnimate: true
    };

    render() {
        const { isAnimate } = this.state;

        return (
            <Router>
                <Switch>
                    {/* <Transition in={isAnimate} timeout={50}>
                        {state => */}
                            <main className={`wrapper`}>
                                {routes.map(({id, path, component: Component}) => (
                                    <Route path={path} key={id}>
                                        <Component id={id}/>
                                    </Route>   
                                ))}
                                </main>
                      {/* }
                    </Transition> */}
                </Switch>
            </Router>
        )
    }
}

export default App;