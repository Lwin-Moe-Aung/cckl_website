import React from 'react'

export const SimilerPost = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
    <div className="rounded-sm bg-white p-3 pb-5 shadow-sm">
        <a href="#" className="block rounded-md overflow-hidden">
            <img src="src/images/img-7.jpg"
                className="w-full h-40 object-cover transform hover:scale-110 transition duration-500"/>
        </a>
        <div className="mt-3">
            <a href="#">
                <h2
                    className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                    Lorem, ipsum dolor amet sit consec tetur elit.
                </h2>
            </a>
            <div className="mt-2 flex space-x-3">
                <div className="flex text-gray-400 text-xs items-center">
                    <span className="mr-1 text-xs">
                        <i className="far fa-user"></i>
                    </span>
                    Blogging Tips
                </div>
                <div className="flex text-gray-400 text-xs items-center">
                    <span className="mr-1 text-xs">
                        <i className="far fa-clock"></i>
                    </span>
                    June 11, 2021
                </div>
            </div>
        </div>
    </div>
    <div className="rounded-sm bg-white p-3 pb-5 shadow-sm">
        <a href="#" className="block rounded-md overflow-hidden">
            <img src="src/images/img-5.jpg"
                className="w-full h-40 object-cover transform hover:scale-110 transition duration-500"/>
        </a>
        <div className="mt-3">
            <a href="#">
                <h2
                    className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                    Lorem, ipsum dolor amet sit consec tetur elit.
                </h2>
            </a>
            <div className="mt-2 flex space-x-3">
                <div className="flex text-gray-400 text-xs items-center">
                    <span className="mr-1 text-xs">
                        <i className="far fa-user"></i>
                    </span>
                    Blogging Tips
                </div>
                <div className="flex text-gray-400 text-xs items-center">
                    <span className="mr-1 text-xs">
                        <i className="far fa-clock"></i>
                    </span>
                    June 11, 2021
                </div>
            </div>
        </div>
    </div>
    <div className="rounded-sm bg-white p-3 pb-5 shadow-sm hidden md:block">
        <a href="#" className="block rounded-md overflow-hidden">
            <img src="src/images/img-6.jpg"
                className="w-full h-40 object-cover transform hover:scale-110 transition duration-500"/>
        </a>
        <div className="mt-3">
            <a href="#">
                <h2
                    className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                    Lorem, ipsum dolor amet sit consec tetur elit.
                </h2>
            </a>
            <div className="mt-2 flex space-x-3">
                <div className="flex text-gray-400 text-xs items-center">
                    <span className="mr-1 text-xs">
                        <i className="far fa-user"></i>
                    </span>
                    Blogging Tips
                </div>
                <div className="flex text-gray-400 text-xs items-center">
                    <span className="mr-1 text-xs">
                        <i className="far fa-clock"></i>
                    </span>
                    June 11, 2021
                </div>
            </div>
        </div>
    </div>
</div>

  )
}
