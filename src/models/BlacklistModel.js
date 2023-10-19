export default class BlacklistModel {
  constructor(idBlacklist, token, reason, expirationDate) {
    this.idBlacklist = idBlacklist;
    this.token = token;
    this.reason = reason;
    this.expirationDate = expirationDate;
  }
}
