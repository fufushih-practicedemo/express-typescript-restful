import { DataSource } from "typeorm";
import { TblPost } from "./src/models/entities/post.entities";
import { TblUser } from "./src/models/entities/user.entities";

const devDataSource = new DataSource({
  type: "better-sqlite3",
  database: "./main.sqlite",
  synchronize: true,
  logging: true,
  entities: [TblUser, TblPost],
  subscribers: [],
  migrations: []
})

const prodDataSoucre = new DataSource({
  type: "better-sqlite3",
  database: "./prod.sqlite",
  synchronize: true,
  logging: true,
  entities: [TblUser],
  subscribers: [],
  migrations: []
});

export const AppDataSource = function() {
  switch(process.env.NODE_ENV) {
    case 'development':
      return devDataSource;
      break;
    case 'production':
      return prodDataSoucre;
      break;
    default:
      return devDataSource;
      break;
  }
}

AppDataSource().initialize()
  .then(() => {
    console.log("Data source Init");
  })
  .catch((error) => console.log(`data soource err: ${error}`))