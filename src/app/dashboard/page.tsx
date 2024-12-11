import React from "react";
import Card from "../components/Card/Card";
import {
  ShoppingCart,
  ShoppingBag,
  MessageCircle,
  UserPlus,
  User,
  CircleDollarSign,
  Shirt,
  Scroll,
} from "lucide-react";

const Dashboard = () => {

  interface CardInfo {
    backgroundColor: string;
    icon: React.ReactNode; 
    iconColor: string;
    title: string;
    figure: string;
    rateTitle: string;
    ratePercentage: string;
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

  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 justify-between items-center gap-x-3 px-6 grid-cols-1">
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
  );
};

export default Dashboard;
