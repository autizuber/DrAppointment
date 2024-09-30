import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoc from "../Component/RelatedDoc";

const Appointment = () => {
  const { drId } = useParams(); // Use drId here
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSloat, setDocSloat] = useState([]);
  const [slotIndex, setSloatIndex] = useState(0);
  const [sloatTime, setSloatTime] = useState("");
  const naviget = useNavigate();

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const fetchDocInfo = () => {
    const doc = doctors.find((dr) => dr._id.toString() === drId); // Use drId for lookup
    if (!doc) {
      console.log("Doctor not found");
    } else {
      console.log("Found doctor:", doc); // Log the found doctor info
    }
    setDocInfo(doc);
  };

  const getAlivableSloat = async () => {
    setDocSloat([]);
    //gatting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //getting current date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting houres
      if (today.getDate() == currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSloats = [];

      while (currentDate < endTime) {
        let formatedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // add sloat to array ;
        timeSloats.push({
          datetime: new Date(currentDate),
          time: formatedTime,
        });

        // incriment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSloat((prev) => [...prev, timeSloats]);
    }
  };

  useEffect(() => {
    getAlivableSloat();
  }, [docInfo]);

  useEffect(() => {
    if (doctors.length > 0) {
      fetchDocInfo();
      console.log(docInfo);
    }
  }, [doctors, drId]); // Update dependency to drId

  useEffect(() => {
    console.log(docSloat);
  }, [docSloat]);

  return (
    docInfo && (
      <div className="py-9 md:overflow-x-hidden">
        <div className="md:flex gap-3">
          <div className="md:w-[20%]">
            <img
              className="md:w-full md:h-64 bg-blue-500 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="md:w-[80%]">
            <div className="border border-gray-600 w-full ] mt-5 md:mt-0 p-7 rounded-lg">
              <h1 className="flex gap-2 text-xl text-black font-semibold py-2">
                {docInfo.name}{" "}
                <img className="w-4" src={assets.verified_icon} alt="" />
              </h1>
              <p className="text-sm py-2 flex gap-2">
                <span>{docInfo.degree}</span> - {docInfo.speciality}{" "}
                <p className="border border-zinc-700 rounded-full px-3">
                  {docInfo.experience}
                </p>
              </p>
              <p className="flex gap-2 text-sm pb-1">
                About <img className="w-3" src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm pb-2">{docInfo.about}</p>
              <h1>Appointment Fee : ${docInfo.fees}</h1>
            </div>
            <div className="sm:pl-4 mt-4 font-medium text-gray-700">
              <p>Booking Slots</p>
              <div className="flex gap-3 items-center w-full  overflow-x-scroll md:overflow-hidden py-2 mt-4">
                {docSloat.length &&
                  docSloat.map((item, index) => (
                    <div
                      onClick={() => setSloatIndex(index)}
                      className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                        slotIndex === index
                          ? "bg-primary text-white"
                          : "border border-gray-200"
                      }`}
                      key={index}
                    >
                      <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                      <p>{item[0] && item[0].datetime.getDate()}</p>
                    </div>
                  ))}
              </div>
              <div className="flex gap-3 w-full overflow-x-scroll mt-4 py-3">
                {docSloat.length &&
                  docSloat[slotIndex].map((item, index) => (
                    <p
                      onClick={() => setSloatTime(item.time)}
                      key={index}
                      className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                        item.time === sloatTime
                          ? "bg-primary text-white"
                          : "text-gray-400 border border-zinc-500"
                      }`}
                    >
                      {item.time.toLowerCase()}
                    </p>
                  ))}
              </div>
            </div>
            <button
              className="mt-5 bg-primary text-white rounded-full px-5 py-3 btn hover:bg-primary"
              onClick={() => {
                naviget("/MyAppointment");
                scrollTo(0, 0);
              }}
            >
              Book an appointment
            </button>
          </div>
        </div>
        <div className="py-6">
          <RelatedDoc />
        </div>
      </div>
    )
  );
};

export default Appointment;
