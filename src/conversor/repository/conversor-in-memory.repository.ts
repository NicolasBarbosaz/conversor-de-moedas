import { Injectable } from '@nestjs/common';
import { ConversorRepository } from './conversor.repository';
import { ConversorEntity } from '../entities/conversor.entity';

@Injectable()
export class InMemoryConversorRepository implements ConversorRepository {
  private conversions: ConversorEntity[] = [];
  private nextId = 1;

  // eslint-disable-next-line @typescript-eslint/require-await
  async save(conversor: ConversorEntity): Promise<ConversorEntity> {
    if (!conversor.id) {
      conversor.id = this.nextId++;
      this.conversions.push(conversor);
    } else {
      const index = this.conversions.findIndex((c) => c.id === conversor.id);
      if (index !== -1) {
        this.conversions[index] = conversor;
      }
    }
    return conversor;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async findAll(): Promise<ConversorEntity[]> {
    return this.conversions;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async findById(id: number): Promise<ConversorEntity | null> {
    return this.conversions.find((c) => c.id === id) ?? null;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async delete(id: number): Promise<void> {
    this.conversions = this.conversions.filter((c) => c.id !== id);
  }
}
