import {  Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import NewQuestion from './pages/NewQuestion';
import QuestionDetails from './pages/QuestionDetails';
import Profile from './pages/Profile';

const MainRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={Home} />
                <Route exact path='/new-question' component={NewQuestion} />
                <Route exact path='/question/:id' component={QuestionDetails} />
                <Route exact path='/profile' component={Profile} />

            </Switch>

        </>
    )
}

export default MainRouter;