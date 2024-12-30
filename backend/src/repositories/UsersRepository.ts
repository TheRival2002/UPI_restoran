import { User } from '../entities/User';

// ----------------------------------------------------------------------

export class UsersRepository {
    private readonly database = require('./../database/db');

    public async create(user: User): Promise<User> {
        const query = 'INSERT INTO users (name, surname, username, email, password, role_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';

        return await this.database.query(query, [user.name, user.surname, user.username, user.email, user.password, user.role_id]);
    }

    public async findByUsername(username: string): Promise<User> {
        const query = 'SELECT * FROM users WHERE username = $1';
        const response = await this.database.query(query, [username]);

        return response.rows[0];
    }

    public async findByEmail(email: string): Promise<User> {
        const query = 'SELECT * FROM users WHERE email = $1';
        const response = await this.database.query(query, [email]);

        return response.rows[0];
    }
}