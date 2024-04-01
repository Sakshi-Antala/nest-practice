import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { ResponseMsg } from 'src/responseHelper/response';
import { CreateUserInput } from './dto/create-user-input.dto';
import { userRepository } from './repository/user.repository';
import { UpdateUserInput } from './dto/update-user-input.dto';
import { generatePassword } from 'src/utils/helper';

@Injectable()
export class UserService {
    async createUser(data:CreateUserInput){
        data.password = await generatePassword(data.password);
        return await userRepository.save(data);
    }

    async getAllUser(){
        return await userRepository.find({relations:{tasks:true}});
    }

    async getUserById(id:number){
        return await userRepository.findOne({where: { id }});
    }

    async updateUser(id:number,data:UpdateUserInput){
        const res=await userRepository.update(id,data)
        if (res && res.affected > 0) {
            return await userRepository.findOne({ where: { id } });
          } else {
            throw new BadRequestException("Something Went Wrong")
          }
    }

    async removeUser(id:number){
        const res=await userRepository.delete(id)
        if (res && res.affected > 0) {
            return new ResponseMsg("Delete successfully.", true)
        } else {
            return new ResponseMsg("Something Went Wrong", false)
        }
    }

    async findOne(options): Promise<any> {
        const data = await userRepository.findOne(options);
        return data;
    }
}
