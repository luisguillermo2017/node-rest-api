import app from "./app.js";

app.listen(app.get("port"));

console.log('\n API REST - Escuchando en el puerto #', app.get("port") ,'\n');