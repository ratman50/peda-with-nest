import { Module, UseFilters } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Module({
    providers:[UsersService]
})
export class SharedModule {}
