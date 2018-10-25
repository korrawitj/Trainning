import React, { Component } from 'react';
import ModernDatepicker from 'react-modern-datepicker';
import moment from 'moment';
import './Register.css'
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <div className="marginDefault">
                <div className="form-group">
                    <div className="col-md-4">
                        <input type="email" className="form-control" placeholder="อีเมล" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-4">
                        <input type="email" className="form-control" placeholder="ยืนยันอีเมล" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-4">
                        <input type="password" className="form-control" placeholder="รหัสผ่าน" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-4">
                        <input type="password" className="form-control" placeholder="ยืนยันรหัสผ่าน" />
                    </div>
                </div>
                <div className="form-group">
                    <label>วันเกิด</label>
                    <div className="col-md-3" style={{ zIndex: '500' }}>
                        <ModernDatepicker
                            date={this.state.startDate}
                            format={'DD MM YYYY'}
                            showBorder
                            onChange={(date) => this.handleChange(date)}
                            placeholder={'Select a date'}
                            className="form-control"
                        />
                    </div>
                </div>

                {/* <div className="form-group">
                <button className="btn btn-primary" >เข้าสู่ระบบ</button>
                <button className="btn btn-primary"style={{marginLeft:'5px'}}>สมัครสมาชิก</button>
                </div> */}
            </div>
        );
    }
}

export default Register;