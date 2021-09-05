import React, { Component, useState, useEffect } from 'react'
import { Table, Form } from 'react-bootstrap'
import dats from './data.json'

const ListMateri = () => {
    const [listRow, setListRow] = useState(dats.rowsMateri)
    const [action, setAction] = useState(0)
    const [search, setSearch] = useState('')

    useEffect(() => {
        if(action !== 0) {
            alert(action)
        }
        return () => {
            
        };
    }, [action]);

    useEffect(() => {
        if(search !== '') {
            let dats = listRow.filter( 
                e => e.materi.toLowerCase().includes(search) 
                     
            )
            setListRow(dats)
        } else {
            setListRow(dats.rowsMateri)
        }
        
        return () => {
            // cleanup
        };
    }, [search]);

    return (
        <>
            <h1>Materi Pembelajaran</h1>
            <hr />

            <Form.Control style={{width:'25%'}} type="text" onKeyUp={(e) => setSearch(e.target.value)} placeholder="Search By Materi .." />  

            <h3>{search}</h3>

            <Table striped bordered hover size="sm" className="mt-4">
                <thead>
                    <tr>
                        <th className="text-center">No</th>
                        <th>Materi</th>
                        <th>Link Materi</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listRow.map((li, key) => {
                        return (
                            <tr key={li.id}>
                                <td align="center">{key + 1}.</td>
                                <td>{li.materi}</td>
                                <td>{li.link}</td>
                                <td align="center">
                                    <a className="btn btn-sm btn-danger" onClick={(e) => setAction(`https://localhost/materi-pembelajaran/edit/${li.id}`)} href="#" title="Edit"><i className="fa fa-pencil"></i></a>
                                    &nbsp;&nbsp;
                                    <a className="btn btn-sm btn-primary" onClick={(e) => setAction(`https://localhost/materi-pembelajaran/delete/${li.id}`)} href="#" title="Delete"><i className="fa fa-trash"></i></a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default ListMateri;