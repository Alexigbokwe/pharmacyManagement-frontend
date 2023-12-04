import React from "react";
import SidebarComponent from "@/components/dashboard/sidebar/sidebarComponent";
import HeaderComponent from "@/components/dashboard/header/headerComponent";
import styles from "./inventory.module.css";

const Inventory = () => {
  return (
    <div>
      <HeaderComponent />

      <div className="container-fluid">
        <div className="row">
          <SidebarComponent currentPage="inventory" />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
              <h1 className="h2">Inventory</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <button type="button" className="me-2 btn btn-outline-success">
                  List Of Medicines
                </button>
                <button type="button" className="me-2 btn btn-outline-success">
                  Medicine Groups
                </button>
                <button type="button" className="me-2 btn btn-outline-success">
                  Add New Item
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <div className={`${styles.reportCard} card border-success mb-3`}>
                  <div className="card-body text-success">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <div className="card-footer bg-transparent border-success">Footer</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className={`${styles.reportCard} card border-success mb-3`}>
                  <div className="card-body text-success">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <div className="card-footer bg-transparent border-success">Footer</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className={`${styles.reportCard} card border-success mb-3`}>
                  <div className="card-body text-success">
                    <h5 className="card-title">Success card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <div className="card-footer bg-transparent border-success">Footer</div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE"></script>
      <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha"></script>
    </div>
  );
};

export default Inventory;
