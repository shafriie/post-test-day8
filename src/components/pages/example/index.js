import React, { Component } from 'react';
import { Table, Image } from 'react-bootstrap'
import axios from 'axios'

class ExampleClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listRow: []
        }

    }

    componentDidMount() {
        this.getRows()
    }

    async getRows() {

        let urlAPI = `https://reqres.in/api/users`
        let res = await axios.get(urlAPI).then(res => {
            return res.data.data
        }).catch(err => {
            console.log(err)
        })

        this.setState((state, props) => {
            return {
                listRow: state.listRow.concat(res)
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Example Request Axios</h1>
                <hr />

                <Table striped bordered hover size="sm" className="mt-4 mb-5">
                    <thead>
                        <tr>
                            <th className="text-center">No</th>
                            <th>Photo</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listRow.map((li, key) => {
                            return (
                                <tr key={li.id}>
                                    <td align="center">{key + 1}.</td>
                                    <td>
                                        <Image style={{width: '70px'}} src={li.avatar} fluid />
                                    </td>
                                    <td>{li.email}</td>
                                    <td>{li.first_name}</td>
                                    <td>{li.last_name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

            </React.Fragment>
        );
    }
}

export default ExampleClass;