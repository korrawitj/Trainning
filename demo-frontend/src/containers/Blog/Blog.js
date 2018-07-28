import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post
                    }
                });
                this.setState({ posts: updatedPosts });
                console.log(response);
            })
            .catch(error => {
                this.setState({ error: true })
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }

        return (
            <div className="row">
                {/* <section className="Posts">
                    {posts}
                </section>              */}
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-header">Featured</div>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="">รายการสินค้าทั้งหมด</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">รายสินค้าใหม่</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">รายการสินค้ายอดนิยม</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-9">

                </div>
            </div>
        );
    }
}

export default Blog;