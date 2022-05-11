import { Sequelize } from "sequelize"; 

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../data/serverdb.db'
});

export default sequelize;