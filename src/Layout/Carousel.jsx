import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
  
    return (
      <Slider {...settings}>
<div id="carouselExample" className="carousel slide relative">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/cau.jpg" className="d-block w-[1512px] h-[840px]" alt="..." />
      <div className="text-stone-50 text-[46px] absolute font-semibold font-['Montserrat']">Tên Phim</div>
    </div>
    <div className="carousel-item">
      <img src="/cau.jpg" className="d-block w-[1512px] h-[840px]" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/cau.jpg" className="d-block w-[1512px] h-[840px]" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="w-[1512px] h-[5077px] relative bg-neutral-600">
    <div id="carouselExampleIndicators" className="carousel slide relative">
    <div className="carousel-indicators ">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner relative">
        <div className="carousel-item active ">
        <img src="/mai.jpg" className="d-block w-[1512px] h-[840px] bg-zinc-500" alt="..." />
    <div className="w-[200px] h-[46px] left-[100px] top-[634px] absolute bg-stone-50 rounded-[5px]">
      <div className="left-[26px] top-[10px] absolute text-zinc-800 text-[22px] font-semibold font-['Montserrat']">Mua Vé Ngay</div>
    </div>
    <div className="w-[311px] h-[46px] left-[324px] top-[634px] absolute bg-zinc-500 rounded-[5px] border border-zinc-800">
      <div className="left-[52px] top-[10px] absolute text-stone-50 text-[22px] font-semibold font-['Montserrat']">Thông Tin Chi Tiết</div>
    </div>
    <div className="left-[98px] top-[548px] absolute text-stone-50 text-[46px] font-semibold font-['Montserrat']">Tên Phim</div>
        </div>
        <div className="carousel-item">
        <img src="/cau.jpg" className="d-block w-[1512px] h-[840px] bg-zinc-500" alt="..." />
    <div className="w-[200px] h-[46px] left-[100px] top-[634px] absolute bg-stone-50 rounded-[5px]">
      <div className="left-[26px] top-[10px] absolute text-zinc-800 text-[22px] font-semibold font-['Montserrat']">Mua Vé Ngay</div>
    </div>
    <div className="w-[311px] h-[46px] left-[324px] top-[634px] absolute bg-zinc-500 rounded-[5px] border border-zinc-800">
      <div className="left-[52px] top-[10px] absolute text-stone-50 text-[22px] font-semibold font-['Montserrat']">Thông Tin Chi Tiết</div>
    </div>
    <div className="left-[98px] top-[548px] absolute text-stone-50 text-[46px] font-semibold font-['Montserrat']">Tên Phim</div>
        </div>
        <div className="carousel-item">
        <img src="/won.jpg" className="d-block w-[1512px] h-[840px] bg-zinc-500" alt="..." />
    <div className="w-[200px] h-[46px] left-[100px] top-[634px] absolute bg-stone-50 rounded-[5px]">
      <div className="left-[26px] top-[10px] absolute text-zinc-800 text-[22px] font-semibold font-['Montserrat']">Mua Vé Ngay</div>
    </div>
    <div className="w-[311px] h-[46px] left-[324px] top-[634px] absolute bg-zinc-500 rounded-[5px] border border-zinc-800">
      <div className="left-[52px] top-[10px] absolute text-stone-50 text-[22px] font-semibold font-['Montserrat']">Thông Tin Chi Tiết</div>
    </div>
    <div className="left-[98px] top-[548px] absolute text-stone-50 text-[46px] font-semibold font-['Montserrat']">Tên Phim</div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
    </button>
    </div>


{/* ------------------------------------------------------------------------------------------------------ */}

    {/* <div className="w-[1316px] h-[772px] relative mx-auto my-3">
        <div className="left-[451px] top-0 absolute text-stone-50 text-[46px] font-semibold font-['Montserrat']">Phim Đang Chiếu</div>
        <div className="w-[313px] h-[624px] left-[4px] top-[76px] absolute">
            <div className="w-[313px] h-[448px] left-0 top-0 absolute bg-zinc-500 rounded-[10px]">
            <div className="left-[115px] top-[76px] absolute text-stone-50 text-[46px] font-semibold font-['Montserrat']">img</div>
            </div>
            <div className="left-0 top-[459px] absolute text-stone-50 text-[22px] font-semibold font-['Montserrat']">Tên Phim</div>
            <div className="left-0 top-[536px] absolute text-stone-50 text-base font-medium font-['Montserrat']">Thể loại phim: Hàng động</div>
            <div className="w-16 h-6 left-0 top-[504px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[8px] top-[2px] absolute text-zinc-800 text-base font-medium font-['Montserrat']">PG-13</div>
            </div>
            <div className="w-10 h-6 left-[72px] top-[504px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[8px] top-[2px] absolute text-zinc-800 text-base font-medium font-['Montserrat']">3D</div>
            </div>
            <div className="w-20 h-6 left-[120px] top-[504px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[8px] top-[2px] absolute text-zinc-800 text-base font-medium font-['Montserrat']">Phụ Đề</div>
            </div>
            <div className="w-[184px] h-10 left-0 top-[584px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[21px] top-[7px] absolute text-stone-50 text-[22px] font-medium font-['Montserrat']">Xem Chi Tiết</div>
            </div>
            <div className="w-[120px] h-10 left-[193px] top-[584px] absolute bg-stone-50 rounded-[5px] border border-zinc-800">
            <div className="left-[18px] top-[7px] absolute text-zinc-800 text-[22px] font-medium font-['Montserrat']">Mua Vé</div>
            </div>
        </div>
        <div className="w-[313px] h-[624px] left-[337px] top-[76px] absolute">
            <div className="w-[313px] h-[448px] left-0 top-0 absolute bg-zinc-500 rounded-[10px]">
            <div className="left-[115px] top-[76px] absolute text-stone-50 text-[46px] font-semibold font-['Montserrat']">img</div>
            </div>
            <div className="left-0 top-[459px] absolute text-stone-50 text-[22px] font-semibold font-['Montserrat']">Tên Phim</div>
            <div className="left-0 top-[536px] absolute text-stone-50 text-base font-medium font-['Montserrat']">Thể loại phim: Hàng động</div>
            <div className="w-16 h-6 left-0 top-[504px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[8px] top-[2px] absolute text-zinc-800 text-base font-medium font-['Montserrat']">PG-13</div>
            </div>
            <div className="w-10 h-6 left-[72px] top-[504px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[8px] top-[2px] absolute text-zinc-800 text-base font-medium font-['Montserrat']">3D</div>
            </div>
            <div className="w-20 h-6 left-[120px] top-[504px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[8px] top-[2px] absolute text-zinc-800 text-base font-medium font-['Montserrat']">Phụ Đề</div>
            </div>
            <div className="w-[184px] h-10 left-0 top-[584px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[21px] top-[7px] absolute text-stone-50 text-[22px] font-medium font-['Montserrat']">Xem Chi Tiết</div>
            </div>
            <div className="w-[120px] h-10 left-[193px] top-[584px] absolute bg-stone-50 rounded-[5px] border border-zinc-800">
            <div className="left-[18px] top-[7px] absolute text-zinc-800 text-[22px] font-medium font-['Montserrat']">Mua Vé</div>
            </div>
        </div>
        <div className="w-[313px] h-[624px] left-[670px] top-[76px] absolute">
            <div className="w-[313px] h-[448px] left-0 top-0 absolute bg-zinc-500 rounded-[10px]">
            <div className="left-[115px] top-[76px] absolute text-stone-50 text-[46px] font-semibold font-['Montserrat']">img</div>
            </div>
            <div className="left-0 top-[459px] absolute text-stone-50 text-[22px] font-semibold font-['Montserrat']">Tên Phim</div>
            <div className="left-0 top-[536px] absolute text-stone-50 text-base font-medium font-['Montserrat']">Thể loại phim: Hàng động</div>
            <div className="w-16 h-6 left-0 top-[504px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[8px] top-[2px] absolute text-zinc-800 text-base font-medium font-['Montserrat']">PG-13</div>
            </div>
            <div className="w-10 h-6 left-[72px] top-[504px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[8px] top-[2px] absolute text-zinc-800 text-base font-medium font-['Montserrat']">3D</div>
            </div>
            <div className="w-20 h-6 left-[120px] top-[504px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[8px] top-[2px] absolute text-zinc-800 text-base font-medium font-['Montserrat']">Phụ Đề</div>
            </div>
            <div className="w-[184px] h-10 left-0 top-[584px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[21px] top-[7px] absolute text-stone-50 text-[22px] font-medium font-['Montserrat']">Xem Chi Tiết</div>
            </div>
            <div className="w-[120px] h-10 left-[193px] top-[584px] absolute bg-stone-50 rounded-[5px] border border-zinc-800">
            <div className="left-[18px] top-[7px] absolute text-zinc-800 text-[22px] font-medium font-['Montserrat']">Mua Vé</div>
            </div>
        </div>
        <div className="w-[313px] h-[624px] left-[1003px] top-[76px] absolute">
            <div className="w-[313px] h-[448px] left-0 top-0 absolute bg-zinc-500 rounded-[10px]">
            <div className="left-[115px] top-[76px] absolute text-stone-50 text-[46px] font-semibold font-['Montserrat']">img</div>
            </div>
            <div className="left-0 top-[459px] absolute text-stone-50 text-[22px] font-semibold font-['Montserrat']">Tên Phim</div>
            <div className="left-0 top-[536px] absolute text-stone-50 text-base font-medium font-['Montserrat']">Thể loại phim: Hàng động</div>
            <div className="w-16 h-6 left-0 top-[504px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[8px] top-[2px] absolute text-zinc-800 text-base font-medium font-['Montserrat']">PG-13</div>
            </div>
            <div className="w-10 h-6 left-[72px] top-[504px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[8px] top-[2px] absolute text-zinc-800 text-base font-medium font-['Montserrat']">3D</div>
            </div>
            <div className="w-20 h-6 left-[120px] top-[504px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[8px] top-[2px] absolute text-zinc-800 text-base font-medium font-['Montserrat']">Phụ Đề</div>
            </div>
            <div className="w-[184px] h-10 left-0 top-[584px] absolute bg-zinc-500 rounded-[5px]">
            <div className="left-[21px] top-[7px] absolute text-stone-50 text-[22px] font-medium font-['Montserrat']">Xem Chi Tiết</div>
            </div>
            <div className="w-[120px] h-10 left-[193px] top-[584px] absolute bg-stone-50 rounded-[5px] border border-zinc-800">
            <div className="left-[18px] top-[7px] absolute text-zinc-800 text-[22px] font-medium font-['Montserrat']">Mua Vé</div>
            </div>
        </div>
        <div className="w-[464px] h-4 left-[428px] top-[756px] absolute">
            <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-800 rounded-full" />
            <div className="w-4 h-4 left-[112px] top-0 absolute bg-zinc-500 rounded-full" />
            <div className="w-4 h-4 left-[56px] top-0 absolute bg-zinc-500 rounded-full" />
            <div className="w-4 h-4 left-[224px] top-0 absolute bg-zinc-500 rounded-full" />
            <div className="w-4 h-4 left-[168px] top-0 absolute bg-zinc-500 rounded-full" />
            <div className="w-4 h-4 left-[336px] top-0 absolute bg-zinc-500 rounded-full" />
            <div className="w-4 h-4 left-[280px] top-0 absolute bg-zinc-500 rounded-full" />
            <div className="w-4 h-4 left-[448px] top-0 absolute bg-zinc-500 rounded-full" />
            <div className="w-4 h-4 left-[392px] top-0 absolute bg-zinc-500 rounded-full" />
        </div>
    </div> */}
{/* --------------------------------------------------------------------------------------------------- */}

    <div className="w-[1512px] h-[506px] relative bg-zinc-500">
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="/cau.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src="/mai.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src="/won.jpg" className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>


</div>

      </Slider>
    );
  };
  
  export default Carousel;