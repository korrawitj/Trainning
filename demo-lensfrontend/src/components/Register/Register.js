import React, { Component } from 'react';
// import ModernDatepicker from 'react-modern-datepicker';
import './Register.css'
import { ToggleButtonGroup, ToggleButton, Checkbox } from 'react-bootstrap';
import Select from 'react-select';
import { NavLink } from 'react-router-dom';
const options = [
    { name: 'month', value: 1, label: 'มกราคม' },
    { name: 'month', value: 2, label: 'กุมภาพันธ์' },
    { name: 'month', value: 3, label: 'มีนาคม' },
    { name: 'month', value: 4, label: 'เมษายน' },
    { name: 'month', value: 5, label: 'พฤษภาคม' },
    { name: 'month', value: 6, label: 'มิถุนายน' },
    { name: 'month', value: 7, label: 'กรกฎคม' },
    { name: 'month', value: 8, label: 'สิงหาคม' },
    { name: 'month', value: 9, label: 'กันยายน' },
    { name: 'month', value: 10, label: 'ตุลาคม' },
    { name: 'month', value: 11, label: 'พฤศจิกายน' },
    { name: 'month', value: 12, label: 'ธันวาคม' },
];
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            field: {},
            validate: { confirmemail: false, confirmpassword: false, date: false, isAccept: false, email: false, password: false, year: false, month: false, gender: false },
            reset: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit = (e) => {
        let state = this.state.field;
        let validate = this.state.validate;
        if (Object.values(validate)
            .every(item => item === true)) {
            const user = { email: '', birthdate: '', password: '', fullname: '', gender: '', isAccept: '' };
            user.email = state.email;
            // user.birthdate=new Date(""+state.date+"-"+state.month+"-"+state.year+"").toISOString();
            user.password = state.password;
            user.fullname = state.fullname;
            user.gender = state.gender;
            user.isAccept = state.isAccept;
            // console.log(new Date(""+state.date+"-"+state.month+"-"+state.year+"").toISOString());
            console.log(validate)
            console.log(state)
            console.log(user);
        }
    }
    handleChange = (e) => {
        if (e.value !== undefined || e.value != null) {
            let value = e.value;
            let name = e.name;
            this.setState(state => { state.field[name] = value });
            this.setState(state => { state.validate[name] = true });
        }
        else {
            let value = e.target.value;
            let name = e.target.name;
            let check = e.target.checked;
            let node = document.createElement("SPAN");
            node.setAttribute("id", "validate" + e.target.id);
            node.setAttribute("style", "border:none;font-size:12px;color:red;height:0px;");
            node.setAttribute("class", "form-control");
            let regdate = /^[0-9]{1,2}$/;
            let regyear = /^[0-9]{1,4}$/;
            let regemail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            switch (name) {
                case "date": if (regdate.test(value) && value <= 31) {
                    this.setState(state => { state.field[name] = value });
                    this.setState(state => { state.validate[name] = true });
                }
                else {
                    this.setState(state => { state.validate[name] = false });
                    this.setState(state => { state.field[name] = "" });
                    e.target.value = "";
                }
                    break;
                case "password": if (value.length > 0) {
                    this.setState(state => { state.field[name] = value });
                    this.setState(state => { state.validate[name] = true });
                    e.target.className = "form-control";
                    if (document.getElementById("validate" + e.target.id) !== null) {
                        document.getElementById("validate" + e.target.id).remove();
                    }
                }
                else {
                    this.setState(state => { state.validate[name] = false });
                    this.setState(state => { state.field[name] = "" });
                    e.target.className = "form-control error";
                    let textnode = document.createTextNode("This Password Is Require");
                    node.appendChild(textnode);
                    document.getElementById(e.target.id).parentNode.append(node);
                }
                    break;
                case "confirmpassword":
                    if (value.length > 0) {
                        this.setState(state => { state.field[name] = value });
                        if (this.state.field.password === value) {
                            this.setState(state => { state.validate[name] = true });
                            e.target.className = "form-control";
                            if (document.getElementById("validate" + e.target.id) !== null) {
                                document.getElementById("validate" + e.target.id).remove();
                            }
                        }
                        else {
                            if (document.getElementById("validate" + e.target.id) !== null) {
                                document.getElementById("validate" + e.target.id).remove();
                            }
                            this.setState(state => { state.validate[name] = false });
                            this.setState(state => { state.field[name] = "" });
                            e.target.className = "form-control error";
                            let textnode = document.createTextNode("Confirm Password Is Not Match");
                            node.appendChild(textnode);
                            document.getElementById(e.target.id).parentNode.append(node);
                        }
                    }
                    else {
                        if (document.getElementById("validate" + e.target.id) !== null) {
                            document.getElementById("validate" + e.target.id).remove();
                        }
                        this.setState(state => { state.validate[name] = false });
                        this.setState(state => { state.field[name] = "" });
                        e.target.className = "form-control error";
                        let textnode = document.createTextNode("Confirm Password Is Require");
                        node.appendChild(textnode);
                        document.getElementById(e.target.id).parentNode.append(node);
                    }
                    break;
                case "year": if (regyear.test(value)) {
                    this.setState(state => { state.field[name] = value });
                    this.setState(state => { state.validate[name] = true });
                }
                else {
                    this.setState(state => { state.validate[name] = false });
                    this.setState(state => { state.field[name] = "" });

                    e.target.value = "";
                }
                    break;
                case "confirmemail": if (value.length > 0) {
                    this.setState(state => { state.field[name] = value });
                    if (this.state.field.email === value) {
                        this.setState(state => { state.validate[name] = true });
                        e.target.className = "form-control";
                        if (document.getElementById("validate" + e.target.id) !== null) {
                            document.getElementById("validate" + e.target.id).remove();
                        }
                    }
                    else {
                        if (document.getElementById("validate" + e.target.id) !== null) {
                            document.getElementById("validate" + e.target.id).remove();
                        }
                        this.setState(state => { state.validate[name] = false });
                        e.target.className = "form-control error";
                        let textnode = document.createTextNode("Email Is Not Match");
                        node.appendChild(textnode);
                        document.getElementById(e.target.id).parentNode.append(node);
                    }
                }
                else {
                    if (document.getElementById("validate" + e.target.id) !== null) {
                        document.getElementById("validate" + e.target.id).remove();
                    }
                    this.setState(state => { state.validate[name] = false });
                    this.setState(state => { state.field[name] = "" });
                    e.target.className = "form-control error";
                    let textnode = document.createTextNode("Confirm Email Is Require");
                    node.appendChild(textnode);
                    document.getElementById(e.target.id).parentNode.append(node);
                }
                    break;
                case "email":
                    if (value.length > 0) {
                        if (regemail.test(value)) {
                            this.setState(state => { state.field[name] = value });
                            this.setState(state => { state.validate[name] = true });
                            e.target.className = "form-control";
                            if (document.getElementById("validate" + e.target.id) !== null) {
                                document.getElementById("validate" + e.target.id).remove();
                            }
                        }
                        else {
                            if (document.getElementById("validate" + e.target.id) !== null) {
                                document.getElementById("validate" + e.target.id).remove();
                            }
                            this.setState(state => { state.validate[name] = false });
                            this.setState(state => { state.field[name] = "" });
                            e.target.className = "form-control error";
                            let textnode = document.createTextNode("Email Is Not Valid");
                            node.appendChild(textnode);
                            document.getElementById(e.target.id).parentNode.append(node);
                        }
                    }
                    else {
                        if (document.getElementById("validate" + e.target.id) !== null) {
                            document.getElementById("validate" + e.target.id).remove();
                        }
                        this.setState(state => { state.validate[name] = false });
                        this.setState(state => { state.field[name] = "" });
                        e.target.className = "form-control error";
                        let textnode = document.createTextNode("Email Is Require");
                        node.appendChild(textnode);
                        document.getElementById(e.target.id).parentNode.append(node);
                    }
                    break;
                case "isAccept": if (check) {
                    this.setState(state => { state.validate[name] = true });
                    this.setState(state => { state.field[name] = check });
                }
                else {
                    this.setState(state => { state.validate[name] = false });
                    this.setState(state => { state.field[name] = false });
                }
                    break;
                case "gender": if (value) {
                    this.setState(state => { state.field[name] = value });
                    this.setState(state => { state.validate[name] = true });
                }
                else {
                    this.setState(state => { state.validate[name] = false });
                    this.setState(state => { state.field[name] = false });
                }
                    break;
                default: this.setState(state => { state.field[name] = value });
                    break;
            }
        }
    }

    render() {
        return (
            <div className="container container-margin">
                <div className="card border-warning mb-12">
                    <div className="card-body">
                        <form method="post">
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" className="form-control" placeholder="อีเมล" onChange={(e) => this.handleChange(e)} />
                                    </div>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="email" id="confirmemail" name="confirmemail" className="form-control" placeholder="ยืนยันอีเมล" onChange={(e) => this.handleChange(e)} />
                                    </div>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="password" id="password" name="password" className=" form-control" placeholder="รหัสผ่าน" value={this.state.field.password} onChange={(e) => this.handleChange(e)} />
                                    </div>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="password" id="confirmpassword" name="confirmpassword" className="form-control" placeholder="ยืนยันรหัสผ่าน" onChange={(e) => this.handleChange(e)} />
                                    </div>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input type="text" id="fullname" name="fullname" className="form-control" placeholder="คุณชื่ออะไร" onChange={(e) => this.handleChange(e)} />
                                    </div>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label>วันเกิด</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <input type="text" name="date" className={this.state.validate.date ? "error form-control" : "form-control"} placeholder="วัน" onChange={(e) => this.handleChange(e)} ref={this.state.reset} value={this.state.field.date} />
                                        </div>
                                        <div className="col-sm-4">
                                            <Select
                                                value={this.state.field.month}
                                                onChange={(e) => this.handleChange(e)}
                                                options={options}
                                                name="month"
                                            />
                                        </div>
                                        <div className="col-sm-4">
                                            <input type="text" name="year" className="form-control" placeholder="ปี" onChange={(e) => this.handleChange(e)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3"></div>
                            </div><br />
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <ToggleButtonGroup type="radio" name="gender" onFocus={(e) => this.handleChange(e)}>
                                            <ToggleButton style={{ border: 'none' }} value="ชาย" >ชาย</ToggleButton>
                                            <ToggleButton style={{ border: 'none' }} value="หญิง" >หญิง</ToggleButton>
                                            <ToggleButton style={{ border: 'none' }} value="อื่นๆ" >อื่นๆ</ToggleButton>
                                        </ToggleButtonGroup>
                                    </div>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <Checkbox onChange={(e) => this.handleChange(e)} name="isAccept"> แชร์ข้อมูลการลงทะเบียนของฉันกับผู้ให้บริการของ LenLineUp เพื่อวัตถุประสงค์ทางการตลาด </Checkbox>
                                    </div>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                    <p style={{ textAlign: 'center', fontSize: '13px' }}>
                                        เมื่อคลิกลงทะเบียน เท่ากับว่าคุณยอมรับ<span className="link-btn">ข้อกำหนดและเงื่อนไขการใช้งาน</span>ของ LenLineUp
                                    </p>
                                    <p style={{ textAlign: 'center', fontSize: '13px' }}>
                                        หากต้องการเรียนรู้เพิ่มเติมเกี่ยวกับวิธีที่ LenLineUp รวบรวม ใช้ แชร์และปกป้องข้อมูลส่วนตัวของคุณ โปรดอ่านเพิ่มเติมใน<span className="link-btn">นโยบายความเป็นส่วนตัว</span>ของ LenLineUp
                                        </p>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                    <div className="form-group" style={{ textAlign: 'center' }}>
                                        <button type="button" className="btn btn-outline-warning btn-submit" onClick={() => this.handleSubmit()} >ลงทะเบียน</button>
                                    </div>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <p style={{ textAlign: 'center', fontSize: '13px' }}>
                                            มีบัญชีอยู่แล้วใช่ไหม
                                    <NavLink to="/Login" className="link-btn">เข้าสู่ระบบ</NavLink>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                        </form>
                    </div>
                </div><br />
            </div>
        );
    }
}

export default Register;