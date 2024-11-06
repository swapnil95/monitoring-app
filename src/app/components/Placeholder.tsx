import React from "react";

type TPlaceholderProps = {
  repeat?: number
}

const PlaceholderRow = () => <div className="w-full bg-current opacity-50 mb-4" />

export const Placeholder = ({ repeat = 1 }: TPlaceholderProps) => {
  return (
    <div className="animate-pulse">
      {Array.from({ length: repeat }).map((_, index) => (
        <PlaceholderRow key={index} />
      ))}
    </div>
  );
};
