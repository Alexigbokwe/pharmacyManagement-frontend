import { useSelector } from "react-redux";
import { IMedicine, selectAllMedicines, addMedicinesFromDB, addMedicine, deleteMedicine, updateMedicine } from "@/store/features/medicine/medicineSlice";
import { BaseApi } from "./baseApi";

export class MedicineApi extends BaseApi {
  private baseUrl = "http://localhost:8081/api/v1/medicines";
  constructor(useDispatch: any) {
    super(useDispatch);
  }

  public loadMedicinesFromStore(): IMedicine[] {
    return useSelector(selectAllMedicines) as IMedicine[];
  }

  public async fetchMedicinesFromBackEnd() {
    try {
      const response = await this.axios.get(`${this.baseUrl}/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      const responseData = response.data;
      this.dispatch(addMedicinesFromDB(responseData.data));
    } catch (error: any) {
      console.error(error.message);
    }
  }

  public async addMedicine(medicine: IMedicine) {
    try {
      const response = await this.axios.post(
        `${this.baseUrl}`,
        { ...medicine },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      const responseData = response.data;
      const record: IMedicine = {
        id: responseData.data.id,
        name: responseData.data.name,
        costPrice: responseData.data.costPrice,
        sellingPrice: responseData.data.sellingPrice,
        sideEffect: responseData.data.sideEffect,
        howToUse: responseData.data.howToUse,
        quantityInStock: responseData.data.quantityInStock,
        manufacturedDate: responseData.data.manufacturedDate,
        expirationDate: responseData.data.expirationDate,
        medicineGroupId: responseData.data.medicineGroupId,
        brandId: responseData.data.brandId,
        createdAt: responseData.data.createdAt,
        updatedAt: responseData.data.updatedAt,
      };
      this.dispatch(addMedicine(record));
    } catch (error) {}
  }

  public async deleteMedicine(index: string, name: string) {
    try {
      await this.axios.delete(`${this.baseUrl}/${index}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });

      this.dispatch(
        deleteMedicine({
          id: index,
          name,
        })
      );
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  }

  public async updateMedicine(data: IMedicine) {
    try {
      const response = await this.axios.patch(
        `${this.baseUrl}`,
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      const responseData = response.data;
      const record: IMedicine = {
        id: responseData.data.id,
        name: responseData.data.name,
        costPrice: responseData.data.costPrice,
        sellingPrice: responseData.data.sellingPrice,
        sideEffect: responseData.data.sideEffect,
        howToUse: responseData.data.howToUse,
        quantityInStock: responseData.data.quantityInStock,
        manufacturedDate: responseData.data.manufacturedDate,
        expirationDate: responseData.data.expirationDate,
        medicineGroupId: responseData.data.medicineGroupId,
        brandId: responseData.data.brandId,
        createdAt: responseData.data.createdAt,
        updatedAt: responseData.data.updatedAt,
      };

      this.dispatch(updateMedicine(record));
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  }
}
