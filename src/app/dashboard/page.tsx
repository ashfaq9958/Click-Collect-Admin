"use client";
import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import Card from "../components/Card/Card";
import mobile from "../../assets/technology.png";
import headphone from "../../assets/headphone.png";
import stopwatch from "../../assets/stopwatch.png";
import Camera from "../../assets/camera.png";
import shoes from "../../assets/baby-shoes.png";
import {
  ShoppingCart,
  ShoppingBag,
  User,
  CircleDollarSign,
  Shirt,
  Scroll,
  ChevronsRight,
} from "lucide-react";
import RecentOrder from "../components/RecentOrderCard/RecentOrder";
import SalesChart from "../components/BarChart/SalesChart";

const Dashboard = () => {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!router) return; // Ensure router exists
    setCurrentPath(window.location.pathname); // Fallback for path
  }, [router]);

  interface CardInfo {
    backgroundColor: string;
    icon: React.ReactNode;
    iconColor: string;
    title: string;
    figure: string;
    rateTitle: string;
    ratePercentage: string;
  }
  interface RecentOrderdata {
    backgroundColor: string;
    icon: StaticImageData;
    productName: string;
    categories: string;
    price: string;
  }
  const cardData: CardInfo[] = [
    {
      backgroundColor: "#dee0fb",
      icon: <ShoppingCart size={18} color="white" />,
      iconColor: "#5D65DF",
      title: "Total Orders",
      figure: "14,732",
      rateTitle: "Increased by",
      ratePercentage: "+12.5%",
    },
    {
      backgroundColor: "#e2edfd",
      icon: <ShoppingBag size={18} color="white" />,
      iconColor: "#70a3f3",
      title: "Total Sales",
      figure: "10,500",
      rateTitle: "Decreased by",
      ratePercentage: "-1.41%",
    },
    {
      backgroundColor: "#f9dcdf",
      icon: <User size={18} color="white" />,
      iconColor: "#e14f61",
      title: "Total Visitors",
      figure: "1,29,368",
      rateTitle: "Decreased by",
      ratePercentage: "-7.6%",
    },
    {
      backgroundColor: "#f9f0d8",
      icon: <CircleDollarSign size={18} color="white" />,
      iconColor: "#e2b53e",
      title: "Total Income",
      figure: "$69,270",
      rateTitle: "Increased by",
      ratePercentage: "+2.58%",
    },
    {
      backgroundColor: "#dde3f4",
      icon: <Scroll size={18} color="white" />,
      iconColor: "#5574c9",
      title: "Total Expenses",
      figure: "$21,520",
      rateTitle: "Decreased by",
      ratePercentage: "-14.9%",
    },
    {
      backgroundColor: "#dff3e1",
      icon: <Shirt size={18} color="white" />,
      iconColor: "#5ec269",
      title: "Total Products",
      figure: "45,280",
      rateTitle: "Increased by",
      ratePercentage: "+1.31%",
    },
  ];

  const recentOrderData: RecentOrderdata[] = [
    {
      backgroundColor: "#d2cec9",
      icon: mobile,
      productName: "Smart Phone",
      categories: "Electronics",
      price: "199.99",
    },
    {
      backgroundColor: "#d3b1bd",
      icon: shoes,
      productName: "Kids Shoes",
      categories: "Footwear",
      price: "149.29",
    },
    {
      backgroundColor: "#e2edfd",
      icon: Camera,
      productName: "Canon Camera",
      categories: "Electronics",
      price: "1,699",
    },
    {
      backgroundColor: "#f9dcdf",
      icon: headphone,
      productName: "Red Headphone",
      categories: "Electronics",
      price: "79.49",
    },
    {
      backgroundColor: "#e2edfd",
      icon: stopwatch,
      productName: "Stop watch",
      categories: "Electronics",
      price: "49.29",
    },
    
  ];

  return (
    <div className="p-6">
      <div className="mt-2 -mb-3 flex items-center gap-2 text-gray-700 text-lg font-medium">
        <span className="text-sm">Home</span>
        <ChevronsRight size={12} className="text-gray-400" />
        <span className="text-sm text-blue-600">Dashboard</span>
      </div>

      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-x-3 grid-cols-1">
        {cardData.map((data, index) => (
          <Card
            key={index}
            backgroundColor={data.backgroundColor}
            icon={data.icon}
            iconColor={data.iconColor}
            title={data.title}
            figure={data.figure}
            rateTitle={data.rateTitle}
            ratePercentage={data.ratePercentage}
          />
        ))}
      </div>
      <div className="flex gap-4 mt-9">
        <RecentOrder orders={recentOrderData} />
        <SalesChart />
      </div>
    </div>
  );
};

export default Dashboard;
