import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReservationForm from "./Form";

const Home = () => {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const item = await response.json();
        console.log(item);
        setShowData(item);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" bg-white  flex max-w-[1280px] mx-auto  mt-20 ">
      <div className=" flex flex-wrap justify-center  ">
        {showData.map((item) => {
          return (
            <div className=" opacity-80 hover:opacity-100 mb-20 w-full  md:w-1/3 lg:w-1/4 sm:m-8 " key={item.show.id}>
              <h1 className="font-semibold text-4xl mb-8"> {item.show.name} </h1>
              <div className="border-8 flex flex-col  justify-evenly  min-h-80 items-center bg-black cursor-pointer hover:scale-110">
                <div className="bg-black  w-[100%] h-full p-4 flex justify-center ">
                  {/* <img src={item.show.image.original} alt="Original" /> */}
                  {item.show.image && item.show.image.medium && (
                    <img src={item.show.image.medium} alt="medium" />
                  )}
                </div>
                <div className="  w-[100%] h-auto">
                  <p className=" p-4   "  dangerouslySetInnerHTML={{ __html: item.show.summary }} /> 

                  <div className="flex flex-col items-center  justify-evenly bg-white ">
                    <a
                      href={item.show.url}
                      className="bg-black text-white hover:bg-[#c5c3c3] hover:text-black p-4 rounded-full mt-4 "
                    >
                      Watch now ~ 📽
                    </a>
                    
                    {/* <Link to="/bookticket" className="bg-black text-white hover:bg-[#c5c3c3] hover:text-black p-4 rounded-full mt-4"> book now</Link> */}
                    <Link to={`/reservation/${encodeURIComponent(item.show.name)}`}   className="bg-black text-white hover:bg-[#c5c3c3] hover:text-black p-4 rounded-full mt-4">Book Now</Link>
                   { console.log(`${encodeURIComponent(item.show.name)}`)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
