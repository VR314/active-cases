import { useRouter } from 'next/router'
import React, { useState } from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Display = () => {
    const router = useRouter()
    const { id } = router.query
    const { data, error } = useSWR(`/api/states/${id}`, fetcher)


    if (error) return (<p>Error... reload?</p>)
    if (!id || !data) return (<p>Loading...</p>)

    return (
        <section className="section has-background-primary is-fullheight">
            <p className="title has-text-centered has-text-light">{data.state}</p>
            <div className="container has-text-centered">
                <div className="columns">
                    {data.recovered && (
                        <div className="column">
                            <div className="box has-background-danger-light">
                                <p className="title is-2 has-text-danger">{data.active}</p>
                                <p className="subtitle has-text-dark">{`Cases Active`}</p>
                            </div>
                        </div>
                    )}
                    <div className="column">
                        <div className="box has-background-danger-light">
                            <p className="title is-2 has-text-danger ">{data.positive}</p>
                            <p className="subtitle has-text-dark">{`Cumulative Cases`}</p></div>
                    </div>
                    {data.recovered && (
                        <div className="column ">
                            <div className="box has-background-danger-light">
                                <p className="title is-2 has-text-success">{`${Math.floor(100 * data.recovered / data.positive).toFixed(1)}%`}</p>
                                <p className="subtitle has-text-dark">{`Estimated Percent Recovered (recovered / all positives)`}</p>
                            </div>
                        </div>
                    )}

                    <div className="column">
                        <div className="box has-background-danger-light">
                            <p className="title is-2 has-text-grey">{data.deaths}</p>
                            <p className="subtitle has-text-dark">{`Deaths`}</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box has-background-danger-light">
                            <p className="title is-2 has-text-grey">{(data.deaths * 1000 / data.population).toFixed(2)}</p>
                            <p className="subtitle has-text-dark">{`deaths per 1000 residents`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Display