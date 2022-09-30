import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Corridas from '../models/Corridas';
import User from '../models/User';
import Reserves from '../models/Reserves';

const models = [Corridas, User, Reserves];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
