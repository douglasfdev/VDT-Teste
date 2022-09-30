import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Corridas from '../models/Corridas';
import User from '../models/User';

const models = [Corridas, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
