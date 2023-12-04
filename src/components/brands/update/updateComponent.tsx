import React, { useState } from "react";
import styles from "./edit.module.css";
import { useDispatch } from "react-redux";
import { BrandApi } from "@/apis/brand";

const EditBrandComponent = ({ name, index }: { name: string; index: string }) => {
  const [brandName, setBrandName] = useState(name);
  const brandApi = new BrandApi(useDispatch);

  const updateBrandHandler = async (e: any) => {
    e.preventDefault();
    try {
      await brandApi.updateBrand({ index, name: brandName });
      setBrandName(brandName);
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  };

  return (
    <div className={styles.buttonWidth}>
      <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target={`#editBrandModal${index}`}>
        Edit
      </button>

      <div className="modal fade" id={`editBrandModal${index}`} aria-labelledby={`editBrandModalLabel${index}`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`editBrandModalLabel${index}`}>
                Edit {name}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateBrandHandler}>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Diabetes" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
                  <label htmlFor="floatingInput">Medicine Brand Name</label>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
                    Update Brand
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

export default EditBrandComponent;
