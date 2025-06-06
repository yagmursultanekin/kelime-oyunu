import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Word() {
    const [english, setEnglish] = useState('');
    const [turkish, setTurkish] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/words/create-word', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ english, turkish, image }),
            });
            const data = await response.json();
            if (response.ok) {
                setMessage('Kelime başarıyla eklendi!');
                setEnglish('');
                setTurkish('');
                setImage('');
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error('Kelime eklenirken bir hata oluştu:', error);
        }
    }

    const handleChangeEnglish = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEnglish(e.target.value);
    };

    const handleChangeTurkish = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setTurkish(e.target.value);
    };

    const handleChangeImage = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setImage(e.target.value);
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="English"
                            value={english}
                            onChange={handleChangeEnglish}
                            required
                        />
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Turkish"
                            value={turkish}
                            onChange={handleChangeTurkish}
                            required
                        />
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Image URL"
                            value={image}
                            onChange={handleChangeImage}
                            required
                        />
                        <div className="d-flex">
                            <button type="submit" className="btn btn-primary me-2">Add Word</button>
                            <Link to="/Main" className="btn btn-primary" style={{ textDecoration: 'none' }}>Anasayfa</Link>
                        </div>
                        {message && <p className="mt-3" style={{ color: 'white' }}>{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Word;
