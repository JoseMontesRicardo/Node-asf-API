import {Database, Model} from 'mongorito';


class PolicyTypeModel extends Model {}

global.Connections.connectionsStarted[0].connection.register(PolicyTypeModel);

export default PolicyTypeModel;   