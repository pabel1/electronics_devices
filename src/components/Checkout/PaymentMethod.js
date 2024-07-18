import React from "react";

const PaymentMethod = ({ register, errors }) => {
  const paymentOptions = [
    { id: 1, label: "Cash on Delivery" },
    // { id: 2, label: "Online Payment" },
    // { id: 3, label: "Bank Transfer" },
  ];

  return (
    <div>
      <div className="flex items-center gap-4 border-b p-4">
        <h1 className="h-8 w-8 p-1 text-center font-bold rounded-full bg-blue-200">
          2
        </h1>
        <h3 className="text-lg font-semibold">Payment Method</h3>
      </div>

      <div className="p-6">
        <h3 className="font-medium">Select a payment method <span className="text-red-500">*</span></h3>
        <div className="mt-4 space-y-2">
          {paymentOptions.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                type="radio"
                id={`payment-method-${option.id}`}
                value={option.id}
                defaultChecked={option.id === 1}
                {...register("paymentMethod", { required: "Please select a payment method" })}
                className="mr-2"
              />
              <label htmlFor={`payment-method-${option.id}`} className="text-sm">
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {errors.paymentMethod && (
          <p className="text-red-600 text-xs mt-2">
            {errors.paymentMethod.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;