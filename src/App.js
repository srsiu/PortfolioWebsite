import React, { Component } from 'react';
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PageHeader from "./header";
import HomePage from "./homePage";
import AboutMe from "./AboutMe";
import Projects from "./Projects";


class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
                    <PageHeader></PageHeader>

                    <Switch>
                        <Route path="/blog" component={BlogScreen}/>
                        <Route path="/about" component={AboutMe}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/" component={HomePage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

function HomeScreen() {
    return (
        <div>
            <h1>Home</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
    );
}

function BlogScreen() {
    return (
        <div>
            <h1>Blog</h1>
            <h4>Some blog post</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h4>Another blog post</h4>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <h4>Even more blog post</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}

function AboutScreen() {
    return (
        <div>
            <h1>About</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
    );
}

export default App;
