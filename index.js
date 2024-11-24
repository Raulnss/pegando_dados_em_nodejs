const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log('server em http://localhost:3000');
});

app.use(express.json());
app.use(express.static(__dirname)); // Permite servir arquivos estáticos (HTML, CSS, JS)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/contact", (req, res) => {
    const email = req.body.email;
    console.log(email);
    
    // Envia uma resposta de volta para o cliente
    res.json({ message: `Email ${email} recebido com sucesso!` });
});
