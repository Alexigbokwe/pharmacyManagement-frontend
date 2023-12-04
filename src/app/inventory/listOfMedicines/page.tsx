"use client";
import React, { useEffect } from "react";
import SidebarComponent from "@/components/dashboard/sidebar/sidebarComponent";
import HeaderComponent from "@/components/dashboard/header/headerComponent";
import UpdateMedicineComponent from "@/components/listOfMedicines/update/updateComponent";
import AddNewItemComponent from "@/components/listOfMedicines/add/addNewItem";
import DeleteMedicineComponent from "@/components/listOfMedicines/delete/deleteComponent";
import { useRouter } from "next/navigation";
import { MedicineApi } from "@/apis/medicine";
import { useDispatch } from "react-redux";
import { BrandApi } from "@/apis/brand";
import { MedicineGroupApi } from "@/apis/medicineGroup";

const ListOfMedicines = () => {
  const router = useRouter();
  const medicineApi = new MedicineApi(useDispatch);
  const brandApi = new BrandApi(useDispatch);
  const medicineGroupApi = new MedicineGroupApi(useDispatch);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      router.push("/");
    }
    medicineApi.fetchMedicinesFromBackEnd();
    brandApi.fetchBrandsFromBackEnd();
    medicineGroupApi.fetchMedicineGroupsFromBackEnd();
  }, []);

  let medicines = medicineApi.loadMedicinesFromStore();
  const brands = brandApi.loadBrandsFromStore();
  const groups = medicineGroupApi.loadMedicineGroupsFromStore();

  let fetchById = (id: string, data: any[]) => {
    const result = data.find((record) => record.id == id);
    return result ? result.name : null;
  };

  return (
    <div>
      <HeaderComponent router={router} />

      <div className="container-fluid">
        <div className="row">
          <SidebarComponent currentPage="inventory" />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
              <h1 className="h2">List Of Medicines</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <AddNewItemComponent />
              </div>
            </div>

            <nav aria-label="breadcrumb row">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Inventory</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  List Of Medicines
                </li>
              </ol>
            </nav>

            <div className="row">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Group</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {medicines.map((medicine) => (
                    <tr key={medicine.id}>
                      <td>{medicine.id}</td>
                      <td>{medicine.name}</td>
                      <td>{fetchById(medicine.medicineGroupId, groups)}</td>
                      <td>{fetchById(medicine.brandId, brands)}</td>
                      <td>{medicine.quantityInStock}</td>
                      <td>
                        <div className="row">
                          <UpdateMedicineComponent medicine={medicine} />
                          <DeleteMedicineComponent id={medicine.id as string} name={medicine.name} />
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

export default ListOfMedicines;
