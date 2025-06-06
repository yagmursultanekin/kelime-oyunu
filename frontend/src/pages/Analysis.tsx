import React, { useState, useEffect } from 'react';
import { WordService } from '../service/WordService';
import { Link } from 'react-router-dom';

interface AnalysisItem {
    topic: string;
    learnedWords: number;
    totalWords: number;
}

function AnalysisReport() {
    const [analysisData, setAnalysisData] = useState<AnalysisItem[]>([]);

    useEffect(() => {
        async function fetchAnalysisData() {
            try {
                const data = await WordService.getAnalysis();
                setAnalysisData(data);
            } catch (error) {
                console.error('Error fetching analysis data:', error);
            }
        }

        fetchAnalysisData();
    }, []);

    async function printAnalysisReport() {
        try {
            window.print();
        } catch (error) {
            console.error('Error printing analysis report:', error);
        }
    }

    return (
        <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '20px' }}>
            <h2>Analysis Report</h2>
            <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '10px' }}>Topic</th>
                        <th style={{ border: '1px solid black', padding: '10px' }}>Learned Words</th>
                        <th style={{ border: '1px solid black', padding: '10px' }}>Total Words</th>
                        <th style={{ border: '1px solid black', padding: '10px' }}>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {analysisData.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '10px' }}>{item.topic}</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}>{item.learnedWords}</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}>{item.totalWords}</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}>{((item.learnedWords / item.totalWords) * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={printAnalysisReport} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Print Report</button>
            <Link to="/Main" className='btn btn-primary' style={{ color: 'black', marginLeft: '20px', textDecoration: 'none', padding: '10px' }}>Homepage</Link>
        </div>
    );
}

export default AnalysisReport;
