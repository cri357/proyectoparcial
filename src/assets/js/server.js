const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/send-message', async (req, res) => {
    const phoneNumber = req.query.phoneNumber;
    const message = req.query.message;

    try {
        const response = await axios.post('https://graph.facebook.com/v19.0/252864301254010/messages', {
            to: phoneNumber,
            type: 'text',
            text: {
                body: message
            }
        }, {
            headers: {
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
                'Content-Type': 'application/json'
            }
        });

        res.send('Mensaje enviado con éxito');
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        res.status(500).send('Error al enviar el mensaje');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:4200${port}`);
});