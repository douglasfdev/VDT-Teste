import app from './app';

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
  console.log(`CTRL + clique em http://localhost:${PORT}`);
});
