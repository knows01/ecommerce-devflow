const request = require('supertest');
const app = require('../index');

describe('Testes da API E-commerce', () => {
  it('deve retornar mensagem de boas-vindas', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Bem-vindo à DevFlow Solutions - E-commerce rodando!');
  });

  it('deve listar produtos', async () => {
    const res = await request(app).get('/produtos');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});