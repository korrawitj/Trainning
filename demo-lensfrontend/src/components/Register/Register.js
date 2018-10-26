import React, { Component } from 'react';
// import ModernDatepicker from 'react-modern-datepicker';
import './Register.css'
import { ButtonGroup, Button, Checkbox } from 'react-bootstrap';
import Select from 'react-select';
import { NavLink } from 'react-router-dom';
const options = [
    { name:'month',value: 1, label: 'มกราคม' },
    { name:'month',value: 2, label: 'กุมภาพันธ์' },
    { name:'month',value: 3, label: 'มีนาคม' },
    { name:'month',value: 4, label: 'เมษายน' },
    { name:'month',value: 5, label: 'พฤษภาคม' },
    { name:'month',value: 6, label: 'มิถุนายน' },
    { name:'month',value: 7, label: 'กรกฎคม' },
    { name:'month',value: 8, label: 'สิงหาคม' },
    { name:'month',value: 9, label: 'กันยายน' },
    { name:'month',value: 10, label: 'ตุลาคม' },
    { name:'month',value: 11, label: 'พฤศจิกายน' },
    { name:'month',value: 12, label: 'ธันวาคม' },
];
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            field: {},
            validate: {},
            reset:false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        if (e.value !== undefined || e.value != null) {
            let value = e.value;
            let name = e.name;
            this.setState(state => { state.field[name] = value });
        }
        else {
            let value = e.target.value;
            let name = e.target.name;
            let node = document.createElement("SPAN");
            node.setAttribute("id","validate"+e.target.id);
            node.setAttribute("style","border:none;font-size:12px;color:red;height:0px;");
            node.setAttribute("class","form-control");
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
                    if(document.getElementById("validate"+e.target.id)!==null)
                    {
                        document.getElementById("validate"+e.target.id).remove();
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
                            if(document.getElementById("validate"+e.target.id)!==null)
                            {
                                document.getElementById("validate"+e.target.id).remove();
                            }
                        }
                        else {
                            if(document.getElementById("validate"+e.target.id)!==null)
                            {
                                document.getElementById("validate"+e.target.id).remove();
                            }
                            this.setState(state => { state.validate[name] = false });
                            this.setState(state => { state.field[name] = "" });
                            e.target.className = "form-control error";
                            let textnode = document.createTextNode("Confirm Password Is Not Match");
                            node.appendChild(textnode);
                            document.getElementById(e.target.id).parentNode.append(node);
                        }
                    }
                    else{
                        if(document.getElementById("validate"+e.target.id)!==null)
                        {
                            document.getElementById("validate"+e.target.id).remove();
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
                        if(document.getElementById("validate"+e.target.id)!==null)
                        {
                            document.getElementById("validate"+e.target.id).remove();
                        }
                    }
                    else {
                        if(document.getElementById("validate"+e.target.id)!==null)
                        {
                            document.getElementById("validate"+e.target.id).remove();
                        }
                        this.setState(state => { state.validate[name] = false });
                        e.target.className = "form-control error";
                        let textnode = document.createTextNode("Email Is Not Match");
                        node.appendChild(textnode);
                        document.getElementById(e.target.id).parentNode.append(node);
                    }
                }
                else {
                    if(document.getElementById("validate"+e.target.id)!==null)
                    {
                        document.getElementById("validate"+e.target.id).remove();
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
                if(value.length>0){
                if (regemail.test(value)) {
                    this.setState(state => { state.field[name] = value });
                    e.target.className = "form-control";
                    if(document.getElementById("validate"+e.target.id)!==null)
                    {
                        document.getElementById("validate"+e.target.id).remove();
                    }
                }
                else {
                    if(document.getElementById("validate"+e.target.id)!==null)
                    {
                        document.getElementById("validate"+e.target.id).remove();
                    }
                    this.setState(state => { state.validate[name] = false });
                    this.setState(state => { state.field[name] = "" });
                    e.target.className = "form-control error";
                    let textnode = document.createTextNode("Email Is Not Valid");
                    node.appendChild(textnode);
                    document.getElementById(e.target.id).parentNode.append(node);
                }
            }
            else{
                if(document.getElementById("validate"+e.target.id)!==null)
                {
                    document.getElementById("validate"+e.target.id).remove();
                }
                this.setState(state => { state.validate[name] = false });
                this.setState(state => { state.field[name] = "" });
                e.target.className = "form-control error";
                let textnode = document.createTextNode("Email Is Require");
                node.appendChild(textnode);
                document.getElementById(e.target.id).parentNode.append(node);
            }
                    break;
                default: break;
            }
        }
    }

    render() {
        return (
            <form method="post">
            <div className="marginDefault">
                <div className="form-group">
                    <div className="col-lg-5">
                        <input type="email" id="email"name="email" className="form-control" placeholder="อีเมล" onChange={(e)=>this.handleChange(e)} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-5">
                        <input type="email" id="confirmemail" name="confirmemail" className="form-control" placeholder="ยืนยันอีเมล"  onChange={(e)=>this.handleChange(e)}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-5" >
                        <input type="password" id="password" name="password" className=" form-control" placeholder="รหัสผ่าน" value={this.state.field.password} onChange={(e)=>this.handleChange(e)} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-5">
                        <input type="password" id="confirmpassword" name="confirmpassword" className="form-control" placeholder="ยืนยันรหัสผ่าน" onChange={(e)=>this.handleChange(e)} />
                    </div>
                </div>
                <div className="form-group">
                    <label>วันเกิด</label>
                    <div className="col-lg-5">
                        <div className="row">
                            <div style={{ width: '20%' }}>
                                <input type="text" name="date" className={this.state.validate.date?"error form-control":"form-control"} placeholder="วัน" onChange={(e)=>this.handleChange(e)} ref={this.state.reset}value={this.state.field.date}/>
                            </div>
                            <div style={{ width: '50%' }}>
                                <Select
                                    value={this.state.field.month}
                                    onChange={(e)=>this.handleChange(e)}
                                    options={options}
                                />
                            </div>
                            <div style={{ width: '30%' }}>
                                <input type="text" name="year" className="form-control" placeholder="ปี" onChange={(e)=>this.handleChange(e)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-5" style={{ textAlign: "center" }}>
                        <ButtonGroup onClick={(e)=>this.handleChange(e)}>
                            <Button name="gender" value="ชาย">ชาย</Button>
                            <Button name="gender" value="หญิง">หญิง</Button>
                            <Button name="gender" value="อื่นๆ">อื่นๆ</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-5" style={{ textAlign: "center" }}>
                        <Checkbox > แชร์ข้อมูลการลงทะเบียนของฉันกับผู้ให้บริการของ LenLineUp เพื่อวัตถุประสงค์ทางการตลาด </Checkbox>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-5" style={{ textAlign: 'center' }}>
                        เมื่อคลิกลงทะเบียน เท่ากับว่าคุณยอมรับข้อกำหนดและเงื่อนไขการใช้งานของ LenLineUp
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-5" style={{ textAlign: 'center' }}>
                        หากต้องการเรียนรู้เพิ่มเติมเกี่ยวกับวิธีที่ LenLineUp รวบรวม ใช้ แชร์และปกป้องข้อมูลส่วนตัวของคุณ
                        โปรดอ่านเพิ่มเติมในนโยบายความเป็นส่วนตัวของ LenLineUp
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-5" style={{ textAlign: "center" }}>
                        <button className="btn btn-primary" onClick={console.log(this)} >สมัครสมาชิก</button>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-lg-5" style={{ textAlign: "center" }}>
                    มีบัญชีอยู่แล้วใช่ไหม
                    <NavLink to="/Login"style={{marginLeft:'5px'}}>เข้าสู่ระบบ</NavLink>
                    </div>
                </div>
                   
            </div>
            </form>
        );
    }
}

export default Register;