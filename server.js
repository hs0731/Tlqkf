const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(bodyParser.json());
app.use(express.static('public')); // 정적 파일을 제공하기 위한 설정

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // HTML 파일 제공
});

app.post('/button-a', (req, res) => {
    console.log('A 버튼이 눌렸습니다.');
    // ESP32로 A 버튼 눌림을 알리는 코드 추가
    res.json({ message: 'A 버튼이 눌렸습니다.' });
});

app.post('/button-b', (req, res) => {
    console.log('B 버튼이 눌렸습니다.');
    // ESP32로 B 버튼 눌림을 알리는 코드 추가
    res.json({ message: 'B 버튼이 눌렸습니다.' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
