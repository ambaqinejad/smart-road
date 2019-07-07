import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./Components/Javascript/MainComponents/Home";
import PlateQuery from "./Components/Javascript/MainComponents/PlateQuery";
import PathQuery from "./Components/Javascript/MainComponents/PathQuery";
import CreateRoadAndCamera from "./Components/Javascript/MainComponents/CreateRoadAndCamera";
import 'bootstrap'
import 'jquery'
import './App.css';


class App extends Component {
    render() {

        return (
            <Router>
                <div>
                    <div dir={"rtl"}>
                        <nav className="navbar navbar-expand-lg navbar-light my-navbar">
                            <button className="navbar-toggler my-navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">
                                            <Link to={'/'}>
                                                خانه
                                            </Link>
                                            <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <Link to={'/plateQuery'}>
                                                استعلام پلاک
                                            </Link>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <Link to={'/pathQuery'}>
                                                استعلام مسیر
                                            </Link>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <Link to={'/road_camera'}>
                                                جاده و دوربین
                                            </Link>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/plateQuery' component={PlateQuery}/>
                        <Route path='/pathQuery' component={PathQuery}/>
                        <Route path='/road_camera' component={CreateRoadAndCamera}/>
                    </Switch>
                </div>
            </Router>
        );
    }

}

export default App;
