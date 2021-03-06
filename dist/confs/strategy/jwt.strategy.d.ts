import { Repository } from 'typeorm';
import { Strategy } from 'passport-jwt';
import { User } from '../entity/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    validate(payload: any): Promise<User>;
}
export {};
