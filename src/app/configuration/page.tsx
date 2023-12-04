"use client";
import React, { useEffect } from "react";
import SidebarComponent from "@/components/dashboard/sidebar/sidebarComponent";
import HeaderComponent from "@/components/dashboard/header/headerComponent";
import StatusComponent from "@/components/configuration/pharmacist/statusComponent";
import UpdatePharmacistComponent from "@/components/configuration/pharmacist/updateComponent";
import { useRouter } from "next/navigation";
import { PharmacistApi } from "@/apis/pharmacistAPI";
import { useDispatch } from "react-redux";
import { IPharmacist } from "@/store/features/pharmacist/pharmacistSlice";

const Configuration = () => {
  const router = useRouter();
  const pharmacistApi = new PharmacistApi(useDispatch);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      router.push("/");
    }

    pharmacistApi.fetchPharmacistFromBackEnd();
  }, []);

  let pharmacists = pharmacistApi.loadPharmacistFromStore();

  return (
    <div>
      <HeaderComponent router={router} />

      <div className="container-fluid">
        <div className="row">
          <SidebarComponent currentPage="configuration" />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Configuration</h1>
            </div>

            <div className="row">
              {}
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Status</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pharmacists.map((pharmacist: IPharmacist, index: number) => (
                    <tr key={pharmacist.id}>
                      <td>
                        {pharmacist.firstName} {pharmacist.lastName}
                      </td>
                      <td>{pharmacist.email}</td>
                      <td>{pharmacist.role}</td>
                      <td>
                        <StatusComponent status={pharmacist.status} />
                      </td>
                      <td>{pharmacist.phoneNumber}</td>
                      <td>
                        <div className="row">
                          <UpdatePharmacistComponent pharmacist={pharmacist} index={index} />
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

export default Configuration;
