import React from "react";

import CardComponent from "./Card";
import { cards } from "./data";

const Services = () => {
  return (
    <div
      className="w-full md:w-11/12 lg:w-10/12 mx-auto my-24"
      style={{ maxWidth: "1400px" }}
    >
      <div className="my-20">
        <div className="flex justify-center">
          <span className="flex justify-end w-10 h-2 border-b-[8px] border-[#E74C3C]" />
        </div>
        <h1 className="text-5xl font-bold text-center py-4">SERVICES</h1>
        <div className="flex justify-center">
          <span className="flex justify-end w-10 h-2 border-b-[8px] border-[#E74C3C]" />
        </div>
      </div>
      {cards.map((card, index) => (
        <CardComponent
          key={index}
          description={card.description}
          icon={card.icon}
          image={card.image}
          isEven={index % 2 === 1} // Even cards will have the alternate layout
          title={card.title}
        />
      ))}
    </div>
  );
};

export default Services;
