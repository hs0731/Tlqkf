const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
//const port = process.env.PORT || 3000;
const port = process.env.PORT || 10000;

app.use(cors());
app.use(bodyParser.json());

// 기본 경로
app.get('/', (req, res) => {
    res.send('AGV Route Guide Server is running');
});

// 경로 설정 API
app.post('/set-route', (req, res) => {
    const { userLocation, destination } = req.body;
    // 여기에 경로 처리 로직 추가
    console.log(`User Location: ${userLocation}, Destination: ${destination}`);
    res.json({ message: 'Route set successfully' });
    // ESP32에 위치 정보 전송 로직 추가

    const { button } = req.body;
    console.log(button); // 버튼 눌림 메시지 출력
    res.json({ message: '응답을 성공적으로 수신했습니다.' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
