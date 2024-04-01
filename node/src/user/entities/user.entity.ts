import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql'
import { MaxLength } from 'class-validator';
import { Task } from 'src/task/entities/task.entity';

@Index('user_pkey', ['id'], { unique: true })
@Entity('user', { schema: 'public' })
@ObjectType()
export class User {
  @Field(() => Int, {})
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Field(() => String)
  @MaxLength(64)
  @Column('character varying', { name: 'name', length: 64 })
  name: string;

  @Field(() => String)
  @Column('character varying', {
    name: 'email'
  })
  email: string;

  @Field(() => String, { nullable: true })
  @Column('text', { name: 'password', nullable: true })
  password: string | null;

  @Field(() => String, { nullable: true })
  @Column('character varying', {
    name: 'username',
    nullable: true,
    unique: true,
    length: 64,
  })
  username: string | null;

  @Field(() => [Task], { nullable: true })
  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
