import React, { useState, useEffect } from 'react'
import Head from 'next/head'
//import cookie from 'react-cookie';
import Link from 'next/link'

const states = { "AZ": "Arizona", "AL": "Alabama", "AK": "Alaska", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DC": "DC", "DE": "Delaware", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming" };

export default function Home() {
  var links = []
  for (var state in states) {
    links.push((<div className="column"><div className="box has-text-centered"><Link href={"/states/" + state.toLowerCase()}><a>{states[state]}</a></Link></div></div>));
  }

  return (
    <div>

      <div>
        <Head>
          <title>ActiveCases</title>
          <link rel="icon" href="/corona-nb.ico" />
        </Head>
        <body className="container">
          <h1 className="title is-1 has-text-white-ter has-text-centered mx-6">
            Welcome to Active Cases! Choose a state:
          </h1>
          <div className="columns is-mobile is-multiline">
            {links}
          </div>
        </body>

        {/*
        <footer className="footer">
          <p className="has-text-grey-lighter mx-4">All of the code for this website is hosted on <a href="https://github.com/VR314/active-cases" ><img height="16" width="16" src="https://unpkg.com/simple-icons@v3/icons/github.svg" /></a></p>
        </footer>
        */}
      </div>
    </div>
  )
}
