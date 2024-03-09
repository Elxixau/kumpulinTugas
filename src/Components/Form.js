import React, { useState } from 'react';
import "../Style/Form.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import character from '../Images/hero3.png';
import logoKM from '../Images/KM.png';
import logoUnmul from '../Images/unmul.png';
import logoPraktikum from '../Images/ICON.png';
import { SuccessNotification, ErrorNotification } from './Notification';
import Footer from './Footer';

export default function Form() {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  
  function Submit(e) {
    e.preventDefault(); // Prevent default form submission behavior
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    // Tambahkan input waktu_input
    formDatab.append("waktu_input", new Date().toLocaleString());

    fetch(
      "https://script.google.com/macros/s/AKfycbwc3Noo4eJH0YXmoEha3y8b3F8_95BUp8zx9XEk78brjGWmN20O9VVCLSD85F_43N7Syg/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubmissionSuccess(true);
        setSubmissionError(false);
        formEle.reset();
      })
      .catch((error) => {
        console.log(error);
        setSubmissionError(true);
        setSubmissionSuccess(false);
      });
  }
  return (
   
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh'}}>
        <Container>
            <Card className='mt-3 mb-3'>
                <Card.Body className='p-5'>
                    <div className='img-group'>
                        <img src={logoKM} alt='' style={{}}></img>
                        <img src={logoUnmul} alt='' style={{marginLeft:'5px'}}></img>
                        <img src={logoPraktikum} alt='' style={{marginLeft:'5px'}} ></img>
                    </div>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <img 
                            src={character} 
                            alt="student" 
                            className='img-fluid'
                            style={{ 
                            borderRadius: '50%' 
                            }}>
                            </img>
                        </div>
                        <div className='col-lg-6'>
                            <h3>kumpulin<span>Tugas</span></h3>
                            <p className='text-muted'>By Asprak Pemrograman Visual</p>
                            <div>
                            {submissionSuccess && (
                                <SuccessNotification/>
                            )}
                            {submissionError && (
                                <ErrorNotification/>
                            )}
                            <form className="form mt-5" onSubmit={(e) => Submit(e)}>
                                <div 
                                className="form-group mb-4">
                                <input 
                                id="nama" 
                                className="form-control mt-2 border-0 border-bottom" 
                                placeholder="Nama Lengkap" 
                                name="nama" 
                                type="text" />
                                </div>
                                <div className="form-group mb-4">
                                <input 
                                id="nim" 
                                className="form-control mt-2 border-0 border-bottom" 
                                placeholder="NIM" 
                                name="nim" 
                                type="text" />
                                </div>
                                <div className="form-group mb-4">
                                <select className="form-control mt-2 border-0 border-bottom" id="tugas_ke" placeholder="Tugas Ke-" name="tugas_ke">
                                    <option value="Tugas 1">Tugas 1</option>
                                    <option value="Tugas 2">Tugas 2</option>
                                    <option value="Tugas 3">Tugas 3</option>
                                    {/* Tambahkan opsi lainnya sesuai kebutuhan */}
                                </select>
                                </div>
                                <div className="form-group mb-4">
                                <input 
                                id="url_repositori" 
                                className="form-control mt-2 border-0 border-bottom" 
                                placeholder="Link Github anda" 
                                name="url_repositori" 
                                type="text" />
                                </div>
                                <input 
                                type="hidden" 
                                name="waktu_input" 
                                value={new Date().toLocaleString()} />
                                <div className='mt-4' style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                    <button className="btn btn-primary " type="submit">Submit</button>
                                    <div className='text-muted ' style={{fontSize:'12px', marginLeft:'20px'}}>
                                        "Cukup klik satu kali tombol submit dan tunggu hingga notifikasi muncul"
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Footer/>
        </Container>
      </div>
      
  );
}
