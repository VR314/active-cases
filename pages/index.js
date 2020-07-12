import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from './index.module.css'
import Overlay from '../components/overlay'
import cookie from 'react-cookie';

export default function Home() {
  const [cookies, setCookies] = useState(cookie.load('location'));

  useEffect(() => { }, []);

  return (
    <div>
      {cookies != undefined && (

        <div className={styles.container}>
          <Head>
            <title>ActiveCases</title>
            <link rel="icon" href="/corona-nb.ico" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome to Active-Cases!
        </h1>
          </main>

          <footer>
            <p>this is the footer</p>
          </footer>

        </div>
      )
      } {
        cookies == undefined && (
          <Overlay setCookies={setCookies} />
        )
      }
    </div>
  )
}
