const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // HTTP 요청을 보내기 위한 라이브러리 추가

const app = express();
const PORT = process.env.PORT || 10000;

app.use(bodyParser.json());
app.use(express.static('public')); // 정적 파일을 제공하기 위한 설정

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // HTML 파일 제공
});

// ESP32의 URL을 설정하세요
const ESP32_URL = 'http://<ESP32_IP_ADDRESS>'; // ESP32의 IP 주소를 입력하세요

app.post('/button-a', (req, res) => {
    console.log('A 버튼이 눌렸습니다.');
    
    // ESP32로 A 버튼 눌림을 알리는 코드
    axios.post(`${ESP32_URL}/button-a`) // ESP32에 POST 요청
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
    
    // ESP32로 B 버튼 눌림을 알리는 코드
    axios.post(`${ESP32_URL}/button-b`) // ESP32에 POST 요청
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
