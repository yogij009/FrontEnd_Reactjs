import React, { Component } from 'react';
import axios from 'axios';


export default class CreateBlog extends Component {

    constructor(props) {
        super(props);

        this.onChangeblog_title = this.onChangeblog_title.bind(this);
        this.onChangeblog_description = this.onChangeblog_description.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            blog_title: '',
            blog_description: ''
        }
    }

    onChangeblog_title(e) {
        this.setState({
            blog_title: e.target.value
        });
    }

    onChangeblog_description(e) {
        this.setState({
            blog_description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.blog_title}`);
        console.log(`Todo Responsible: ${this.state.blog_description}`);

        const newBolg = {
            blog_title: this.state.blog_title,
            blog_description: this.state.blog_description
         
        };

        axios.post('http://localhost:4000/blogs/add', newBolg)
            .then(res => console.log(res.data));

        
        this.setState({
            blog_title: '',
            blog_description: '',
           
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Blog</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.blog_title}
                                onChange={this.onChangeblog_title}
                                />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.blog_description}
                                onChange={this.onChangeblog_description}
                                />
                    </div>
                  

                    <div className="form-group">
                        <input type="submit" value="Create Blog" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
