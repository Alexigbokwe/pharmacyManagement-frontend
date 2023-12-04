"use client";
import React, { useEffect } from "react";
import SidebarComponent from "@/components/dashboard/sidebar/sidebarComponent";
import HeaderComponent from "@/components/dashboard/header/headerComponent";
import AddNewGroupComponent from "@/components/medicineGroup/add/addComponent";
import DeleteMedicineComponent from "@/components/medicineGroup/delete/deleteComponent";
import EditMedicineGroupComponent from "@/components/medicineGroup/edit/editComponent";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { MedicineGroupApi } from "@/apis/medicineGroup";

const MedicineGroups = () => {
  const router = useRouter();
  const medicineGroupApi = new MedicineGroupApi(useDispatch);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      router.push("/");
    }
    medicineGroupApi.fetchMedicineGroupsFromBackEnd();
  }, []);
  let medicineGroups = medicineGroupApi.loadMedicineGroupsFromStore();

  return (
    <div>
      <HeaderComponent router={router} />

      <div className="container-fluid">
        <div className="row">
          <SidebarComponent currentPage="inventory" />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
              <h1 className="h2">Medicine Groups</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <AddNewGroupComponent />
              </div>
            </div>

            <nav aria-label="breadcrumb row">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Inventory</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Medicine Groups
                </li>
              </ol>
            </nav>

            <div className="row">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Group Name</th>
                    <th scope="col">No of Medicines</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {medicineGroups.map((medicineGroup) => (
                    <tr key={medicineGroup.id}>
                      <td>{medicineGroup.name}</td>
                      <td>170</td>
                      <td>
                        <div className="row">
                          <EditMedicineGroupComponent groupName={medicineGroup.name} index={medicineGroup.id} />
                          <DeleteMedicineComponent groupName={medicineGroup.name} index={medicineGroup.id} />
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

export default MedicineGroups;
