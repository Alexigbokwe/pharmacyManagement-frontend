import React, { useEffect, useState } from "react";
import styles from "./addNewItem.module.css";
import { useDispatch } from "react-redux";
import { IMedicine } from "@/store/features/medicine/medicineSlice";
import { MedicineApi } from "@/apis/medicine";
import { BrandApi } from "@/apis/brand";
import { MedicineGroupApi } from "@/apis/medicineGroup";

const AddNewItemComponent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [howToUse, setHowToUse] = useState("");
  const [sideEffect, setSideEffect] = useState("");
  const [manufacturedDate, setManufacturedDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [brandId, setBrandId] = useState("");
  const [groupId, setGroupId] = useState("");

  const medicineApi = new MedicineApi(useDispatch);
  const brandApi = new BrandApi(useDispatch);
  const medicineGroupApi = new MedicineGroupApi(useDispatch);

  const brands = brandApi.loadBrandsFromStore();
  const groups = medicineGroupApi.loadMedicineGroupsFromStore();

  const createNewMedicine = async (e: any) => {
    e.preventDefault();
    try {
      const record: IMedicine = {
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
      await medicineApi.addMedicine(record);
      setName("");
      setDescription("");
      setCostPrice("");
      setSellingPrice("");
      setQuantity(0);
      setHowToUse("");
      setSideEffect("");
      setManufacturedDate("");
      setExpirationDate("");
      setGroupId("");
      setBrandId("");
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  };

  return (
    <div className={styles.buttonWidth}>
      <button type="button" className="btn btn-outline-success btn-md" data-bs-toggle="modal" data-bs-target={`#AddNewItemModal`}>
        Add New Item
      </button>

      <div className="modal fade" id={`AddNewItemModal`} aria-labelledby={`AddNewItemModalLabel`} aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id={`AddNewItemModalLabel`}>
                Add New Medicine
              </h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3" onSubmit={createNewMedicine}>
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
                  <input type="number" className="form-control" id="inputAddress2" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
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

export default AddNewItemComponent;
