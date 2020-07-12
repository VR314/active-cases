/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Head from 'next/head'

export default function Overlay(props) {
    //add cookie and props.setCookies(cookie)

    return (
        <div >
            <Head>
                <title>ActiveCases</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="section">
                <form>
                    zip: <input type="text" name="zip" defaultValue="46032" /> <a href="#" >Get Address</a>
                </form>
            </section>
        </div>
        
    )
}