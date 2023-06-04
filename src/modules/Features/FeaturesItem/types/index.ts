import type React from "react";

export interface IFeaturesItemProps {
  feature: {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
  };
}
