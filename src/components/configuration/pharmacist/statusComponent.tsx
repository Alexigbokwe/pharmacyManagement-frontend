import { IPharmacistStatus } from "@/app/configuration/data";
import React from "react";

const StatusComponent = ({ status }: { status: IPharmacistStatus }) => {
  return <span className={`${status == IPharmacistStatus.ACTIVE ? `bg-success` : `bg-danger`} badge`}>{status}</span>;
};

export default StatusComponent;
