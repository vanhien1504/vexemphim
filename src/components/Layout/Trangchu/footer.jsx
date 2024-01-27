import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Footer = () => {
    return (
        <Container className="mt-16 flex flex-col bg-gray">
            <img
                className="w-full"
                src="https://cinestar.com.vn/catalog/view/theme/default/images/line-bg.png"
                alt="..."
            />
            <div className="footer-content">
                <div className="social flex gap-4">
                    <NavLink to="https://www.facebook.com" target="_blank">
                        <i className="fab fa-facebook"></i>
                    </NavLink>
                    <NavLink to="https://www.instagram.com" target="_blank">
                        <i className="fab fa-instagram"></i>
                    </NavLink>
                    <NavLink to="https://www.twitter.com" target="_blank">
                        <i className="fab fa-twitter"></i>
                    </NavLink>
                    <NavLink to="https://www.youtube.com" target="_blank">
                        <i className="fab fa-youtube"></i>
                    </NavLink>
                </div>
                <div className="mt-8 flex gap-16 info">
                    <div className="sm:w-1/2 md:w-1/4">
                        <p className="font-bold text-2xl">
                            <span className="text-primary">My</span>
                            MOVIE
                        </p>
                        <NavLink to="">Phim đang chiếu</NavLink>
                        <NavLink to="">Phim sắp chiếu</NavLink>
                        <NavLink to="">Lịch chiếu</NavLink>
                        <NavLink to="">Khuyến mãi</NavLink>
                    </div>
                    <div className="sm:w-1/2 md:w-1/4">
                        <p className="font-bold text-2xl">
                            <span>THÔNG TIN</span>
                        </p>
                        <NavLink to="">Giới thiệu</NavLink>
                        <NavLink to="">Tin tức</NavLink>
                        <NavLink to="">Hỏi đáp</NavLink>
                        <NavLink to="">Liên hệ</NavLink>
                    </div>
                    <div className="sm:w-1/2 md:w-1/4">
                        <p className="font-bold text-2xl">
                            <span>CHÍNH SÁCH VÀ QUY ĐỊNH</span>
                        </p>
                        <NavLink to="">Quy định chung</NavLink>
                        <NavLink to="">Điều khoản giao dịch</NavLink>
                        <NavLink to="">Chính sách bảo mật</NavLink>
                        <NavLink to="">Thông tin công ty</NavLink>
                    </div>
                    <div className="sm:w-1/2 md:w-1/4">
                        <p className="font-bold text-2xl">
                            <span>CHĂM SÓC KHÁCH HÀNG</span>
                        </p>
                        <p className="mt-4">Hotline: 1900 0000</p>
                        <p className="mt-4">Giờ làm việc: 8:00 - 22:00</p>
                        <p className="mt-4">Email hỗ trợ: cskh@gmail.com</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer;

const Container = styled.footer`
    .footer-content {
        max-width: 1140px;
        margin: auto;
        padding: 100px 40px;

        .social {
            font-size: 26px;
            color: #111;
            display: flex;
            gap: 30px;
            i {
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                &:hover {
                    color: #e50914;
                }
            }
        }

        .info {
            a {
                transition: all 0.3s ease-in-out;
                display: block;
                margin-top: 8px;
                margin-bottom: 8px;
                &:hover {
                    color: #e50914;
                    text-shadow: #e50914 0 0 1px;
                    font-weight: 600;
                }
            }
        }
    }
    @media (max-width: 768px) {
        padding: 80px 20px;

        .info {
            flex-direction: column;

            div {
                width: 100%;
                text-align: center;
                margin-bottom: 20px;
            }
        }
    }

    @media (max-width: 576px) {
        padding: 60px 10px;

        .info {
            .sm\\:w-1\\/2 {
                width: 100%;
            }
        }
    }
}


`