const { json } = require('body-parser');
const restaurantRoute = require('./api/routes/restaurantRoutes')

describe('Testando execução do servidor', () => {
    it('should get server', () => {
        const server = require('./server');

        expect(server.port).toBe(3000)
    })
})