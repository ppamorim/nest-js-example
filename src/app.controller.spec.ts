import { AppController } from './app.controller';

describe('AppController', () => {
  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const service: any = {
        getHello: jest.fn(() => 'Hello World!'),
      };
      const controller = new AppController(service);
      expect(controller.getHello()).toBe('Hello World!');
    });
  });
});
