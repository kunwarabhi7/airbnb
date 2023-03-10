import Image from 'next/image';

const LargeCard = () => {
  return (
    <div className="relative w-full h-72 md:h-screen mx-auto mb-4">
      <Image
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl mb-36 md:text-6xl font-bold text-white">
            Welcome to my Website
          </h1>
        
          <a
            href="#"
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
