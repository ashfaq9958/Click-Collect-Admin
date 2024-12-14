import React from "react";
import { CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

// Define interfaces
interface Order {
  backgroundColor: string;
  icon: string;
  productName: string;
  categories: string;
  price: string;
}

interface Customer {
  name: string;
  icon: string;
  item: string | number;
  cost: string | number;
}

interface RecentOrderProps {
  orders?: Order[]; // Optional for flexibility
  customers?: Customer[];
}

const RecentOrder: React.FC<RecentOrderProps> = ({ orders, customers }) => {
  return (
    <div className="rounded-[4px] shadow-sm bg-white w-[30%]">
      <CardHeader className="py-5 px-6 rounded-t-lg">
        <CardTitle className="text-base font-semibold text-gray-900 tracking-wide font-roboto">
          {orders ? "Recent Orders" : "Top Customers"}
        </CardTitle>
      </CardHeader>
      <hr />
      <div className="divide-y divide-gray-200">
        {orders
          ? orders.map((order, i) => (
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
                    <p className="font-semibold text-gray-800 font-roboto">
                      {order.productName}
                    </p>
                    <p className="text-[12px] text-gray-500 font-roboto">
                      {order.categories}
                    </p>
                  </div>
                </div>
                <div className="text-sm font-roboto">${order.price}</div>
              </CardDescription>
            ))
          : customers?.map((customer, i) => (
              <CardDescription
                key={i}
                className="flex items-center justify-between px-6 py-4 hover:bg-gray-100 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-[4px] w-12 h-12 flex justify-center items-center">
                    <Image
                      src={customer.icon}
                      alt={customer.name}
                      width={42}
                      height={42}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 flex items-center gap-1 font-roboto">
                      {customer.name}
                    </p>
                    <p className="text-[12px] text-gray-500 flex items-center gap-1 font-roboto">
                      {customer.item} Purchases
                      <BadgeCheck size={16} color="white" fill="#3d7ede" />
                    </p>
                  </div>
                </div>
                <div className="text-sm font-roboto">${customer.cost}</div>
              </CardDescription>
            ))}
      </div>
    </div>
  );
};

export default RecentOrder;
