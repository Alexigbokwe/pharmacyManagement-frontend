"use client";
import React, { useEffect } from "react";
import SidebarComponent from "@/components/dashboard/sidebar/sidebarComponent";
import HeaderComponent from "@/components/dashboard/header/headerComponent";
import AddBrandComponent from "@/components/brands/add/addComponent";
import EditBrandComponent from "@/components/brands/update/updateComponent";
import DeleteBrandComponent from "@/components/brands/delete/deleteComponent";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { BrandApi } from "@/apis/brand";

const Brands = () => {
  const router = useRouter();
  const brandApi = new BrandApi(useDispatch);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      router.push("/");
    }

    brandApi.fetchBrandsFromBackEnd();
  }, []);

  let brands = brandApi.loadBrandsFromStore();
  return (
    <div>
      <HeaderComponent router={router} />

      <div className="container-fluid">
        <div className="row">
          <SidebarComponent currentPage="brands" />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Brands</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <AddBrandComponent />
              </div>
            </div>

            <div className="row">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Brand Name</th>
                    <th scope="col">No of Medicines</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((brand) => (
                    <tr key={brand.id}>
                      <td>{brand.name}</td>
                      <td>170</td>
                      <td>
                        <div className="row">
                          <EditBrandComponent name={brand.name} index={brand.id} />
                          <DeleteBrandComponent brandName={brand.name} index={brand.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Brands;
