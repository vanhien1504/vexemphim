import React from 'react'
import Header from '../components/Layout/Trangchu/Header'

const Detailrap = () => {
 return (
    <div className=" bg-neutral-600 text-stone-50">
        <div className="container mx-auto  ">
            <p className="text-center font-bold ">BHD Star → Rạp phim → Hà Nội → BHD Star The Garden</p>
            <h2 className=" text-center font-bold text-stone-50 my-4" center>Hệ Thống Rạp</h2>
            <div className="content d-flex row">
            <div className="content-left border-2 border-stone-50 rounded col-8 mx-4">
                <h1 className=" my-4">BHD STAR LE VAN VIET</h1>
                <div className="content1 ">
                    <h2>BHD STAR LÊ VĂN VIỆT</h2>
                </div>
                <div className="text-content text-[100%]">
                    <ul>
                        <li>Địa điểm: Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM</li>
                        <li>Số điện thoại: 1900 2099 hoặc gọi 028 3736 7070</li>
                        <li>Email: cskh@bhdstar.vn</li>
                        <li>Phòng chiếu: 6 Phòng chiếu 2D & 3D</li>
                    </ul>
                    <div className="">
                        <img src="images/bangve.jpg" alt="" className="w-[100%] py-4" />
                        <img src="images/giave.jpg" alt="" className="w-[100%] py-4" />
                        <img src="images/banggiavefirst.jpg" alt="" className="w-[100%] py-4" />
                    </div>

                    <p><strong>CÁC QUY ĐỊNH GIÁ VÉ</strong></p>
                    <p>– Giá vé trẻ em áp dụng cho trẻ em có chiều cao dưới 1,3m. Yêu cầu trẻ em có mặt khi mua vé. Trẻ em dưới 0,7m sẽ được miễn phí vé khi mua cùng 01 vé người lớn đi kèm theo. Không áp dụng kèm với chương trình khuyến mãi ưu đãi về giá vé khác.<br></br>
                    – Giá vé thành viên U22 chỉ áp dụng cho thành viên dưới 22 tuổi khi mua vé. Không áp dụng kèm với chương trình khuyến mãi ưu đãi về giá vé khác. Mỗi thẻ thành viên U22 được áp dụng giá vé ưu đãi tối đa 02 vé/ngày.
                    <br></br>
                    – Ngày lễ: 1/1, Giổ Tổ Hùng Vương 10/3 Âm Lịch, 30/4, 1/5, 02 Ngày Lễ Quốc Khánh
                    <br></br>
                    – Giá vé Tết Âm Lịch sẽ được áp dụng riêng.
                    <br></br>
                    – Suất chiếu đặc biệt áp dụng giá vé theo khung giờ của ngày. Không áp dụng các giá vé ưu đãi dành cho U22, Privilege Voucher/Staff Voucher, Happy Day. Trong trường hợp Suất chiếu đặc biệt cùng ngày với Happy Day sẽ áp dụng giá vé của Thứ 3
                    </p>
                </div>
                
            </div>
            <div className="content-right  border-2 border-stone-50 rounded col-3 mx-4 mb-[135%]">
                   <aside classname="widget mt-list-widget border-stone-50">
                    <h3 className="my-4 text-center">Địa điểm khác</h3>
                    <ul>
                        <li classname="current-menu-item text-[100%]">
                        <a className="no-underline" href="" title="BHD Star The Garden"> BHD Star The Garden </a>
                        </li>
                        <li classname>
                        <a className="no-underline" href="" title="BHD Star Le Van Viet"> BHD Star Le Van Viet </a>
                        </li>
                        <li classname>
                        <a className="no-underline" href="" title="BHD Star Pham Ngoc Thach"> BHD Star Pham Ngoc Thach </a>
                        </li>
                        <li classname>
                        <a className="no-underline" href="" title="BHD Star Long Khanh"> BHD Star Long Khanh </a>
                        </li>
                        <li classname>
                        <a className="no-underline" href="" title="BHD Star Pham Hung"> BHD Star Pham Hung </a>
                        </li>
                        <li classname>
                        <a className="no-underline" href="" title="BHD Star Quang Trung"> BHD Star Quang Trung </a>
                        </li>
                        <li classname>
                        <a className="no-underline" href="" title="BHD Star Thao Dien"> BHD Star Thao Dien </a>
                        </li>
                        <li classname>
                        <a className="no-underline" href="" title="BHD Star Hue"> BHD Star Hue </a>
                        </li>
                        <li classname>
                        <a className="no-underline " href="" title="BHD Star Discovery"> BHD Star Discovery </a>
                        </li>
                        <li classname>
                        <a className="no-underline border-stone-50" href="" title="BHD Star 3.2"> BHD Star 3.2 </a>
                        </li>
                    </ul>
                    </aside>

            </div>
            </div>
        </div>
    </div>
 
 )
}

export default Detailrap