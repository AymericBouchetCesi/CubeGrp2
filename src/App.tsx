import {Redirect, Route} from 'react-router-dom';
import {
    IonApp,
    IonRouterOutlet,
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import Connection from "./vue/connection/Connection";
import Inscription from "./vue/inscription/Inscription";
import Post from "./vue/post/Post";
import NewPost from "./vue/post/newPost";
import Home from "./vue/Home/Home"


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React, { useEffect } from "react";
import {getCurrentUser} from './firebaseConf'

const App: React.FC = () => {
    // useEffect(() => {
    //     getCurrentUser().then(user =>{
    //         if(user){
    //             //login in
    //             window.history.replaceState({}, '', '/post')
    //         } else {
    //             window.history.replaceState({}, '', '/')
    //         }
    //     })
    // }, [])
return (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/connection">
                    <Connection/>
                </Route>
                <Route exact path="/home">
                    <Home/>
                </Route>
                <Route exact path="/">
                    <Redirect to="/connection"/>
                </Route>
                <Route exact path="/inscription">
                    <Inscription/>
                </Route>
                <Route exact path="/post">
                    <Post/>
                </Route>
                <Route exact path="/post/newPost">
                    <NewPost/>
                </Route>
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
    )
}

export default App;
