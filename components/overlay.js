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

            <body>
                <form>
                    zip: <input type="text" name="zip" value="46032" /> <a href="#" >Get Address</a>
                </form>
            </body>

            <style jsx>{`

`}</style>
        </div>
        
    )
}