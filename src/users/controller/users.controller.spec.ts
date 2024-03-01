import { UsersController } from './users.controller';

describe('UsersController', () => {
  describe('findUserById', () => {
    it('should return a user', async () => {
      const service: any = {
        findUserById: jest.fn((dto) => {
          expect(dto.id).toEqual(123);
          return {
            name: 'User 123',
          };
        }),
      };
      const cotroller = new UsersController(service);
      const user = await cotroller.findUserById({ id: 123 });
      expect(user.name).toEqual('User 123');
    });
  });
});
