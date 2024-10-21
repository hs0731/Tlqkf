const express = require('express');
const fetch = require('node-fetch'); // HTTP 요청을 위해 필요
const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공 (HTML, JS)
app.use(express.static('public'));

// ESP32 IP 주소 (공인 IP로 변경)
const esp32Ip = "http://172.30.1.29"; // ESP32의 공인 IP 주소

// A 버튼 요청 처리
app.get('/api/button-a', async (req, res) => {
    try {
        const response = await fetch(`${esp32Ip}/api/button-a`);
        const data = await response.json();
        res.json({ message: data.message });
    } catch (error) {
        res.status(500).json({ message: "ESP32와의 통신 오류" });
    }
});

// B 버튼 요청 처리
app.get('/api/button-b', async (req, res) => {
    try {
        const response = await fetch(`${esp32Ip}/api/button-b`);
        const data = await response.json();
        res.json({ message: data.message });
    } catch (error) {
        res.status(500).json({ message: "ESP32와의 통신 오류" });
    }
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
