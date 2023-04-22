import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import PrivateRoute from '../routing/PrivateRoute';
import AddEducation from '../profile-forms/AddEducation';
import AddExperience from '../profile-forms/AddExperience';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import CreateEvent from "../event/CreateEvent";
import JoinEvent from '../event/JoinEvent';

export const Routes = () => {
    return (
        <div>
            <section className='container-fluid p-0'>
                <Alert />
                <Switch>
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/profiles' component={Profiles} />
                    <Route exact path='/profile/:id' component={Profile} />
                    <PrivateRoute exact path='/posts' component={Posts} />
                    <PrivateRoute exact path='/CreateEvent' component={CreateEvent} />
                    <PrivateRoute exact path='/JoinEvent' component={JoinEvent} />
                    <PrivateRoute exact path='/posts/:id' component={Post} />
                    <PrivateRoute
                        exact
                        path='/dashboard'
                        component={Dashboard}
                    />
                    <PrivateRoute
                        exact
                        path='/create-profile'
                        component={CreateProfile}
                    />
                    <PrivateRoute
                        exact
                        path='/edit-profile'
                        component={EditProfile}
                    />
                    <PrivateRoute
                        exact
                        path='/add-education'
                        component={AddEducation}
                    />
                    <PrivateRoute
                        exact
                        path='/add-experience'
                        component={AddExperience}
                    />
                    <Route component={NotFound} />
                </Switch>
            </section>
        </div>
    );
};

export default Routes;
