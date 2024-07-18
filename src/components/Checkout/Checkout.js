"use client";

import React, { useState } from "react";
import CustomerForm from "./CustomerForm";
import PaymentMethod from "./PaymentMethod";
import DeliveryMethod from "./DeliveryMethod";
import OrderOverview from "./OrderOverview";
import Voucher from "./Voucher";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { removeSlug } from "../GenerateSlug/GenerateSlug";
import { submitForm } from "@/app/api/checkout/route";

const Checkout = () => {
  const [voucherAmount, setVoucherAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { productName } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useRouter()

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formattedData = {
        "First Name": data.firstName,
        "Last Name": data.lastName,
        Mobile: data.mobile,
        Email: data.email,
        Division: data.division,
        City: data.city,
        Address: data.address,
        "Delivery Method":
          data.deliveryMethod === "1" ? "Home Delivery" : "Store Pickup",
        "Payment Method": "Cash on Delivery",
        "Product Name": data.productName,
        Quantity: data.quantity.toString(),
        Total: data.total.toString(),
        "Voucher Amount": data.voucherAmount.toString(),
      };

      console.log("Formatted Data", formattedData);

      const response = await submitForm(formattedData);
      console.log(response);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred while submitting the form. Please try again.");
    } finally {
      setLoading(false);

    }
  };

  const handleCancel = () => {
    navigate.push("/");
  };

  const handleApplyVoucher = (code) => {
    if (code === "DISCOUNT50") {
      setVoucherAmount(50);
    } else {
      alert("Invalid voucher code");
    }
  };

  return (
    <div className="py-8 max-w-[1500px] lg:mx-auto lg:px-[50px] lg:bg-gray-50 md:mx-5 mx-[10px]">
      <div className="relative flex items-center lg:mt-0 pb-3">
        <h1 className="text-4xl font-light">Checkout</h1>
        <div className="absolute -bottom-0.5 border-b-4 w-[20vw] lg:w-[5vw] border-blue-600"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 my-8">
        <div className="lg:col-span-4 grid grid-cols-1 lg:grid-cols-2 gap-2">
          {/* Form */}
          <div className="bg-white rounded-md h-fit">
            <CustomerForm errors={errors} register={register} />
          </div>

          {/* Methods */}
          <div className="col-span-1 flex flex-col gap-2 h-fit">
            {/* Payment Method */}
            <div className="bg-white rounded-md">
              <PaymentMethod register={register} errors={errors} />
            </div>

            {/* Delivery Method */}
            <div className="bg-white rounded-md">
              <DeliveryMethod register={register} errors={errors} />
            </div>

            {/* Voucher */}
            <div className="bg-white rounded-md">
              <Voucher onApplyVoucher={handleApplyVoucher} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4 rounded-md h-fit">
          {/* Order Overview */}
          <div className="bg-white rounded-md">
            <OrderOverview
              register={register}
              errors={errors}
              setValue={setValue}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              handleCancel={handleCancel}
              voucherAmount={voucherAmount}
              productName={removeSlug(productName)}
            />
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-50">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
