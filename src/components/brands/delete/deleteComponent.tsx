import React, { useState } from "react";
import styles from "./delete.module.css";
import { useDispatch } from "react-redux";
import { BrandApi } from "@/apis/brand";

const DeleteBrandComponent = ({ brandName, index }: { brandName: string; index: string }) => {
  const [name, setName] = useState(brandName);

  const brandApi = new BrandApi(useDispatch);

  const deleteBrandHandler = async (e: any) => {
    e.preventDefault();
    try {
      await brandApi.deleteBrand(index, brandName);
      setName("");
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  };

  return (
    <div className={styles.buttonWidth}>
      <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target={`#deleteMedicineBrandModal${index}`}>
        Delete
      </button>

      <div className="modal fade" id={`deleteMedicineBrandModal${index}`} aria-labelledby={`deleteMedicineBrandModalLabel${index}`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`deleteMedicineBrandModalLabel${index}`}>
                Delete {brandName}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Are you sure you want to delete {brandName} brand ?</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                No
              </button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteBrandHandler}>
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBrandComponent;
