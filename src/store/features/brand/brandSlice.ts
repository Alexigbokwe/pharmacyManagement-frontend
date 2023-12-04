"use client";
import { createSlice } from "@reduxjs/toolkit";

export type IBrand = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
const initialState: IBrand[] = [];

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    addBrand(state, action) {
      state.push(action.payload);
    },
    updateBrand(state, action) {
      let brandIndex = state.findIndex((brand) => brand.id == action.payload.id);
      if (brandIndex !== -1) {
        state[brandIndex].name = action.payload.name;
        state[brandIndex].updatedAt = action.payload.updatedAt;
      }
    },
    addBrandsFromDB(state, action) {
      if (action.payload) {
        state.length = 0;
        action.payload.map((brand: IBrand) => {
          state.push(brand);
        });
      }
    },
    deleteBrand(state, action) {
      let brandIndex = state.findIndex((brand) => brand.id == action.payload.id);
      state.splice(brandIndex, 1);
    },
  },
});

export const selectAllBrands = (state: any) => state.brands;
export const { addBrandsFromDB, addBrand, updateBrand, deleteBrand } = brandsSlice.actions;
export default brandsSlice.reducer;
