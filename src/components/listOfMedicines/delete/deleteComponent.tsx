import React, { useState } from "react";
import styles from "./delete.module.css";
import { useDispatch } from "react-redux";
import { MedicineApi } from "@/apis/medicine";

const DeleteMedicineComponent = ({ id, name }: { id: string; name: string }) => {
  const [medicineName, setMedicineName] = useState(name);

  const medicineApi = new MedicineApi(useDispatch);

  const deleteMedicineHandler = async (e: any) => {
    e.preventDefault();
    try {
      await medicineApi.deleteMedicine(id, name);
      setMedicineName("");
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  };

  return (
    <div className={styles.buttonWidth}>
      <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target={`#deleteMedicineModal${id}`}>
        Delete
      </button>

      <div className="modal fade" id={`deleteMedicineModal${id}`} aria-labelledby={`deleteMedicineModalLabel${id}`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`deleteMedicineModalLabel${id}`}>
                Delete {name}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Are you sure you want to delete {name} medicine ?</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                No
              </button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteMedicineHandler}>
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMedicineComponent;
