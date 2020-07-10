import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { routes } from './routes';
import './static/sass/project.sass';

const App = () => {
    return (
        <Router>
            <Switch>
                <main className={`main `}>
                    <div className="main__wrapper">
                        {routes.map(({id, path, component: Component}) => (
                            <Route path={path} key={id}>
                                {({ match }) => (
                                    <CSSTransition
                                        in={match !== null}
                                        timeout={300}
                                        classNames="page"
                                        appear={true}
                                        unmountOnExit
                                    >
                                        <Component id={id}/>
                                    </CSSTransition>
                                )}
                            </Route>   
                        ))}
                    </div>
                </main>
            </Switch>
        </Router>
    )
}

export default App;