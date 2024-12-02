import { OrderSummary as OrderSummaryType } from "@/app/types";

const OrderSummary = ({ summary }: { summary: OrderSummaryType }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Total Items:</p>
          <p className="font-semibold">{summary.totalItems}</p>
        </div>
        <div>
          <p className="text-gray-600">Total Purchase Amount:</p>
          <p className="font-semibold">
            ${summary.totalPurchaseAmount.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-gray-600">Total Discount Amount:</p>
          <p className="font-semibold">
            ${summary.totalDiscountAmount.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-gray-600">Net Total:</p>
          <p className="font-semibold">
            $
            {(
              summary.totalPurchaseAmount - summary.totalDiscountAmount
            ).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
