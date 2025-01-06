import { User } from '../entities/User';

// ----------------------------------------------------------------------

export class UsersRepository {
    private readonly database = require('./../database/db');

    public async create(user: User): Promise<User> {
        const query = 'INSERT INTO users (name, surname, username, email, password, role_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
        const response = await this.database.query(query, [user.name, user.surname, user.username.toLowerCase(), user.email.toLowerCase(), user.password, user.role_id]);

        return response.rows[0];
    }

    public async findByUsername(username: string): Promise<User> {
        const query = 'SELECT * FROM users WHERE LOWER(username) = LOWER($1)';
        const response = await this.database.query(query, [username]);

        return response.rows[0];
    }

    public async findByEmail(email: string): Promise<User> {
        const query = 'SELECT * FROM users WHERE LOWER(email) = LOWER($1)';
        const response = await this.database.query(query, [email]);

        return response.rows[0];
    }
}
