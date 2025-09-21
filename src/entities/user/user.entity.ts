import { Entity, Column } from 'typeorm'
import { EntityDefaults } from 'src/entities/entity-defaults'

@Entity('user')
export class UserEntity extends EntityDefaults {
  @Column()
  password: string

  @Column({ unique: true })
  email: string
}
