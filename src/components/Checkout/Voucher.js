import React, { useState } from "react";

const Voucher = ({ onApplyVoucher }) => {
  const [voucherCode, setVoucherCode] = useState("");

  const handleApply = () => {
    onApplyVoucher(voucherCode);
    setVoucherCode("");
  };

  return (
    <div>
      <div className="flex items-center gap-4 border-b p-4">
        <h3 className="text-lg font-semibold">Apply Voucher</h3>
      </div>
      <div className="p-6">
        <div className="flex items-center relative gap-4">
          <input
            type="text"
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
            className="p-2 border rounded-md flex-1 focus:outline-none focus:border-blue-400"
            placeholder="Voucher Code"
          />
          <button
            onClick={handleApply}
            className="bg-blue-500 absolute right-0 border border-blue-400 hover:bg-blue-600 text-white rounded-r-md px-4 py-2"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
