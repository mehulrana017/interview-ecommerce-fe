import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { DiscountData } from "../types";

export const useDiscount = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<DiscountData | null>(
    null
  );
  const [generatedDiscount, setGeneratedDiscount] =
    useState<DiscountData | null>(null);

  const applyDiscount = () => {
    if (generatedDiscount && discountCode === generatedDiscount.discountCode) {
      setAppliedDiscount(generatedDiscount);
      toast.success(
        `Discount of ${generatedDiscount.discountPercentage}% applied`
      );
    } else {
      setAppliedDiscount(null);
      toast.error("Invalid discount code");
    }
  };

  const requestDiscountCode = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/generate-discount"
      );
      if (res.status === 200 && res?.data?.success === true) {
        const discountData: DiscountData = res.data.discountCodeData;
        setGeneratedDiscount(discountData);
        toast.success("New discount code generated");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error requesting discount code:", error);
      toast.error("Failed to generate discount code");
    }
  };

  return {
    discountCode,
    setDiscountCode,
    appliedDiscount,
    generatedDiscount,
    applyDiscount,
    requestDiscountCode,
  };
};
