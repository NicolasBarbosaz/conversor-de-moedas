import { Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service';
import { ConversorRepository } from './conversor.repository';
import { ConversorEntity } from '../entities/conversor.entity';

@Injectable()
export class PrismaRepository implements ConversorRepository {
  constructor(private prisma: PrismaService) {}

  async save(conversor: ConversorEntity): Promise<ConversorEntity> {
    const createdConversor = await this.prisma.conversor.create({
      data: {
        amount: conversor.amount,
        fromCurrency: conversor.fromCurrency,
        usdValue: conversor.usdValue,
        eurValue: conversor.eurValue,
      },
    });
    return createdConversor;
  }

  async findAll(): Promise<ConversorEntity[]> {
    return this.prisma.conversor.findMany();
  }

  async findById(id: number): Promise<ConversorEntity | null> {
    return this.prisma.conversor.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    conversor: Partial<ConversorEntity>,
  ): Promise<ConversorEntity> {
    return this.prisma.conversor.update({
      where: { id },
      data: {
        amount: conversor.amount,
        fromCurrency: conversor.fromCurrency,
        usdValue: conversor.usdValue,
        eurValue: conversor.eurValue,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.conversor.delete({
      where: { id },
    });
  }
}
