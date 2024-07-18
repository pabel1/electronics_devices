import React, { useState } from "react";

const CustomerForm = ({ errors, register }) => {
  const divisionsAndCities = {
    Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Tangail", "Faridpur"],
    Chattogram: ["Chattogram", "Cox's Bazar", "Cumilla", "Brahmanbaria", "Noakhali"],
    Rajshahi: ["Rajshahi", "Natore", "Bogra", "Pabna", "Sirajganj"],
    Khulna: ["Khulna", "Jessore", "Satkhira", "Bagerhat", "Kushtia"],
    Barishal: ["Barishal", "Bhola", "Patuakhali", "Pirojpur", "Jhalokati"],
    Sylhet: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
    Rangpur: ["Rangpur", "Dinajpur", "Kurigram", "Gaibandha", "Nilphamari"],
    Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"]
  };

  const [selectedDivision, setSelectedDivision] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const handleDivisionChange = (e) => {
    const division = e.target.value;
    setSelectedDivision(division);
    setFilteredCities(divisionsAndCities[division] || []);
  };

  return (
    <div>
      <div className="flex items-center gap-4 border-b p-4">
        <h1 className="h-8 w-8 p-1 text-center font-bold rounded-full bg-blue-200">
          1
        </h1>
        <h3 className="text-lg font-semibold">Customer Information</h3>
      </div>

      <div className="p-6">
        <div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className="mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-400 w-full"
              />
              {errors.firstName && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("lastName", { required: "Last Name is required" })}
                className="mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-400 w-full"
              />
              {errors.lastName && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("mobile", { required: "Mobile is required" })}
              className="mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-400 w-full"
            />
            {errors.mobile && (
              <p className="text-red-600 text-xs mt-1">
                {errors.mobile.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-400 w-full"
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Division <span className="text-red-500">*</span>
              </label>
              <select
                {...register("division", { required: "Division is required" })}
                value={selectedDivision}
                onChange={handleDivisionChange}
                className="mt-1 p-2 border rounded-md text-sm focus:outline-none focus:border-blue-400 w-full"
              >
                <option value="">Select Division</option>
                {Object.keys(divisionsAndCities).map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                ))}
              </select>
              {errors.division && (
                <p className="text-red-600 text-xs mt-1">{errors.division.message}</p>
              )}
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                City <span className="text-red-500">*</span>
              </label>
              <select
                {...register("city", { required: "City is required" })}
                className="mt-1 p-2 border rounded-md text-sm focus:outline-none focus:border-blue-400 w-full"
              >
                <option value="">Select City</option>
                {filteredCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className="text-red-600 text-xs mt-1">{errors.city.message}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("address", { required: "Address is required" })}
              className="mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-400 w-full"
            />
            {errors.address && (
              <p className="text-red-600 text-xs mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* <div className="">
            <label className="block text-sm font-medium text-gray-700">
              Comment
            </label>
            <textarea
              {...register("comment")}
              className="mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-400 w-full"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
