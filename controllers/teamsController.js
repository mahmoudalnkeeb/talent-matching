const Team = require('../models/Team');
const factory = require('./handlerFactory');

exports.getProject = factory.getOne(Team);
exports.getAllTeams = factory.getAllPagination(Team);
exports.createTeam = factory.createOne(Team);
exports.updateTeam = factory.updateOne(Team);
exports.deleteTeam = factory.deleteOne(Team);
