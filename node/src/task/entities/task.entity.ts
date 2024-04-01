import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql'
import { IsInt, IsNotEmpty, MaxLength } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { ResponseObject } from 'src/responseHelper/response.object';

@Index('task_pkey', ['id'], { unique: true })
@Entity('task', { schema: 'public' })
@ObjectType()
export class Task extends ResponseObject {
  @Field(() => Int, {})
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Field(() => String)
  @MaxLength(64)
  @Column('character varying', { name: 'title', length: 64 })
  title: string;

  @Field(() => String)
  @Column('character varying', {
    name: 'description',
    nullable: true,
  })
  description: string | null;

  @Field(() => String)
  @Column('enum', {
    name: 'status',
    enum: ['ACTIVE', 'INACTIVE'],
    default:'ACTIVE'
  })
  status: 'ACTIVE' | 'INACTIVE';

  @Field(() => Int, {})
  @IsNotEmpty()
  @IsInt()
  @Column('integer', { name: 'user_id' })
  user_id: number;

  @Field(() => User)
  @ManyToOne(() => User, user => user.tasks)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
