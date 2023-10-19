import db from '../config/dbConfig.js';
import BlacklistSchema from '../entity/BlacklistSchema.js';

export default class BlacklistController {
  static adicionarBlacklist = async (req, res) => {
    try {
      const { token, reason, expirationDate } = req.body;
      const blacklistRepository = db.manager.getRepository(BlacklistSchema);
      const newToken = await blacklistRepository.save({ token, reason, expirationDate });

      res.status(201).send(newToken);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static verificaTokenBlacklist = async (token) => {
    try {
      const blacklistRepository = db.manager.getRepository(BlacklistSchema);
      const tokenNaBlacklist = await blacklistRepository.findOne({ token });

      return !!tokenNaBlacklist;
    } catch (error) {
      throw new Error('Erro ao verificar token na Blacklist');
    }
  };

  static listarBlacklist = async (req, res) => {
    try {
      const blacklistRepository = db.manager.getRepository(BlacklistSchema);
      const tokens = await blacklistRepository.find();
      res.status(200).json(tokens);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar tokens na blacklist' });
    }
  };

  static removerBlacklist = async (req, res) => {
    try {
      const { token } = req.params;
      const blacklistRepository = db.manager.getRepository(BlacklistSchema);
      const tokenInBlacklist = await blacklistRepository.findOne({ token });

      if (tokenInBlacklist) {
        await blacklistRepository.remove(tokenInBlacklist);
        res.status(200).json({ message: 'Token removido da blacklist' });
      } else {
        res.status(404).json({ message: 'Token não encontrado na blacklist' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao remover token da blacklist' });
    }
  };

  static async limpaTokensExpirados(req, res) {
    try {
      const blacklistRepository = db.manager.getRepository(BlacklistSchema);

      const currentDate = new Date();

      await blacklistRepository
        .createQueryBuilder()
        .delete()
        .where('expirationDate <= :currentDate', { currentDate })
        .execute();

      res.status(204).send();
    } catch (error) {
      res.status(500).send({ message: 'Erro ao limpar tokens expirados' });
    }
  }
}
