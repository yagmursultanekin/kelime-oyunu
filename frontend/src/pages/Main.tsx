import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 text-center">
                    <h2>Ana Sayfa</h2>
                    <div className="d-flex justify-content-center mt-4">
                        <Link to="/Word" className="btn btn-primary me-2">
                            Kelime Ekleme Sayfası
                        </Link>
                        <Link to="/test" className="btn btn-primary me-2">
                            Test Sayfası
                        </Link>
                        <Link to="/Analysis" className="btn btn-primary">
                            Analiz Sayfası
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
