const DiscountCodesList = ({ discountCodes }: { discountCodes: string[] }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Discount Codes Used</h2>
      {discountCodes.length > 0 ? (
        <ul className="bg-white shadow-md rounded-lg overflow-hidden">
          {discountCodes.map((code, index) => (
            <li key={index} className="px-4 py-2 border-b last:border-b-0">
              {code}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No discount codes have been used.</p>
      )}
    </div>
  );
};

export default DiscountCodesList;
