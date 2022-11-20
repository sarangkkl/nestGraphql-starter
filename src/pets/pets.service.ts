import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';
import { CreatePetInput } from './dto/create-pet-input';

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>) {}

    async createPet(createPetInput:CreatePetInput): Promise<Pet> {
        
        const newPet = this.petRepository.create(createPetInput);
        return await this.petRepository.save(newPet);

    }
    async findAll():Promise<Pet[]>{
        return await this.petRepository.find();
    }
}
