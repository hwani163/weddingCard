import nc from 'next-connect';
import database from './database';
import token from './token';
export const _public = nc().use(database);
export const _private = nc().use(database).use(token);
export const _instagram = nc().use(database).use(token);