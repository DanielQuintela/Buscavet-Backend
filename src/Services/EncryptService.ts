// import * as bcrypt from 'bcrypt';

// export class EncryptService implements IEncryptService{
//     private readonly saltRounds = bcrypt.genSaltSync(10);

//     encryptPassword(senha: string){
//         return bcrypt.hashSync(senha, this.saltRounds);
//     }

//     comparePassword(senha: string, hash: string) {
//         return bcrypt.compareSync(senha, hash);
//     }
// }


// interface IEncryptService {
//     encryptPassword(senha: string): string,
//     comparePassword(senha: string, hash: string): Promise<boolean>
// }

//Criei essa versão em ts para alguns testes