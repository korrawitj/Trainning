import React, { Component } from 'react';

class Login extends Component {
    // state = {
    //     title: '',
    //     content: '',
    //     author: 'Max'
    // }

    // postDataHandler = () => {
    //     const data = {
    //         title: this.state.title,
    //         body: this.state.body,
    //         author: this.state.author
    //     }
    //     axios.post('https://jsonplaceholder.typicode.com/posts', data)
    //     .then(response => {
    //         console.log(response);
    //     });
    // }

    render() {
        return (
            <div style={{ marginTop: '80px' }}>
                <div className="form-group">
                    <label>อีเมล</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label >รหัสผ่าน</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input"/>
                    <label className="form-check-label">จดจำฉัน</label>
                </div>
                <button class="btn btn-primary">เข้าสู่ระบบ</button>
            </div>
        );
    }
}

export default Login;