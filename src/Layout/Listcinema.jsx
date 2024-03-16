import React from 'react';


const Listcinema = () => {
    return (
        <div className=" bg-slate-600">
            <h1 class=" text-4xl text-white  text-center mb-8">Hệ thống rạp</h1>

            <div class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div class=" rounded-lg shadow-md p-4">
                <img
                    className="w-full object-cover rounded-t "
                    src="/images/cinema.jpg"
                    alt=""
                />
                <p class="text-lg font-bold mb-2">Rạp 1</p>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded mt-2"
                  style={{ marginRight: '8px' }}
                >
                  Thông tin chi tiết

                </button>
            </div>
            <div class=" rounded-lg shadow-md p-4">
                <img
                    className="w-full object-cover rounded-t "
                    src="/images/cinema.jpg"
                    alt=""
                />
                                <p class="text-lg font-bold mb-2">Rạp 2</p>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded mt-2"
                  style={{ marginRight: '8px' }}
                >
                  Thông tin chi tiết

                </button>
            </div>
            <div class=" rounded-lg shadow-md p-4">
                <img
                    className="w-full object-cover rounded-t "
                    src="/images/cinema.jpg"
                    alt=""
                />
                     <p class="text-lg font-bold mb-2">Rạp 3</p>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded mt-2"
                  style={{ marginRight: '8px' }}
                >
                  Thông tin chi tiết

                </button>
            </div>
            <div class=" rounded-lg shadow-md p-4">
                <img
                    className="w-full object-cover rounded-t "
                    src="/images/cinema.jpg"
                    alt=""
                />
                <p class="text-lg font-bold mb-2">Rạp 4</p>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded mt-2"
                  style={{ marginRight: '8px' }}
                >
                  Thông tin chi tiết
                </button>
            </div>
        </div>
            </div>
        
    </div>
    );
  };
  
  export default Listcinema;