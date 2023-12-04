"use client";
import { createSlice } from "@reduxjs/toolkit";

export type IPharmacist = {
  id: number;
  firstName: string;
  lastName: string;
  status: IPharmacistStatus;
  email: string;
  phoneNumber: string;
  role: IUserRole;
};

export enum IPharmacistStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}

export enum IUserRole {
  ADMIN = "ADMIN",
  PHARMACIST = "PHARMACIST",
}

const initialState: IPharmacist[] = [];

const pharmacistsSlice = createSlice({
  name: "pharmacists",
  initialState,
  reducers: {
    addPharmacist(state, action) {
      state.push(action.payload);
    },
    updatePharmacist(state, action) {
      let pharmacistIndex = state.findIndex((pharmacist) => pharmacist.id == action.payload.id);
      if (pharmacistIndex !== -1) {
        state[pharmacistIndex].firstName = action.payload.firstName;
        state[pharmacistIndex].lastName = action.payload.lastName;
        state[pharmacistIndex].email = action.payload.email;
        state[pharmacistIndex].status = action.payload.status;
        state[pharmacistIndex].phoneNumber = action.payload.phoneNumber;
      }
    },
    addPharmacistsFromDB(state, action) {
      if (action.payload) {
        state.length = 0;
        action.payload.map((pharmacist: IPharmacist) => {
          state.push(pharmacist);
        });
      }
    },
    deletePharmacist(state, action) {
      let pharmacistIndex = state.findIndex((pharmacist) => pharmacist.id == action.payload.id);
      state.splice(pharmacistIndex, 1);
    },
  },
});

export const selectAllPharmacists = (state: any) => state.pharmacists;
export const { addPharmacistsFromDB, addPharmacist, updatePharmacist, deletePharmacist } = pharmacistsSlice.actions;
export default pharmacistsSlice.reducer;
