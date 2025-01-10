import { JwtUserDto } from './entities/types/user.dto';

// --------------------------------------------------------------

declare global {
    namespace Express {
        interface Request {
            user?: JwtUserDto;
        }
    }
}
