import React from 'react';

function SuccessNotification() {
  return (
    <div className="alert alert-success" role="alert">
      Terimakasih, Pengumpulan Tugas Anda Berhasil
    </div>
  );
}

function ErrorNotification() {
  return (
    <div className="alert alert-danger" role="alert">
      Input Gagal, Terjadi kesalahan saat mengirimkan data
    </div>
  );
}

export { SuccessNotification, ErrorNotification };
