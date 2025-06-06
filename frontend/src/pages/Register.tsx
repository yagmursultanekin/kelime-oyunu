import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/signup', { name, email, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Kayıt başarısız oldu.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Kayıt Ol</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="İsim" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-block">Kayıt Ol</button>
              </div>
              <div className="text-center mt-2">
                <Link to="/login">Giriş</Link>
              </div>
            </form>
            {message && <p className="mt-3 text-center">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
