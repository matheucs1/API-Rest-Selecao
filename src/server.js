import app from "./app.js";

const Port = process.env.PORT || 3000

app.listen(Port, () => {
    console.log(`Servidor rodando em: http://localhost:${Port}`);
})
