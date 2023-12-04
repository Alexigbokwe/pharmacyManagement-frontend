import React from "react";
import styles from "./sidebar.module.css";
import Link from "next/link";

const convertFirstLetterToCapital = (pageName: string) => {
  // Check if the input string is not empty
  if (pageName.length === 0) {
    return pageName; // Return the input string as is if it's empty
  }

  // Convert the first character to uppercase and concatenate it with the rest of the string
  return pageName.charAt(0).toUpperCase() + pageName.slice(1);
};

const SidebarComponent = ({ currentPage }: { currentPage: string }) => {
  const pages = ["dashboard", "inventory", "brands", "configuration"];
  return (
    <nav id="sidebarMenu" className={`${styles.sidebarHeight} col-md-3 col-lg-2 d-md-block sidebar collapse bg-secondary`}>
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {pages.map((page: string, index: number) => (
            <li className={page === currentPage ? `${styles.currentPage} nav-item` : "nav-item"} key={index}>
              {page == "inventory" ? (
                <div className="accordion accordion-flush" id="accordionExample">
                  <div className={`accordion-item ${styles.sidebarAccordionItem}`}>
                    <h2 className="accordion-header" id="headingOne">
                      <button className={page === currentPage ? `${styles.currentPage} accordion-button collapsed bg-secondary ${styles.a}` : `accordion-button collapsed bg-secondary ${styles.a}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        {convertFirstLetterToCapital(page)}
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <Link href={`/${page}/listOfMedicines`} className={`${styles.a} nav-link active`} aria-current="page">
                          List Of Medicines
                        </Link>
                        <Link href={`/${page}/medicineGroups`} className={`${styles.a} nav-link active`} aria-current="page">
                          Medicine Groups
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link href={`/${page}`} className={`${styles.a} nav-link active`} aria-current="page">
                  {convertFirstLetterToCapital(page)}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SidebarComponent;
