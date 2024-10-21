document.getElementById('button-a').addEventListener('click', function() {
    fetch('https://tlqkf-tsq3.onrender.com/api/button-a')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText = data.message;
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('button-b').addEventListener('click', function() {
    fetch('https://tlqkf-tsq3.onrender.com/api/button-b') // B 버튼의 엔드포인트
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText = data.message;
        })
        .catch(error => console.error('Error:', error));
});
