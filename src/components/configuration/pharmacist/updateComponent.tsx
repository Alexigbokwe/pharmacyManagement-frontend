import React from "react";
import styles from "./pharmacist.module.css";
import { IPharmacist } from "@/store/features/pharmacist/pharmacistSlice";

const UpdatePharmacistComponent = ({ pharmacist, index }: { pharmacist: IPharmacist; index: number }) => {
  return (
    <div className={styles.buttonWidth}>
      <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target={`#updatePharmacistModal${index}`}>
        Update
      </button>

      <div className="modal fade" id={`updatePharmacistModal${index}`} aria-labelledby={`updatePharmacistModalLabel${index}`} aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id={`updatePharmacistModalLabel${index}`}>
                Edit {pharmacist.firstName} Record
              </h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="floatingInput" className="form-label">
                    Username
                  </label>
                  <input type="text" className="form-control" id="inputUserName1" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="floatingInput" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="inputEmail1" />
                </div>
                <div className="col-6">
                  <label htmlFor="inputAddress2" className="form-label">
                    Phone Number
                  </label>
                  <input type="number" className="form-control" id="inputAddress2" />
                </div>
                <div className="col-6">
                  <label htmlFor="inputAddress2" className="form-label">
                    Address
                  </label>
                  <input type="text" className="form-control" id="inputAddress2" />
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-success" data-bs-dismiss="modal">
                    Activate
                  </button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                    Deactivate
                  </button>
                  <button type="button" className="btn btn-success" data-bs-dismiss="modal">
                    Update Details
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

export default UpdatePharmacistComponent;
