import React from 'react';

import './Howtorent.css'

const howtorent = (props) => (
    <div>
        <div className="card header">
            <h3 className="card-title text-info textcenter">How to Work</h3>
            <hr />
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
        <div className="card header">
            <h3 className="card-title text-info textcenter">รูปแบบ / ขั้นตอนการเช่า</h3>
            <div className="card border-info">
                <div className="card-body">
                    <h5 className="card-text text-info textcenter"><strong>แบบที่ 1</strong></h5>
                </div>
                <div className="card-group">
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <h4><u>ส่งเอกสาร</u></h4>
                            <p className="card-text"><i className="fa fa-check-circle"></i> วางหลักประกันอุปกรณ์ระหว่างเช่า (ลดลงจากแบบที่ 2 ประมาณ 30-40%)</p>
                            <p className="card-text"><i className="fa fa-check-circle"></i> ใช้เอกสาร 3 รายการ</p>
                            <p className="card-text"><i className="fa fa-check-circle"></i> กรณีเช่าอุปกรณ์ที่ต้องวางหลักประกัน ไม่ต้องวางบัตรตัวจริงระหว่างเช่า</p>
                            <p className="card-text"><i className="fa fa-check-circle"></i> อยู่ในกรุงเทพฯ หรือปริมณฑล</p>
                            <hr />
                            <p className="card-text">แบบที่ 1 ใช้เอกสาร 3 รายการ เมื่อส่งเอกสารทำรายการจองแล้ว ทางร้านโทรจะแจ้งมูลค่าหลักค้ำประกันที่ต้องวางไว้ ระหว่างเช่าใน Rate ที่ทางร้านกำหนด มูลค่าหลักประกันแบบที่ 1 จะลดลงจากแบบที่ 2 ประมาณ 30-40%</p>
                        </div>
                    </div>
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <h4><u>ขั้นตอน</u></h4>
                            <p className="card-text"><i className="fa fa-plus-square"></i> 1. ลงทะเบียนในเว็บไซต์</p>
                            <p className="card-text"><i className="fa fa-plus-square"></i> 2. Upload เอกสารผ่านระบบ</p>
                            <p className="card-text"><i className="fa fa-plus-square"></i> 3. ทำรายการจอง</p>
                            <p className="card-text"><i className="fa fa-plus-square"></i> 4. รอทางร้านตรวจสอบรายการ</p>
                            <p className="card-text"><i className="fa fa-plus-square"></i> 5. รับอุปกรณ์</p>
                            <p className="card-text"><i className="fa fa-plus-square"></i> 6. คืนอุปกรณ์ รับหลักประกันคืน</p>
                            <br />
                            <h5>การเช่าในครั้งต่อๆไป</h5>
                            <p className="card-text">การเช่าในครั้งต่อๆไปลูกค้าสามารถทำรายการ จองผ่านทางหน้าระบบได้ตลอดเวลา และในวันรับของเตรียมมา เฉพาะ ค่าเช่า,บัตรตัวจริง,หลักประกัน(ถ้ามี)</p>
                        </div>
                    </div>
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <h4><u>เอกสารที่ใช้</u></h4>
                            <ol>
                                <li className="pad"><p className="card-text">สำเนาบัตรประชาชน</p></li>
                                <li className="pad"><p className="card-text">สำเนาทะเบียนบ้าน</p></li>
                                <li className="pad">
                                    <p className="card-text">เอกสารยืนยันที่อยู่ปัจจุบัน 1 รายการ เช่น (เลือก 1 รายการ) <span style={{ color: 'red' }}>*</span></p>
                                    <ul>
                                        <li className="pad"><p className="card-text">ใบแจ้งค่าน้ำค่าไฟ</p></li>
                                        <li className="pad"><p className="card-text">ใบแจ้งค่าโทรศัพท์มือถือ</p></li>
                                        <li className="pad"><p className="card-text">ใบแจ้งค่าอินเตอร์เน็ต</p></li>
                                        <li className="pad"><p className="card-text">ใบแจ้งค่าบัตรเครดิต</p></li>
                                        <li className="pad"><p className="card-text">ใบแจ้งประกันชีวิต</p></li>
                                    </ul>
                                    <p className="card-text">ใบแจ้งอื่นๆ ที่ตรงตามเงื่อนไขทางร้าน</p>
                                </li>
                            </ol>
                            <p className="card-text"><span style={{ color: 'red' }}>*</span> เอกสารยืนยันที่อยู่ เป็นเอกสารที่ไปรษณีย์ส่งมาที่บ้านทุกๆเดือน ที่มี ชื่อที่ตรงกัน และ มีที่อยู่ปัจจุบัน อยู่ในเอกสารนั้น ที่อยู่ไม่จำเป็นต้องตรงกับทะเบียนบ้าน เช่นใบแจ้งค่าอินเตอร์เน็ต,ค่าโทรศัพท์,ค่าน้ำ,ค่าไฟ,ใบแจ้งค่าบัตรเครดิต เอกสารย้อนหลังได้ไม่เกิน 3 เดือน และมี ที่อยู่ๆในกรุงเทพและปริมฑล เท่านั้น</p>
                            <p className="card-text"><u>กรณีเอกสารไม่ครบ หรือ ไม่ตรงเงื่อนไขต้องเช่าแบบที่ 2 เท่านั้น</u></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-info">
                <div className="card-body">
                    <h5 className="card-text text-info textcenter"><strong>แบบที่ 2</strong></h5>
                </div>
                <div className="card-group">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h4><u>วางหลักประกันเต็ม</u></h4>
                            <p className="card-text"><i className="fa fa-check-circle"></i> วางหลักประกันอุปกรณ์ระหว่างเช่า</p>
                            <p className="card-text"><i className="fa fa-check-circle"></i> ไม่ต้องวางบัตรตัวจริง</p>
                            <p className="card-text"><i className="fa fa-check-circle"></i> ใช้แค่สำเนาบัตรประชาชน</p>
                            <p className="card-text"><i className="fa fa-check-circle"></i> ลูกค้าต่างจังหวัดสามารถเช่าแบบนี้ได้ (รับของคืนของที่ร้านเท่านั้น)</p>
                            <hr />
                            <p className="card-text">ใช้สำเนาบัตรประชาชน และ วางหลักคํ้าประกันไว้ระหว่างเช่า ใน Rate ที่ทางร้านกำหนด กรณีเช่าแบบที่ 2 สามารถโทรสอบถาม ราคาหลักประกันได้ที่เบอร์ 080-818-8872 ถึง 74</p>
                        </div>
                    </div>
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h4><u>ขั้นตอน</u></h4>
                            <p className="card-text"><i className="fa fa-plus-square"></i> 1. ลงทะเบียนในเว็บไซต์</p>
                            <p className="card-text"><i className="fa fa-plus-square"></i> 2. ลงจอง</p>
                            <p className="card-text"><i className="fa fa-plus-square"></i> 3. รอทางร้านโทร Confirm หรือ Confirm ผ่านระบบ</p>
                            <p className="card-text"><i className="fa fa-plus-square"></i> 4. รับอุปกรณ์</p>
                            <p className="card-text"><i className="fa fa-plus-square"></i> 5. คืนอุปกรณ์ รับหลักประกันคืน</p>
                        </div>
                    </div>
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h4><u>สิ่งที่ต้องใช้</u></h4>
                            <ol>
                                <li className="pad"><p className="card-text">สำเนาบัตรประชาชน</p></li>
                                <li className="pad"><p className="card-text">แสดงบัตรประชาชนตัวจริง</p></li>
                                <li className="pad"><p className="card-text">หลักประกัน</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div >
)
export default howtorent;