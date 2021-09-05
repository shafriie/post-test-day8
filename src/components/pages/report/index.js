import React, { useState } from 'react';
import dats from './data.json'
import { Form, Table, Tabs, Tab } from 'react-bootstrap'

const PageReport = () => {
    const [listRow, setListRow] = useState(dats.rowsReport)

    return (
        <>
            <h1>Report</h1>
            <hr />

            <Tabs defaultActiveKey="1" className="mb-3">
                <Tab eventKey="1" title="Absensi">
                    <Table striped bordered hover size="sm" className="mt-4">
                        <thead>
                            <tr>
                                <th className="text-center">No</th>
                                <th>Nama</th>
                                <th>NPP</th>
                                <th>Nama Kelas</th>
                                <th>Tanggal Absensi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listRow.map((li, key) => {
                                return (
                                    <tr key={li.id}>
                                        <td align="center">{key + 1}.</td>
                                        <td>{li.nama}</td>
                                        <td>{li.npp}</td>
                                        <td>{li.namaKelas}</td>
                                        <td>{li.tglAbsensi}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>

                </Tab>
                <Tab eventKey="2" title="Tugas & Kuis">
                    <h2>Sedang ada perbaikan .. </h2>
                </Tab>
                <Tab eventKey="3" title="Resume Materi">
                    <h2>Sedang ada perbaikan .. </h2>
                </Tab>
                <Tab eventKey="4" title="Report All">
                    <h2>Sedang ada perbaikan .. </h2>
                </Tab>
            </Tabs>
        </>
    );
}

export default PageReport;
