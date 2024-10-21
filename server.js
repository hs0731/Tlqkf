const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // CORS 미들웨어 추가

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors()); // CORS 설정 추가
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const ESP32_URL = 'http://172.30.1.29'; // ESP32의 IP 주소를 입력하세요

app.post('/button-a', (req, res) => {
    console.log('A 버튼이 눌렸습니다.');
    axios.post(`${ESP32_URL}/button-a`)
        .then(response => {
            console.log('ESP32 응답:', response.data);
        })
        .catch(error => {
            console.error('ESP32와의 통신 오류:', error);
        });
    res.json({ message: 'A 버튼이 눌렸습니다.' });
});

app.post('/button-b', (req, res) => {
    console.log('B 버튼이 눌렸습니다.');
    axios.post(`${ESP32_URL}/button-b`)
        .then(response => {
            console.log('ESP32 응답:', response.data);
        })
        .catch(error => {
            console.error('ESP32와의 통신 오류:', error);
        });
    res.json({ message: 'B 버튼이 눌렸습니다.' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
