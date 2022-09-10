import { SequelizeStorage, Umzug } from "umzug";
class MigrationsRunner {
  constructor(private db: any) { }
  public async run() {
    const umzug = new Umzug({
      migrations: {
        glob: './migrations/*.js',
        resolve: ({ name, path, context }) => {
          const migration = require(path || '')
          return {
            name,
            up: async () => migration.up(context, this.db.Sequelize),
            down: async () => migration.down(context, this.db.Sequelize),
          }
        },
      },
      context: this.db.sequelize.getQueryInterface(),
      storage: new SequelizeStorage({ sequelize: this.db.sequelize }),
      logger: console,

    });
    await umzug.up();
  }

}

export {
  MigrationsRunner
}