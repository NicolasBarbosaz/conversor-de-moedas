import { ConversorEntity } from '../entities/conversor.entity';

export abstract class ConversorRepository {
      
    abstract save(conversor: ConversorEntity): Promise<ConversorEntity>;

    abstract findAll(): Promise<ConversorEntity[]>;

    abstract findByid(id: number) : Promise<ConversorEntity | null>;

    abstract delete(id: number) : Promise<void>;
     


}