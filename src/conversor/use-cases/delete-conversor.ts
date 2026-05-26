import { Injectable, NotFoundException } from '@nestjs/common';
import { ConversorRepository } from '../repository/conversor.repository';

@Injectable()
export class DeleteConversorUseCase {
  constructor(private readonly conversorRepository: ConversorRepository) {}

  async execute(id: number): Promise<void> {
    const existingConversion = await this.conversorRepository.findByid(id);

    if (!existingConversion) {
      throw new NotFoundException(`Conversion with ID ${id} not found`);
    }

    await this.conversorRepository.delete(id);
  }
}
