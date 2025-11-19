const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à DevFlow Solutions - E-commerce rodando!' });
});

app.get('/produtos', (req, res) => {
  res.json([
    { id: 1, nome: 'Camiseta', preco: 49.90 },
    { id: 2, nome: 'Calça Jeans', preco: 129.90 }
  ]);
});

// Só inicia quando executado diretamente (não nos testes)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;