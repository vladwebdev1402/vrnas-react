import { IPricingPlan } from "@/types/IPricingPlan";

export const pricing: IPricingPlan[] = [
  {
    id: 0,
    name: "Basic Plan",
    price: 99,
    description: "All the basic features to boost your freelance career",
    options: [
      { name: "Access to a selection of VR games and experiences" },
      { name: "Limited access to educational content" },
      { name: "Limited access to architecture and design tools" },
      { name: "No access to exclusive events or promotions" },
    ],
  },
  {
    id: 1,
    name: "Standard Plan",
    price: 149,
    description:
      "Additional features to all the basic features to boost your freelance career.",
    options: [
      { name: "Access to a selection of VR games and experiences" },
      { name: "Not limited access to educational content" },
      { name: "Limited access to architecture and design tools" },
      { name: "Access to exclusive events and promotions" },
    ],
  },
  {
    id: 2,
    name: "Premium Plan",
    price: 200,
    description:
      "All the basic features to boost your freelance career. All the basic features to boost your freelance career",
    options: [
      { name: "Access to a selection of VR games and experiences" },
      { name: "Not limited access to educational content" },
      { name: "Not limited access to architecture and design tools" },
      { name: "Priority access to exclusive events and promotions" },
    ],
  },
];
