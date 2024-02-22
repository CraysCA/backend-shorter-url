import models from "../db/models";
import connection from "../db/sequelize";

export default class UrlRepository {
  models: object;
  urlModel: any;
  constructor() {
    this.models = models;
    this.urlModel = models.url;
  }

  async getUrl(hash: string) {
    try {
      return;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  async createUrl(data: object) {
    try {
      return await this.urlModel.create(data);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
}
