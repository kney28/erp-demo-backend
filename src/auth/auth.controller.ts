import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
@ApiTags('Autenticación')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: AuthDto })
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
