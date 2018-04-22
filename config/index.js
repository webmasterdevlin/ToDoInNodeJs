import dbConfigValues from './db.config'

export default function() {
    return `mongodb://${dbConfigValues.username}:${dbConfigValues.password}@ds137089.mlab.com:37089/tododb`;
}