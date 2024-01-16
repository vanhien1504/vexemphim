import React from 'react'

const Header = () => {
  return (
    <div className="w-[1612px] h-[88px]  relative ">
    <div className="w-[1612px] h-[88px] left-0 top-0 relative bg-zinc-800 " />
    <ul className="">
      <li><a className="left-[1174px] top-[31px] absolute text-stone-50  text-[22px] font-semibold font-['Montserrat'] text-decoration-none" href="#">Đăng nhập</a></li>
      <li><a className="left-[1326px] top-[31px] absolute text-stone-50 text-[22px] font-semibold font-['Montserrat'] text-decoration-none" href="#">đăng kí</a></li>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor " className="h-10 absolute right-[456px] top-[26px] text-stone-50">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>


      <div className="left-[1309px] top-[31px] absolute text-stone-50 text-[22px] font-semibold font-['Montserrat']">/</div>
      <li><a className="left-[272px] top-[29px] absolute text-stone-50 text-[22px] font-semibold font-['Montserrat'] text-decoration-none" href="#">Lịch Chiếu</a></li>
      <li><a className="left-[453px] top-[29px] absolute text-stone-50 text-[22px] font-semibold font-['Montserrat'] text-decoration-none" href="#">Phim</a></li>
      <li><a className="left-[579px] top-[29px] absolute text-stone-50 text-[22px] font-semibold font-['Montserrat'] text-decoration-none" href="#">Rạp</a></li>
      <div className="w-[111px] h-[78px] left-[100px] top-[4px] absolute">
      <li><a className="left-[1px] top-0 absolute text-center text-stone-50 text-[46px] font-bold font-['Montserrat'] text-decoration-none" href="#">Lath</a></li>
      <li><a className="left-0 top-[44px] absolute text-center text-stone-50 text-[28px] font-medium font-['Montserrat'] text-decoration-none" href="#">Cinema</a></li>
      </div>
    </ul>
    
  </div>
  )
}

export default Header