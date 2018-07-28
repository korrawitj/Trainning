import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post">
        <div className="square">ไม่มีรูป</div>
        <br />
        <h5>{props.title}</h5>
        {/* <div className="Info">
            <div className="Author">{props.author}</div>
        </div> */}
        <button className="btn btn-outline-info btn-sm btn-block" onClick={props.clicked}>เลือกสินค้า</button>
    </article>
);

export default post;