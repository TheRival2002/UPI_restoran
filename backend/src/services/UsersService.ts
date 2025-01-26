import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';

// --------------------------------------------------------------------------------

export class UsersService {
    private readonly usersRepository = new UsersRepository();

    public async updateUser(user: User) {
        return this.usersRepository.update(user);
    }
}
