"use client"

import styles from './page.module.css';
import 'material-icons/iconfont/material-icons.css';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Pharmapedia Home Page</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
      <main>
      <section className={styles.banner}>
          <div className={styles.article}>
            <h1>8 reasons patients don&apos;t take their medications</h1>
            <h2>Fear, Mistrust, Worry, Misunderstanding, Too Many Medications...</h2>
            <p>
            &quot;Medication nonadherence—when patients don&apos;t take their medications as prescribed—is unfortunately fairly common, with research showing that patients don&apos;t take their medications as prescribed about half the time. The phenomenon has added consequences for patients with chronic disease.&quot;
            </p>
            <a
              href="https://www.ama-assn.org/delivering-care/patient-support-advocacy/8-reasons-patients-dont-take-their-medications"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Learn More</button>
            </a>
          </div>
        </section>

        <section className={styles.mission}>
          <h1>We make it easier for you</h1>
          <section className={styles.features}>
            <div className={styles.cardContainer}>
              <a href="/filter" className={styles.links}>
                <div className={styles.card}>
                  <div className={styles.name}>
                    <img src='./images/pill.png' alt='a pill icon' className={styles.img}/>
                    <h2>Information Filter</h2>
                  </div>
                  <div className={styles.more}>
                    Filter to browse medications based on a specific category or drug class and various other filterable options, such as drug formula, usages, company, etc.
                  </div>
                </div>
              </a>

              <a href="/search"  className={styles.links}>
                <div className={styles.card}>
                  <div className={styles.name}>
                    <img src='./images/search.png' alt='a search icon' className={styles.img}/>
                    <h2>Medication Search</h2>
                  </div>
                  <div className={styles.more}>Search and find information of a specific medication, including drug brand, strength, usages, allergy information, and much more!</div>
                </div>
              </a>

              <a href="/interactions"  className={styles.links}>
                <div className={styles.card}>
                    <div className={styles.name}>
                      <img src='./images/check.png' alt='a shield icon' className={styles.img}/>
                      <h2>Interaction Check</h2>
                    </div>
                    <div className={styles.more}>Check potential interactions between multiple medications. This will prevent potential harm due to a lack of knowledge of the drug interactions.</div>
                </div>
              </a>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};