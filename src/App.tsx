import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
// import {Dialogs} from './components/Dialogs/Dialogs';
import {Music} from "./components/Music/Music";
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes, RootStateType, StoreType} from "./redux/state";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    state: RootStateType
    //addPost: (addNewPost: string) => void
    //changeNewPostText: (newText: string) => void
    //changeNewMessageText: (newText: string) => void
    //newSendMessage: (newSendMessage: string) => void
    //store: StoreType
    //dispatch: (action: ActionsTypes) => void
}

export const App: React.FC<AppPropsType> = (props) => {
    //const state = (props.store.getState)
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar
                    sidebarPage={props.state.sidebarPage}
                />
                <div className={'app-content'}>
                    <Route path={'/profile'} render={() =>
                        <Profile
                            // store={props.store}
                            //      profilePage={props.state.profilePage}
                            //      dispatch={props.dispatch}
                            //      addPost={props.addPost}
                            //      changeNewPostText={props.changeNewPostText}
                        />}/>
                    <Route path={'/dialogs'} render={() =>
                        <DialogsContainer/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>

                </div>

            </div>
        </BrowserRouter>);
}