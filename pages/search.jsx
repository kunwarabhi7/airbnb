import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Search = () => {
 const router =  useRouter()
 const {location,startDate,endDate,numberOfGuest,} = router.query;
 console.log(router.query)
 const formatedStartDate = format(new Date(startDate),"dd MMMM yy ");
 const formatEndDate = format(new Date(endDate),"dd MMM yy");
 const range = `${formatedStartDate} - ${formatEndDate}`
 
  return (
    <div className="">
      <Header />
      <main>
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm text-gray-500">
            300+ Stays - {range} -  for {numberOfGuest} number of guests
          </p>
          <h1 className="text-2xl font-semibold">Stays in {location}</h1>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-6 mx-auto">
            <button className="button ">Cancellation Flexiblity</button>
            <button className="button ">Types of place</button>
            <button className="button">Price</button>
            <button className="button">Rooms and Beds</button>
            <button className="button">More fliters</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
