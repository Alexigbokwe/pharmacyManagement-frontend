export type IMedicine = {
  id: string;
  name: string;
  groupName: string;
  brand: string;
  quantity: number;
};

export const medicines: Array<IMedicine> = [
  { id: "f12", name: "Paracetamol", groupName: "Fever", brand: "", quantity: 500 },
  { id: "v7", name: "Ferrous Sulfate", groupName: "vitamine", brand: "", quantity: 400 },
  { id: "m10", name: "lonatDs", groupName: "Malaria", brand: "", quantity: 100 },
  { id: "f5", name: "DPP-4 inhibitors", groupName: "Diabetes", brand: "", quantity: 700 },
  { id: "c8", name: "Actiq", groupName: "Cancer", brand: "", quantity: 100 },
];
