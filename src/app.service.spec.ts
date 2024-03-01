import { AppService } from './app.service';

describe('AppService', () => {
  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const service = new AppService();
      expect(service.getHello()).toBe('Hello World!');
    });
  });
});
