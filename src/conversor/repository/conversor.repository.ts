import { ConversorEntity } from '../entities/conversor.entity';

export abstract class ConversorRepository {
  abstract save(conversor: ConversorEntity): Promise<ConversorEntity>;
  abstract findAll(): Promise<ConversorEntity[]>;
  abstract findById(id: number): Promise<ConversorEntity | null>;
  abstract update(id: number, conversor: ConversorEntity): Promise<ConversorEntity>;
  abstract delete(id: number): Promise<void>;
}
