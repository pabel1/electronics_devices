import React from "react";

const DeliveryMethod = ({ register, errors }) => {
  const deliveryOptions = [
    { id: 1, label: "Home Delivery" },
    // { id: 2, label: "Store Pickup" },
  ];

  return (
    <div>
      <div className="flex items-center gap-4 border-b p-4">
        <h1 className="h-8 w-8 p-1 text-center font-bold rounded-full bg-blue-200">
          3
        </h1>
        <h3 className="text-lg font-semibold">Delivery Method</h3>
      </div>

      <div className="p-6">
        <h3 className="font-medium">Select a delivery method <span className="text-red-500">*</span></h3>
        <div className="mt-4 space-y-2">
          {deliveryOptions.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                type="radio"
                id={`delivery-method-${option.id}`}
                value={option.id}
                defaultChecked={option.id === 1}
                {...register("deliveryMethod", {
                  required: "Please select a delivery method",
                })}
                className="mr-2"
              />
              <label htmlFor={`delivery-method-${option.id}`} className="text-sm">
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {errors.deliveryMethod && (
          <p className="text-red-600 text-xs mt-2">
            {errors.deliveryMethod.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default DeliveryMethod;
