export interface IPricingPlan {
  id: number;
  name: string;
  price: number;
  description: string;
  options: {
    name: string;
  }[];
}
