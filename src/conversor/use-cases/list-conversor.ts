import { Injectable } from '@nestjs/common';
import { ConversorEntity } from '../entities/conversor.entity';
import { ConversorRepository } from '../repository/conversor.repository';

@Injectable()
export class ListConversorUseCase {
  constructor(private readonly conversorRepository: ConversorRepository) {}

  async findAll(): Promise<ConversorEntity[]> {
    return this.conversorRepository.findAll();
  }

  async findById(id: number): Promise<ConversorEntity | null> {
    return this.conversorRepository.findByid(id);
  }
}
