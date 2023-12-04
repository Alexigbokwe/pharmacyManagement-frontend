import React, { useState } from "react";
import styles from "./delete.module.css";
import { useDispatch } from "react-redux";
import { MedicineGroupApi } from "@/apis/medicineGroup";

const DeleteMedicineComponent = ({ groupName, index }: { groupName: string; index: string }) => {
  const [name, setName] = useState(groupName);
  const medicineGroupApi = new MedicineGroupApi(useDispatch);

  const deleteGroupHandler = async (e: any) => {
    e.preventDefault();
    try {
      await medicineGroupApi.deleteMedicineGroup(index, name);

      setName("");
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  };
  return (
    <div className={styles.buttonWidth}>
      <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target={`#deleteMedicineGroupModal${index}`}>
        Delete
      </button>

      <div className="modal fade" id={`deleteMedicineGroupModal${index}`} aria-labelledby={`deleteMedicineGroupModalLabel${index}`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`deleteMedicineGroupModalLabel${index}`}>
                Delete {groupName}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Are you sure you want to delete {groupName} group ?</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                No
              </button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteGroupHandler}>
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
