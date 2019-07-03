import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import CreateBlog from "./components/create-blog.component";
import EditBlog from "./components/edit-blog.component";
import BlogsList from "./components/Blogs-list.component";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
          <Link to="/" className="navbar-brand">Blog App</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Blog</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Blog</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Route path="/" exact component={BlogsList} />
        <Route path="/edit/:id" component={EditBlog} />
        <Route path="/create" component={CreateBlog} />
      </div>
    </Router>
    );
  }
}

export default App;
