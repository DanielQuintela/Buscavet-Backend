import bcrypt from 'bcrypt';

export default function EncryptedService() {
  const saltRounds = 10;

  function encryptPassword(password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
  }

  function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }

  return {
    encryptPassword,
    comparePassword,
  };
}
