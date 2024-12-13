import React from "react";
import { CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface Order {
  backgroundColor: string;
  icon: string | any; // Ensure the icon type is a valid image path
  productName: string;
  categories: string;
  price: string;
}

interface RecentOrderProps {
  orders: Order[]; // Array of order data
}

const RecentOrder: React.FC<RecentOrderProps> = ({ orders }) => {
  return (
    <div className="mt-9 rounded-[4px] shadow-sm bg-white w-96">
      {/* Card Header */}
      <CardHeader className="py-5 px-6 rounded-t-lg">
        <CardTitle className="text-base font-semibold">Recent Orders</CardTitle>
      </CardHeader>
      <hr />
      {/* Order List */}
      <div className="divide-y divide-gray-200">
        {orders.map((order, i) => (
          <CardDescription
            key={i}
            className="flex items-center justify-between px-6 py-4 hover:bg-gray-100 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div
                className="rounded-[4px] w-12 h-12 flex justify-center items-center"
                style={{ backgroundColor: order.backgroundColor }}
              >
                <Image
                  src={order.icon}
                  alt={order.productName}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{order.productName}</p>
                <p className="text-[12px] text-gray-500">{order.categories}</p>
              </div>
            </div>
            <div className="text-sm font-semibold">
              ${order.price}
            </div>
          </CardDescription>
        ))}
      </div>
    </div>
  );
};

export default RecentOrder;
