"use client";
import Image from "next/image";
import styles from "./page.module.css";
import LoginComponent from "@/components/login/loginComponent";
import RegistrationComponent from "@/components/registration/registrationComponent";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image src="https://www.acgil.com/images/pharmacy-management.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Group 12A PMS</h1>
            <p className="lead">12A Pharmacy Management System, helps to enhance the efficiency and organization of pharmaceutical operations. It offers a comprehensive suite of features designed to simplify and optimize various aspects of running a pharmacy from inventory management to prescription tracking.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <LoginComponent route={router} />
              <RegistrationComponent />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2 className="text-danger">
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
}
