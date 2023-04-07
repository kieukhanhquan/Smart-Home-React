
const express = require('express');
const app = express();
const port = 3006;


// nhận tin nhắn từ chủ đề và trả về dữ liệu dưới dạng JSON

var mqtt = require("mqtt");
let client  = mqtt.connect("mqtt://nguyenha25012002:aio_AyIx45a5EyphYmOOgPGYUpaVzaIk@io.adafruit.com",8883);
client.on('connect', () => {
    // sub đúng kênh để nhận dữ liệu
    client.subscribe("nguyenha25012002/feeds/temperature");
    console.log('connected' );
    
        
});
    
    client.on('reconnect', () => {
      client.subscribe("nguyenha25012002/feeds/temperature");
      console.log('reconnected ' );
    });
    
    client.on('error', (err) => console.log('error', err));
    
    // client.on('offline', () => connect = false);
    
    // client.on('close', () => connect = false);
    
    
app.get('/connect', function (req, res) {
    client.on('message', function (topic, message) {
        console.log({ data: message.toString() });
        res.json({ data: message.tyoString() });
    });
});
      
app.listen(port, () => {
    console.log(`Đang lắng nghe trên http://localhost:${port}`);
});
      