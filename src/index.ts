import app from "./server/index.server";

app.listen(3000, () => {
  console.log(`El servidor está corriendo en el puerto ${3000}`);
});
