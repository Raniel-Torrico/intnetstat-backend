import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.userRepo.findOne({ where: { Email: dto.Email } });
    if (existing) throw new ConflictException('Email already registered');

    const hash = await bcrypt.hash(dto.Password, 10);
    const user = this.userRepo.create({
      FirstName: dto.FirstName,
      MiddleName: dto.MiddleName ?? null,
      LastName: dto.LastName,
      Email: dto.Email,
      PasswordHash: hash,
      Role: dto.Role,
    });
    const saved = await this.userRepo.save(user);
    return { UserID: saved.UserID, Email: saved.Email, Role: saved.Role };
  }

  async login(dto: LoginDto) {
    const user = await this.userRepo.findOne({ where: { Email: dto.Email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const match = await bcrypt.compare(dto.Password, user.PasswordHash);
    if (!match) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.UserID, email: user.Email, role: user.Role };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: { UserID: user.UserID, Email: user.Email, Role: user.Role },
    };
  }
}