import React from 'react';

import './Howtorent.css'

const howtorent = (props) => (
    <div>
        <div className="row">
            <div className="col-lg-3">
                <div className="card text-white bg-secondary">
                    <div className="card-header"><strong>1. ลงทะเบียนผ่านเว็บไซต์</strong></div>
                    <div className="card-body height">
                        <div className="textcenter"><i className="fa fa-keyboard-o size"></i></div><br />
                        <p className="card-text">สมัครสมาชิก กรอกข้อมูลเพิ่มเติมให้ครบถ้วน</p>
                        <p className="card-text"><u>กรณีเช่าแบบที่ 1</u> อัพโหลดเอกสารผ่านเว็บ ถ่ายรูปหรือ Scan ก็ได้ กรณีเช่าแบบที่ 2 ไม่ต้องส่งเอกสารเพิ่มรายการจองได้เลย</p>
                        <p className="card-text"><u>กรณีเช่าแบบที่ 2</u> ไม่ต้องส่งเอกสารเพิ่มรายการจองได้เลย</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card bg-light">
                    <div className="card-header"><strong>2. ทำรายการจอง</strong></div>
                    <div className="card-body height">
                        <div className="textcenter"><i className="fa fa-book size"></i></div><br />
                        <p className="card-text">เลือกอุปกรณ์ วันรับคืน เช็คคิว และเพิ่มรายการจอง</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card text-white bg-secondary">
                    <div className="card-header"><strong>3. รอทางร้านโทรติดต่อกลับ</strong></div>
                    <div className="card-body height">
                        <div className="textcenter"><i className="	fa fa-phone size"></i></div><br />
                        <p className="card-text">หลังจากรายการเข้ามาในระบบแล้ว จะมีเจ้าหน้าที่โทรติดต่อกลับทุกชั่วโมงในเวลาทำการ</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card bg-light">
                    <div className="card-header"><strong>4. รับ-คืนอุปกรณ์ที่หน้าร้าน</strong></div>
                    <div className="card-body height">
                        <div className="textcenter"><i className="fa fa-camera size"></i></div><br />
                        <p className="card-text">รับ-คืนอุปกรณ์ตามวัน เวลาระบุด้วยตัวเอง ชำระค่าเช่าและหลักประกันในวันรับของทั้งหมด</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default howtorent;