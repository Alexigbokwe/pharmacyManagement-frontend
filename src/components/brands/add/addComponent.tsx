import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BrandApi } from "@/apis/brand";

const AddBrandComponent = () => {
  const [name, setName] = useState("");
  const brandApi = new BrandApi(useDispatch);

  const createNewBrand = async (e: any) => {
    e.preventDefault();
    try {
      brandApi.addBrand(name);
      setName("");
    } catch (error: any) {
      // Handle login failure (e.g., show an error message)
      console.error(error.message);
    }
  };
  return (
    <div>
      <button type="button" className="btn btn-outline-success btn-md px-4 me-md-2" data-bs-toggle="modal" data-bs-target="#addMedicineBrand">
        Add New Brand
      </button>
      <div className="modal fade" id="addMedicineBrand" aria-labelledby="addMedicineBrandLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addMedicineBrandLabel">
                Add Medicine Brand
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={createNewBrand}>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Diabetes" value={name} onChange={(e) => setName(e.target.value)} />
                  <label htmlFor="floatingInput">Brand Name</label>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
                    Submit Brand
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

export default AddBrandComponent;
