import { BaseController } from '../../@core/base';
import * as Lodash from 'lodash';
import PolicyTypeModel from '../models/PolicyTypeModel';

class PolicyTypesController extends BaseController {

	constructor() {
		super();
	}

	index() {
		return async (req, res) => {
			try {
				let policyTypes : any;
				policyTypes = await PolicyTypeModel.find();
				res.status(200).json(policyTypes);
			} catch (error) {
				console.error(error);
				res.status(500).json(error);
			}
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
				let newPolicy: any;
				let result: any;

				newPolicy = new PolicyTypeModel({
					name: 'Todo riesgo',
					value: 900000,
					insurancePolicys: []
				});
				result = await newPolicy.save();
				result = newPolicy.get('_id');
				res.send({ _id: result });
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

export default PolicyTypesController;