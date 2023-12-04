export type IPharmacist = {
  id: number;
  userName: string;
  status: IPharmacistStatus;
  email: string;
  phoneNumber: string;
};

export enum IPharmacistStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export const pharmacists: Array<IPharmacist> = [
  { id: 1, userName: "Beauty Igbokwe", status: IPharmacistStatus.ACTIVE, email: "beauty@eamil.com", phoneNumber: "07471510711" },
  { id: 1, userName: "Prince Alex", status: IPharmacistStatus.INACTIVE, email: "prince@eamil.com", phoneNumber: "07471510722" },
];
