import React, { useState, useEffect } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';

function TugasKeempat() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        readGoogleSheet();
    }, []);

    const readGoogleSheet = () => {
        fetch("https://sheetdb.io/api/v1/lxx4i0lfmhbg8")
            .then((response) => response.json())
            .then((data) => {
                // Filter data to only include entries with 'Tugas 1' in 'tugas_ke' column
                const filteredData = data.filter((item) =>
                    item.tugas_ke.toLowerCase() === 'tugas 4'
                );
                setData(filteredData);
                setFilteredData(filteredData); // This line might be redundant now
            })
            .catch((error) => console.error("Error fetching data:", error));
    };
    
    
    // Logic for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Function to handle search term change
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
        filterData(event.target.value);
    };

    // Function to filter data based on search term
    const filterData = (term) => {
        const filtered = data.filter((item) =>
            item.nama.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div>
            <h4 className='mb-4'>Rekap pengumpulan Tugas 4</h4>
            <Form.Group controlId="searchTerm" className='mb-3'>
                <Form.Control
                    type="text"
                    placeholder="Cari berdasarkan nama"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
            </Form.Group>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>NIM</th>
                        <th>Tugas</th>
                        <th>Url Github</th>
                        <th>Waktu</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{rowIndex + 1}</td>
                            {Object.values(row).map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination>
                {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
                    <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
}

export default TugasKeempat;