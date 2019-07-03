import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Blog = props => (
    <tr>
        <td>{props.blog.blog_title}</td>
        <td>{props.blog.blog_description}</td>
        <td>
            <Link to={"/edit/" + props.blog._id}>Edit</Link>
        </td>
    </tr>
)

export default class BlogsList extends Component {

    constructor(props) {
        super(props);
        this.state = { blogs: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/blogs/')
            .then(response => {
                this.setState({ blogs: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    blogList() {
        return this.state.blogs.map(function(currentBlog, i){
            return <Blog blog={currentBlog} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Blogs List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.blogList() }
                    </tbody>
                </table>
            </div>
        )
    }
}