"use client";
import { createSlice } from "@reduxjs/toolkit";

export type IMedicine = {
  id?: string;
  name: string;
  description?: string;
  costPrice: string;
  sellingPrice: string;
  sideEffect: string;
  howToUse: string;
  quantityInStock: string;
  manufacturedDate: string;
  expirationDate: string;
  medicineGroupId: string;
  brandId: string;
  createdAt?: Date;
  updatedAt?: Date;
};
const initialState: IMedicine[] = [];

const medicineSlice = createSlice({
  name: "medicines",
  initialState,
  reducers: {
    addMedicine(state, action) {
      state.push(action.payload);
    },
    updateMedicine(state, action) {
      let medicineIndex = state.findIndex((medicine) => medicine.id == action.payload.id);
      if (medicineIndex !== -1) {
        state[medicineIndex].name = action.payload.name;
        state[medicineIndex].costPrice = action.payload.costPrice;
        state[medicineIndex].sellingPrice = action.payload.sellingPrice;
        state[medicineIndex].sideEffect = action.payload.sideEffect;
        state[medicineIndex].howToUse = action.payload.howToUse;
        state[medicineIndex].quantityInStock = action.payload.quantityInStock;
        state[medicineIndex].manufacturedDate = action.payload.manufacturedDate;
        state[medicineIndex].expirationDate = action.payload.expirationDate;
        state[medicineIndex].medicineGroupId = action.payload.medicineGroupId;
        state[medicineIndex].brandId = action.payload.brandId;
        state[medicineIndex].createdAt = action.payload.createdAt;
        state[medicineIndex].updatedAt = action.payload.updatedAt;
      }
    },
    addMedicinesFromDB(state, action) {
      if (action.payload) {
        state.length = 0;
        action.payload.map((medicine: IMedicine) => {
          state.push(medicine);
        });
      }
    },
    deleteMedicine(state, action) {
      let medicineIndex = state.findIndex((medicine) => medicine.id == action.payload.id);
      state.splice(medicineIndex, 1);
    },
  },
});

export const selectAllMedicines = (state: any) => state.medicines;
export const { addMedicinesFromDB, addMedicine, updateMedicine, deleteMedicine } = medicineSlice.actions;
export default medicineSlice.reducer;
