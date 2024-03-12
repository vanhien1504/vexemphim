import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MovieDetails = ({ show, onHide, movie }) => {
    return (
        <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {movie.TenPhim}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="movie-details-container">
                    <img src={movie.Poster} alt={movie.TenPhim} style={{ width: '100%' }} />
                    <p><strong>Mô tả: </strong>{movie.MoTaPhim}</p>
                    <p><strong>Thể loại: </strong>{movie.TheLoaiPhim}</p>
                    <p><strong>Ngày phát hành: </strong>{new Date(movie.NgayPhatHanh).toLocaleDateString()}</p>
                    <p><strong>Thời lượng: </strong>{movie.ThoiLuongPhim}</p>
                    <p><strong>Đạo diễn: </strong>{movie.dienvien}</p> {/* Sửa 'dienvien' nếu có trường riêng cho đạo diễn */}
                    <p><strong>Ngôn ngữ: </strong>{movie.NgonNgu}</p>
                    <p><strong>Trạng thái: </strong>{movie.TrangThai}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Đóng</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MovieDetails;
