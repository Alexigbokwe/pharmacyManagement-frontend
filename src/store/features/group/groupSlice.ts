"use client";
import { createSlice } from "@reduxjs/toolkit";

export type IMedicineGroup = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
const initialState: IMedicineGroup[] = [];

const groupsSlice = createSlice({
  name: "medicineGroups",
  initialState,
  reducers: {
    addGroup(state, action) {
      state.push(action.payload);
    },
    updateGroup(state, action) {
      let groupIndex = state.findIndex((group) => group.id == action.payload.id);
      if (groupIndex !== -1) {
        state[groupIndex].name = action.payload.name;
        state[groupIndex].updatedAt = action.payload.updatedAt;
      }
    },
    addGroupsFromDB(state, action) {
      if (action.payload) {
        state.length = 0;
        action.payload.map((group: IMedicineGroup) => {
          state.push(group);
        });
      }
    },
    deleteGroup(state, action) {
      let groupIndex = state.findIndex((group) => group.id == action.payload.id);
      state.splice(groupIndex, 1);
    },
  },
});

export const selectAllGroups = (state: any) => state.medicineGroups;
export const { addGroupsFromDB, addGroup, updateGroup, deleteGroup } = groupsSlice.actions;
export default groupsSlice.reducer;
