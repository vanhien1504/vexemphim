import React from 'react';
import './css/chitietmodal.css'
const ChiTietModal = ({ show, onClose, children }) => {
    // Lớp CSS bổ sung dựa trên trạng thái hiển thị của modal
    const modalClass = show ? "modal-content open" : "modal-content";

    return (
        <div className="modal-backdrop" style={{ display: show ? "flex" : "none" }}>
            <div className={modalClass}>
                <button onClick={onClose} className='close-btn' btn-primay-white>X</button>
                {children}
            </div>
        </div>
    );
};


export default ChiTietModal;
