import {Database, Model} from 'mongorito';


class InsurancePolicyModel extends Model {}

global.Connections.connectionsStarted[0].connection.register(InsurancePolicyModel);

export default InsurancePolicyModel;