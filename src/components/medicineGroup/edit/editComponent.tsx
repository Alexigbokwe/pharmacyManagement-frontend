import React, { useState } from "react";
import styles from "./edit.module.css";
import { useDispatch } from "react-redux";
import { MedicineGroupApi } from "@/apis/medicineGroup";

const EditMedicineGroupComponent = ({ groupName, index }: { groupName: string; index: string }) => {
  const [name, setName] = useState(groupName);
  const medicineGroupApi = new MedicineGroupApi(useDispatch);

  const updateGroupHandler = async (e: any) => {
    e.preventDefault();
    try {
      await medicineGroupApi.updateMedicineGroup({ index, name });
      setName(name);
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  };
  return (
    <div className={styles.buttonWidth}>
      <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target={`#editMedicineGroupModal${index}`}>
        Edit
      </button>

      <div className="modal fade" id={`editMedicineGroupModal${index}`} aria-labelledby={`editMedicineGroupModalLabel${index}`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`editMedicineGroupModalLabel${index}`}>
                Edit {groupName}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateGroupHandler}>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Diabetes" value={name} onChange={(e) => setName(e.target.value)} />
                  <label htmlFor="floatingInput">Medicine Group Name</label>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
                    Update Medication Group
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

export default EditMedicineGroupComponent;
