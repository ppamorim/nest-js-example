import { UsersService } from './users.service';

describe('UsersService', () => {
  describe('findUserById', () => {
    it('should return a user', async () => {
      const dto = {
        id: 123,
      };
      const service = new UsersService();
      expect(await service.findUserById(dto)).toEqual({ name: `User ${123}` });
    });
  });
});
