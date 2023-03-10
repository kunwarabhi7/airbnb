import React from 'react'
import Image from 'next/image';

const MdCircle = ({img , title ,id}) => {
    return (
        <div key={id} className="hover:scale-105 transform transition duration-300 ease-out">
          <div className="relative md:h-80 d:w-96 w-64 h-64 ">
            <Image
              src={img}
              fill
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold my-2 md:text-3xl">{title}</h1>
            {/* <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              urna vel nulla lobortis ultricies.
            </p>
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a> */}
          </div>
        </div>
      );
    };
export default MdCircle
