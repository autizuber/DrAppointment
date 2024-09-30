// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../Context/AppContext";

// const Doctors = () => {
//   const { specility } = useParams();
//   console.log(specility);
//   const { doctors } = useContext(AppContext);
//   const [filterDr, setFilterDr] = useState([]);
//   const naviget = useNavigate();

//   const applyFilterDoctor = () => {
//     if (specility) {
//       setFilterDr(doctors.filter((doc) => doc.speciality === specility));
//     } else {
//       setFilterDr(Doctors);
//     }
//   };

//   useEffect(() => {
//     applyFilterDoctor();
//   }, [doctors, specility]);

//   return (
//     <div className="md:min-h-[80vh]">
//       <p className="text-black/75 font-semibold">
//         Browse through the doctors specialist
//       </p>
//       <div className="w-full md:flex py-5 ">
//         <div className="md:w-[20%] flex flex-row md:flex-col flex-wrap gap-3 py-3">
// <p className="px-3 md:px-0 w-full rounded-sm hover:bg-blue-50 cursor-pointer md:w-[80%] text-center ring-1 py-2 ring-zinc-600">
//   General physician
// </p>
// <p className="px-3 md:px-0 w-full rounded-sm hover:bg-blue-50 cursor-pointer md:w-[80%] text-center ring-1 py-2 ring-zinc-600">
//   Gynecologist
// </p>
// <p className="px-3 md:px-0 w-full rounded-sm hover:bg-blue-50 cursor-pointer md:w-[80%] text-center ring-1 py-2 ring-zinc-600">
//   Dermatologist
// </p>
// <p className="px-3 md:px-0 w-full rounded-sm hover:bg-blue-50 cursor-pointer md:w-[80%] text-center ring-1 py-2 ring-zinc-600">
//   Pediatricians
// </p>
// <p className="px-3 md:px-0 w-full rounded-sm hover:bg-blue-50 cursor-pointer md:w-[80%] text-center ring-1 py-2 ring-zinc-600">
//   Neurologist
// </p>
// <p className="px-3 md:px-0 w-full rounded-sm hover:bg-blue-50 cursor-pointer md:w-[80%] text-center ring-1 py-2 ring-zinc-600">
//   Gastroenterologist
// </p>
//         </div>
//         <div className="md:w-[80%] w-full grid grid-cols-auto py-5 gap-y-6 px-3 sm:px-0">
//           {filterDr.map((item, index) => (
//             <div
//               onClick={() => naviget(`/Appointment/${item._id}`)}
//               key={index}
//               className="card bg-base-100 md:w-48 shadow-lg ring-1 ring-blue-100 hover:translate-y-[-10px] transition-all duration-500"
//             >
//               <figure className="bg-blue-50">
//                 <img src={item.image} alt={item.name} />
//               </figure>
//               <div className="card-body md:px-3 ">
//                 <div className="text-success text-sm font-bold flex items-center justify-center">
//                   {" "}
//                   <p className="w-1 h-1 bg-success rounded-full"></p>{" "}
//                   <p className="w-full ml-2">Available</p>
//                 </div>
//                 <h2 className="card-title md:text-sm text-gray-700">
//                   {item.name}
//                 </h2>
//                 <p className="md:text-sm">{item.speciality}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Doctors = () => {
  const { specility } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDr, setFilterDr] = useState([]);
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);

  const applyFilterDoctor = () => {
    if (specility) {
      setFilterDr(doctors.filter((doc) => doc.speciality === specility));
    } else {
      setFilterDr(doctors);
    }
  };

  useEffect(() => {
    applyFilterDoctor();
  }, [doctors, specility]);

  return (
    <div className="md:min-h-[80vh]">
      <p className="text-black/75 font-semibold">
        Browse through the doctors specialist
      </p>
      <div className="w-full md:flex py-5">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className={`md:hidden text-sm  px-4 py-2 border border-zinc-400 rounded ${
            showFilter ? "text-white bg-primary" : ""
          }`}
        >
          Filter
        </button>
        <div
          className={`md:w-[20%] flex-row md:flex-col flex-wrap gap-3 py-3 transition-all ${
            showFilter ? "flex" : "hidden md:flex"
          }`}
        >
          <p
            onClick={() =>
              specility === "General physician"
                ? navigate("/Doctor")
                : navigate("/Doctor/General physician")
            }
            className={`px-3 md:px-0 w-full rounded-sm hover:bg-blue-50 cursor-pointer md:w-[80%] text-center border border-zinc-300 transition-all  py-2 ${
              specility === "General physician"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              specility === "Gynecologist"
                ? navigate("/Doctor")
                : navigate("/Doctor/Gynecologist")
            }
            className={`px-3 md:px-0 w-full rounded-sm hover:bg-blue-50 cursor-pointer md:w-[80%] text-center border border-zinc-300 transition-all  py-2 ${
              specility === "Gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              specility === "Dermatologist"
                ? navigate("/Doctor")
                : navigate("/Doctor/Dermatologist")
            }
            className={`px-3 md:px-0 w-full rounded-sm hover:bg-blue-50 cursor-pointer md:w-[80%] text-center border border-zinc-300 transition-all  py-2  ${
              specility === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              specility === "Pediatricians"
                ? navigate("/Doctor")
                : navigate("/Doctor/Pediatricians")
            }
            className={`px-3 md:px-0 w-full rounded-sm hover:bg-blue-50 cursor-pointer md:w-[80%] text-center border border-zinc-300 transition-all  py-2  ${
              specility === "Pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              specility === "Neurologist"
                ? navigate("/Doctor")
                : navigate("/Doctor/Neurologist")
            }
            className={`px-3 md:px-0 w-full rounded-sm hover:bg-blue-50 cursor-pointer md:w-[80%] text-center border border-zinc-300 transition-all  py-2  ${
              specility === "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              specility === " Gastroenterologist"
                ? navigate("/Doctor")
                : navigate("/Doctor/ Gastroenterologist")
            }
            className={`px-3 md:px-0 w-full rounded-sm hover:bg-blue-50 cursor-pointer md:w-[80%] text-center border border-zinc-300 transition-all  py-2  ${
              specility === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="md:w-[80%] w-full grid grid-cols-auto py-5 gap-y-6 px-3 sm:px-0">
          {filterDr.length === 0 ? (
            <p>No doctors found for this specialty.</p>
          ) : (
            filterDr.map((item, index) => (
              <div
                onClick={() => navigate(`/Appointment/${item._id}`)}
                key={index}
                className="card bg-base-100 md:w-48 shadow-lg ring-1 ring-blue-100 hover:translate-y-[-10px] transition-all duration-500 z-0"
              >
                <figure className="bg-blue-50">
                  <img src={item.image} alt={item.name} />
                </figure>
                <div className="card-body md:px-3">
                  <div className="text-success text-sm font-bold flex items-center justify-center">
                    <p className="w-1 h-1 bg-success rounded-full"></p>
                    <p className="w-full ml-2">Available</p>
                  </div>
                  <h2 className="card-title md:text-sm text-gray-700">
                    {item.name}
                  </h2>
                  <p className="md:text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
