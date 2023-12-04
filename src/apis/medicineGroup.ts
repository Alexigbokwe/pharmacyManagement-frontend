import { useSelector } from "react-redux";
import { IMedicineGroup, selectAllGroups, addGroupsFromDB, addGroup, deleteGroup, updateGroup } from "@/store/features/group/groupSlice";
import { BaseApi } from "./baseApi";

export class MedicineGroupApi extends BaseApi {
  private baseUrl = "http://localhost:8081/api/v1/groups";
  constructor(useDispatch: any) {
    super(useDispatch);
  }

  public fetchGroupById(id: string) {
    const result = this.loadMedicineGroupsFromStore().find((group) => {
      group.id == id;
    });
    return result?.name;
  }

  public loadMedicineGroupsFromStore(): IMedicineGroup[] {
    return useSelector(selectAllGroups) as IMedicineGroup[];
  }

  public async fetchMedicineGroupsFromBackEnd() {
    try {
      const response = await this.axios.get(`${this.baseUrl}/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      const responseData = response.data;
      this.dispatch(addGroupsFromDB(responseData.data));
    } catch (error: any) {
      console.error(error.message);
    }
  }

  public async addMedicineGroup(name: string) {
    try {
      const response = await this.axios.post(
        `${this.baseUrl}`,
        { name },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      const responseData = response.data;
      this.dispatch(
        addGroup({
          id: responseData.data.id,
          name: responseData.data.name,
        })
      );
    } catch (error) {}
  }

  public async deleteMedicineGroup(index: string, name: string) {
    try {
      await this.axios.delete(`${this.baseUrl}/${index}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });

      this.dispatch(
        deleteGroup({
          id: index,
          name,
        })
      );
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  }

  public async updateMedicineGroup(data: { index: string; name: string }) {
    try {
      const response = await this.axios.patch(
        `${this.baseUrl}`,
        { id: data.index, name: data.name },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      const responseData = response.data;

      this.dispatch(
        updateGroup({
          id: responseData.data.id,
          name: responseData.data.name,
        })
      );
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  }
}
