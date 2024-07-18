import React, { useState, useEffect } from "react";

const OrderOverview = ({
  register,
  setValue,
  handleSubmit,
  onSubmit,
  handleCancel,
  voucherAmount,
  productName
}) => {
  const [quantity, setQuantity] = useState(1);
  const price = 2100.0;
  const shipping = 50.0;

  const subtotal = price * quantity;
  const total = subtotal + shipping - voucherAmount;

  useEffect(() => {
    setValue("quantity", quantity);
    setValue("total", total);
    setValue("productName", "Tablet Red EliteBook Revolve 810 G2");
    setValue("voucherAmount", voucherAmount);
  }, [quantity, total, setValue, voucherAmount]);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div>
      <div className="flex items-center gap-4 border-b p-4">
        <h1 className="h-8 w-8 p-1 text-center font-bold rounded-full bg-blue-200">
          4
        </h1>
        <h3 className="text-xl font-semibold">Order Overview</h3>
      </div>
      <div className="px-6 pt-6 pb-1">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left pb-6 text-lg font-semibold">Product</th>
              <th className="text-right pb-6 text-lg font-semibold">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pt-4">
                <h1 className="font-medium">
                  {productName}
                </h1>
                <div className="flex items-center my-2">
                  <button
                    onClick={handleDecrease}
                    className="h-6 w-6 flex items-center justify-center rounded border-2 font-bold border-red-400"
                  >
                    -
                  </button>
                  <span className="mx-4">{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="h-6 w-6 flex items-center justify-center rounded border-2 font-bold border-blue-400"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="text-right py-4">${subtotal.toFixed(2)}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-4 font-semibold">Subtotal</td>
              <td className="text-right py-4">${subtotal.toFixed(2)}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-4">
                <p className="font-semibold">Shipping</p>
              </td>
              <td className="text-right py-4">${shipping.toFixed(2)}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-4">
                <p className="font-semibold">Voucher</p>
              </td>
              <td className="text-right py-4">-${voucherAmount.toFixed(2)}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-4 font-bold text-xl">Total</td>
              <td className="text-right py-4 font-bold text-xl">
                ${total.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
        {/* Hidden inputs to store the form values */}
        <input type="hidden" {...register("quantity")} />
        <input type="hidden" {...register("total")} />
        <input type="hidden" {...register("productName")} />
        <input type="hidden" {...register("voucherAmount")} />
      </div>

      <div className="flex items-center justify-end gap-4 p-2">
        <button
          onClick={handleCancel}
          className="border opacity-90 hover:border-red-500 text-white rounded-md px-8 font-medium hover:bg-white hover:text-black bg-red-600 py-1.5"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit(onSubmit)}
          className="border opacity-90 hover:border-blue-500 text-white rounded-md px-8 font-medium hover:bg-white hover:text-black bg-blue-600 py-1.5"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OrderOverview;
