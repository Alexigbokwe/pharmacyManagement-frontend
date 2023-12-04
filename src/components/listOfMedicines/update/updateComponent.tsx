import React, { useState } from "react";
import styles from "./update.module.css";
import { IMedicine } from "@/store/features/medicine/medicineSlice";
import { MedicineApi } from "@/apis/medicine";
import { useDispatch } from "react-redux";
import { BrandApi } from "@/apis/brand";
import { MedicineGroupApi } from "@/apis/medicineGroup";
import Swal from "sweetalert2";

const UpdateMedicineComponent = ({ medicine }: { medicine: IMedicine }) => {
  const [name, setName] = useState(medicine.name);
  const [description, setDescription] = useState(medicine.description);
  const [costPrice, setCostPrice] = useState(medicine.costPrice);
  const [sellingPrice, setSellingPrice] = useState(medicine.sellingPrice);
  const [quantity, setQuantity] = useState(medicine.quantityInStock);
  const [howToUse, setHowToUse] = useState(medicine.howToUse);
  const [sideEffect, setSideEffect] = useState(medicine.sideEffect);
  const [manufacturedDate, setManufacturedDate] = useState(medicine.manufacturedDate);
  const [expirationDate, setExpirationDate] = useState(medicine.expirationDate);
  const [brandId, setBrandId] = useState(medicine.brandId);
  const [groupId, setGroupId] = useState(medicine.medicineGroupId);

  const medicineApi = new MedicineApi(useDispatch);
  const brandApi = new BrandApi(useDispatch);
  const medicineGroupApi = new MedicineGroupApi(useDispatch);

  const brands = brandApi.loadBrandsFromStore();
  const groups = medicineGroupApi.loadMedicineGroupsFromStore();

  const updateMedicine = async (e: any) => {
    e.preventDefault();
    try {
      const record: IMedicine = {
        id: medicine.id,
        name,
        description,
        costPrice,
        sellingPrice,
        sideEffect,
        howToUse,
        quantityInStock: String(quantity),
        manufacturedDate: manufacturedDate,
        expirationDate: expirationDate,
        medicineGroupId: groupId,
        brandId: brandId,
      };
      await medicineApi.updateMedicine(record);
      Swal.fire({
        title: "Success!",
        text: `${name} successfully updated`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  };

  return (
    <div className={styles.buttonWidth}>
      <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target={`#updateMedicineModal${medicine.id}`}>
        Update
      </button>

      <div className="modal fade" id={`updateMedicineModal${medicine.id}`} aria-labelledby={`updateMedicineModalLabel${medicine.id}`} aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id={`updateMedicineModalLabel${medicine.id}`}>
                Edit {medicine.name}
              </h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3" onSubmit={updateMedicine}>
                <div className="col-md-6">
                  <label htmlFor="floatingInput" className="form-label">
                    Medicine Name
                  </label>
                  <input type="text" className="form-control" id="inputEmail4" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="floatingInput" className="form-label">
                    Medicine Description
                  </label>
                  <input type="text" className="form-control" id="inputEmail4" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="floatingInput" className="form-label">
                    Cost Price
                  </label>
                  <input type="text" className="form-control" id="inputEmail4" value={costPrice} onChange={(e) => setCostPrice(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="floatingInput" className="form-label">
                    Selling Price
                  </label>
                  <input type="text" className="form-control" id="inputEmail4" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="floatingInput" className="form-label">
                    Medicine Brand
                  </label>
                  <select className="form-select" id="floatingSelect" aria-label="Floating label select example" value={brandId} onChange={(e) => setBrandId(e.target.value)}>
                    <option selected> - Select Brand- </option>
                    {brands.map((brand) => (
                      <option value={brand.id}>{brand.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor="floatingInput" className="form-label">
                    Medicine Group
                  </label>
                  <select className="form-select" id="floatingSelect" aria-label="Floating label select example" value={groupId} onChange={(e) => setGroupId(e.target.value)}>
                    <option selected> - Select Group- </option>
                    {groups.map((group) => (
                      <option value={group.id}>{group.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-4">
                  <label htmlFor="inputAddress2" className="form-label">
                    Quantity in stock
                  </label>
                  <input type="number" className="form-control" id="inputAddress2" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className="col-4">
                  <label htmlFor="inputAddress2" className="form-label">
                    Manufactured Date
                  </label>
                  <input type="date" className="form-control" id="inputAddress2" value={manufacturedDate} onChange={(e) => setManufacturedDate(e.target.value)} />
                </div>
                <div className="col-4">
                  <label htmlFor="inputAddress2" className="form-label">
                    Expiration Date
                  </label>
                  <input type="date" className="form-control" id="inputAddress2" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
                </div>
                <div className="col-12">
                  <label htmlFor="floatingInput" className="form-label">
                    How to Use
                  </label>
                  <textarea className={`${styles.testAreaHeight} form-control`} id="floatingTextarea2" value={howToUse} onChange={(e) => setHowToUse(e.target.value)}></textarea>
                </div>
                <div className="col-12">
                  <label htmlFor="floatingInput" className="form-label">
                    Side Effects
                  </label>
                  <textarea className={`${styles.testAreaHeight} form-control`} id="floatingTextarea2" value={sideEffect} onChange={(e) => setSideEffect(e.target.value)}></textarea>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMedicineComponent;
