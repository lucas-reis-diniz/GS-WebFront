import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './Webcam.scss';

const Webcam = () => {
    const videoRef = useRef(null);
    const [results, setResults] = useState([]);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            })
            .catch(err => console.error("Error accessing webcam: ", err));

        const intervalId = setInterval(() => {
            captureImage();
        }, 1000); // Captura e envia a imagem a cada 1 segundo

        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    }, []);

    const captureImage = () => {
        if (!videoRef.current) return;

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
            const formData = new FormData();
            formData.append('image', blob, 'webcam.jpg');
            axios.post('http://127.0.0.1:5000/detect', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
                .then(response => {
                    setResults(response.data.results);
                })
                .catch(error => console.error("Error uploading image: ", error));
        }, 'image/jpeg');
    };

    return (
        <div className="webcam-container">
            <h2>Aponte a câmera para um produto e aguarde a descrição aparecer abaixo:</h2>
            <video ref={videoRef} className="webcam-video"></video>
            <div className="results-container">
                {results.map((result, index) => (
                    <div key={index} className="result">
                        <p>Produto: {result.class === "Trash plastic"?"Plástico":""}</p>
                        <p>Descrição: {result.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Webcam;
