import React from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { routes } from './routes';
import './static/sass/project.sass';

const App = () => {
    return (
        <Router>
            <main className="main">
                <div className="main__wrapper">
                    {routes.map(({id, path, component: Component}) => (
                        <Route path={path} exact={true} key={id}>
                            {({ match }) => (
                                <CSSTransition
                                    in={match !== null}
                                    timeout={300}
                                    classNames="slide"
                                    unmountOnExit
                                >
                                    <div className="slide">
                                        <Component id={id}/>
                                    </div>
                                </CSSTransition>
                            )}
                        </Route>
                    ))}
                    <Route path="/" exact={true} render={() => <Redirect to={'/register'}/>}/>
                </div>
            </main>
        </Router>
    )
}

export default App;