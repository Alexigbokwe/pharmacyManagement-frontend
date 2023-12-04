"use client";
import { configureStore } from "@reduxjs/toolkit";
import brandsReducer from "@/store/features/brand/brandSlice";
import groupReducer from "@/store/features/group/groupSlice";
import medicineReducer from "@/store/features/medicine/medicineSlice";
import pharmacistReducer from "@/store/features/pharmacist/pharmacistSlice";

export const store = configureStore({
  reducer: { brands: brandsReducer, medicineGroups: groupReducer, medicines: medicineReducer, pharmacists: pharmacistReducer },
});
