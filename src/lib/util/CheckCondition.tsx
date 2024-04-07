import React from "react";

interface CheckFileProps {
  children: React.ReactNode[];
  falseCondition: boolean;
}

const CheckCondition = ({ children, falseCondition }: CheckFileProps) => {
  if (falseCondition) return children[0];

  return <>{children[1]}</>;
};

export default CheckCondition;
