import React, { Component } from 'react';
import axios from 'axios';



export default class EditBlog extends Component {

    
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

    
  
    componentDidMount() {
        axios.get('http://localhost:4000/blogs/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    blog_title: response.data.blog_title,
                    blog_description: response.data.blog_description,
                   
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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
        const obj = {
            blog_title: this.state.blog_title,
            blog_description: this.state.blog_description,
           
        };
        console.log(obj);
        axios.post('http://localhost:4000/blogs/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Blog</h3>
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
                   <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

   
}