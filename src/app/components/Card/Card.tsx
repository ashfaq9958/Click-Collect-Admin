import React from "react";
import { CardHeader, CardDescription } from "@/components/ui/card";

// Define the types for props
interface CardProps {
  backgroundColor: string;
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  figure: string | number;
  rateTitle: string;
  ratePercentage: string;
}

const CardComponent: React.FC<CardProps> = ({
  backgroundColor,
  icon,
  iconColor,
  title,
  figure,
  rateTitle,
  ratePercentage,
}) => {
  return (
    <div className="mt-8 border rounded-[4px] shadow-sm bg-white">
      <CardHeader className="space-y-2">
        <div
          className="w-[70px] h-[70px] flex items-center justify-center rounded-[4px]"
          style={{ backgroundColor }}
        >
          <span
            className="p-2 rounded-[4px]"
            style={{ backgroundColor: iconColor }}
          >
            {icon}
          </span>
        </div>
        <CardDescription>{title}</CardDescription>
        <p className="text-xl font-semibold">{figure}</p>
        <p className="text-[12px]">
          {rateTitle}{" "}
          <span
            className={`font-medium ml-1 ${
              rateTitle === "Increased by" ? "text-green-500" : "text-red-500"
            }`}
          >
            {ratePercentage}
          </span>
        </p>
      </CardHeader>
    </div>
  );
};

export default CardComponent;
