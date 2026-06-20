import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { InvoiceModule } from './invoice/invoice.module';
import { BusinessModule } from './business/business.module';
import { WalletService } from './wallet/wallet.service';

@Module({
  imports: [UserModule, InvoiceModule, BusinessModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, WalletService],
  exports: [PrismaService],
})
export class AppModule {}
