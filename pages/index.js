import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Overlay from '../components/overlay'
import cookie from 'react-cookie';
import Link from 'next/link'

const states = { "AZ": "Arizona", "AL": "Alabama", "AK": "Alaska", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DC": "District of Columbia", "DE": "Delaware", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming" };

export default function Home() {
  //const [cookies, setCookies] = useState(cookie.load('location'));
  var links = []
  for (var state in states) {
    links.push((<div><Link href={"/states/" + state.toLowerCase()}><a>{states[state]}</a></Link>
      <br /></div>));
  }
  useEffect(() => { }, []);

  return (
    <div>

      <div>
        <Head>
          <title>ActiveCases</title>
          <link rel="icon" href="/corona-nb.ico" />
        </Head>

        <body className="container">
          <h1 className="title is-1">
            Welcome to Active-Cases!
          </h1>
          {links}
        </body>

        <footer>
          <p>this is the footer</p>
        </footer>

      </div>
    </div>
  )
}
