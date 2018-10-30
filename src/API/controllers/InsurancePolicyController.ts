import * as Lodash from 'lodash';
import { ObjectId } from 'mongorito';
import { BaseController } from '../../@core/base';
import InsurancePolicyModel from '../models/InsurancePolicyModel';


class InsurancePolicyController extends BaseController {

	constructor() {
		super();
	}

	index() {
		return async (req, res) => {
			res.send(`Hi i'm a resource store ${JSON.stringify(req.body)}`);
		}
	}

	show() {
		return async (req, res) => {
			res.send(`Hi i'm a resource show >> ${req.params.id}`);
		}
	}

	store() {
		return async (req, res) => {
			try {
				let identification = req.body.identification;
				let firstName = req.body.firstName;
				let lastName = req.body.lastName;
				let policyType = req.body.policyType;
				let policyFound = req.policyFound;
				let newInsurance : any;
				let result;
				let parseObj;

				newInsurance = new InsurancePolicyModel({
					identification,
					firstName,
					lastName,
					policyType : ObjectId(policyType)
				});
				result = await newInsurance.save();
				result = newInsurance.get('_id');
				res.status(200).json(policyFound);

			} catch (error) {
				console.error(error);
				res.status(500).json(error);
			}
		}
	}

	update() {
		return async (req, res) => {
			res.send(`Hi i'm a resource update >> ${req.params.id}`);
		}
	}


	destroy() {
		return async (req, res) => {
			res.send(`Hi i'm a resource destroy >> ${JSON.stringify(req.params.id)}`);
		}
	}

}

export default InsurancePolicyController;