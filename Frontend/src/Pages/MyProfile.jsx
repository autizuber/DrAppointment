import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [values, setValues] = useState({
    name: "Zuber Auti",
    email: "zuberauti279@gmail.com",
    phone: "+918446676067",
    adderss: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="max-w-lg flex flex-col text-sm py-10">
      <img className="w-36 rounded" src={assets.profile_pic} alt="" />

      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
          }
          value={values.name}
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {values.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />

      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-500">
          <p className="font-medium ">Email :</p>
          <p className="text-blue-500">{values.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={values.phone}
            />
          ) : (
            <p className="text-blue-400">{values.phone}</p>
          )}
          <p className="font-medium">Address :</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50"
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    adderss: { ...prev.adderss, line1: e.target.value },
                  }))
                }
                value={values.adderss.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-50"
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    adderss: { ...prev.adderss, line1: e.target.value },
                  }))
                }
                value={values.adderss.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {values.adderss.line1}
              <br />
              {values.adderss.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500  underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-3 text-neutral-700">
          <p className="font-medium">Gender :</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-50"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={values.gender}
            >
              <option value="Male">Male</option>
              <option value="Femal">Femal</option>
            </select>
          ) : (
            <p className="text-gray-400">{values.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={values.dob}
            />
          ) : (
            <p className="text-gray-400">{values.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(false)}
          >
            Save information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
