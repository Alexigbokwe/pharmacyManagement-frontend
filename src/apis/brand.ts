import { useSelector } from "react-redux";
import { IBrand, selectAllBrands, addBrandsFromDB, addBrand, deleteBrand, updateBrand } from "@/store/features/brand/brandSlice";
import { BaseApi } from "./baseApi";

export class BrandApi extends BaseApi {
  private baseUrl = "http://localhost:8081/api/v1/brands";
  constructor(useDispatch: any) {
    super(useDispatch);
  }

  public fetchBrandById(id: string) {
    const result = this.loadBrandsFromStore().find((brand) => {
      brand.id == id;
    });
    return result?.name;
  }

  public loadBrandsFromStore(): IBrand[] {
    return useSelector(selectAllBrands) as IBrand[];
  }

  public async fetchBrandsFromBackEnd() {
    try {
      const response = await this.axios.get(`${this.baseUrl}/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      const responseData = response.data;
      this.dispatch(addBrandsFromDB(responseData.data));
    } catch (error: any) {
      console.error(error.message);
    }
  }

  public async addBrand(name: string) {
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
        addBrand({
          id: responseData.data.id,
          name: responseData.data.name,
        })
      );
    } catch (error) {}
  }

  public async deleteBrand(index: string, name: string) {
    try {
      await this.axios.delete(`${this.baseUrl}/${index}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });

      this.dispatch(
        deleteBrand({
          id: index,
          name,
        })
      );
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  }

  public async updateBrand(data: { index: string; name: string }) {
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
        updateBrand({
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
