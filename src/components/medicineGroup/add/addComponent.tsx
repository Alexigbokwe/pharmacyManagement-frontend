import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MedicineGroupApi } from "@/apis/medicineGroup";

const AddNewGroupComponent = () => {
  const [name, setName] = useState("");
  const medicineGroupApi = new MedicineGroupApi(useDispatch);

  const createNewMedicineGroup = async (e: any) => {
    e.preventDefault();
    try {
      await medicineGroupApi.addMedicineGroup(name);
      setName("");
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  };

  return (
    <div>
      <button type="button" className="btn btn-outline-success btn-md px-4 me-md-2" data-bs-toggle="modal" data-bs-target="#addMedicineGroup">
        Add New Group
      </button>
      <div className="modal fade" id="addMedicineGroup" aria-labelledby="addMedicineGroupLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addMedicineGroupLabel">
                Add Medicine Group
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={createNewMedicineGroup}>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Diabetes" value={name} onChange={(e) => setName(e.target.value)} />
                  <label htmlFor="floatingInput">Medicine Group Name</label>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
                    Add Medication Group
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

export default AddNewGroupComponent;
