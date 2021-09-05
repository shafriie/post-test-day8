import React, { Component, useState, useEffect } from 'react'
import { Table, Form } from 'react-bootstrap'
import dats from './data.json'
import './style.scss'
import $ from 'jquery'

const PageTugas = () => {
    const [listRow, setListRow] = useState(dats.rowsTugas)
    const [aktif, setAktif] = useState(0)

    function setHoverSample(id) {
        $('tr').removeClass('hoverTable')
        $(`tr:eq(${id})`).addClass('hoverTable')
    }

    useEffect(() => {
        if (aktif !== 0) {
            setHoverSample(aktif)
        } else {
            $('tr').removeClass('hoverTable')
        }

        return () => {
            // console.log('test')
        }
    }, [aktif])

    return (
        <>
            <h1>Tugas & Kuis</h1>
            <hr />

            <Form.Control style={{ width: '25%' }} type="text" placeholder="Search .." />

            <Table bordered size="sm" className="mt-4">
                <thead>
                    <tr>
                        <th className="text-center">No</th>
                        <th>Tugas & Kuis</th>
                        <th>Topik</th>
                        <th>Link Tugas & Kuis</th>
                    </tr>
                </thead>
                <tbody>
                    {listRow.map((li, key) => {
                        return (
                            <tr onMouseOut={(e) => setAktif(0)} onMouseOver={(e) => setAktif(li.id)} key={li.id}>
                                <td align="center">{key + 1}.</td>
                                <td>{li.tugas}</td>
                                <td>{li.topic}</td>
                                <td>{li.link}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default PageTugas