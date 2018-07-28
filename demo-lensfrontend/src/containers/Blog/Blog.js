import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
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
                const posts = response.data.slice(0, 9);
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
        console.log(this.state);
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
                                <div className="nav-link">รายสินค้าใหม่</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">รายการสินค้ายอดนิยม</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-9">
                    <h2>รายการสินค้าทั้งหมด</h2>
                    <section className="Posts">
                        {posts}
                    </section>
                    <section>
                        <FullPost id={this.state.selectedPostId} />
                    </section>
                    <ul className="pagination justify-content-end" style={{ marginTop: '20px' }}>
                        <li className="page-item disabled"><a className="page-link" href="">Previous</a></li>
                        <li className="page-item disabled"><a className="page-link" href="">1</a></li>
                        <li className="page-item"><a className="page-link" href="">2</a></li>
                        <li className="page-item"><a className="page-link" href="">Next</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Blog;