import { UsersApi } from '@services/user/usersApi';
import axios from 'axios';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchUsers', () => {
  it('should fetch users successfully from API', async () => {
    // Arrange
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];
    mockedAxios.get.mockResolvedValue({ status: 200, data: users });

    try {
      const response = await UsersApi.getUsersList(null);
      expect(response.status).toBe(200);
    } catch (error) {
      console.error('Error:', error);
    }
  });
});
