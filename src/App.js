import React from 'react';
import './Style/App.css';
import Form from './Components/Form';

function App() {
  return (
   
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh'}}>
        <Container>
          <Card>
            <Card.Body className='p-5'>
              <div className='img-group'>
                <img src={logoKM} alt='' style={{}}></img>
                <img src={logoUnmul} alt='' style={{marginLeft:'5px'}}></img>
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
                <h1>kumpulin<span>Tugas</span></h1>
                <p className='text-muted'>Developed by Elxixau</p>
                <div>
                {submissionSuccess && (
                    <div className="alert alert-success" role="alert">
                      Input Berhasill, Informasi Pengumpulan Tugas Anda Berhasil
                    </div>
                  ) }
                  <form className="form" onSubmit={(e) => Submit(e)}>
                    <div 
                    className="form-group mb-4">
                      <label htmlFor="nama">Nama :</label>
                      <input 
                      id="nama" 
                      className="form-control mt-2" 
                      placeholder="Nama Lengkap" 
                      name="nama" 
                      type="text" />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="nim">NIM :</label>
                      <input 
                      id="nim" 
                      className="form-control mt-2" 
                      placeholder="NIM" 
                      name="nim" 
                      type="text" />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="tugas_ke">Tugas Ke- :</label>
                      <select className="form-control mt-2" id="tugas_ke" placeholder="Tugas Ke-" name="tugas_ke">
                        <option value="Tugas 1">Tugas 1</option>
                        <option value="Tugas 2">Tugas 2</option>
                        <option value="Tugas 3">Tugas 3</option>
                        {/* Tambahkan opsi lainnya sesuai kebutuhan */}
                      </select>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="url_repositori">URL Repositori :</label>
                      <input 
                      id="url_repositori" 
                      className="form-control mt-2" 
                      placeholder="Link Github anda" 
                      name="url_repositori" 
                      type="text" />
                    </div>
                    {/* Tambahkan input hidden untuk waktu_input */}
                    <input 
                    type="hidden" 
                    name="waktu_input" 
                    value={new Date().toLocaleString()} />
                    <button className="btn btn-primary" type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
  );
}

export default App;
