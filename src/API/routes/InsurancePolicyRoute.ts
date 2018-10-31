
import { BaseRoute } from '../../@core/base';
import InsurancePolicyMiddleware from '../middlewares/InsurancePolicyMiddleware';


class InsurancePolicyRoute extends BaseRoute {
	/**
	  * construct for TestRoute
	  *
	  * @param {json} router instance of ExpressJS router
	  */
	constructor(router) {
		super(router);
	}

	/**
	* main method, init all routes for userRoute here!
	*/
	routesInit() {

		this.get(
			// path
			'/insurancepolicy',
			// controller + action
			'InsurancePolicyController->index'
		);

		this.post(
			// path
			'/insurancepolicy',
			// controller + action
			'InsurancePolicyController->store',
			// middleware
			[
				InsurancePolicyMiddleware.createParams,
				InsurancePolicyMiddleware.validatePolicyType,
				// InsurancePolicyMiddleware.validateIdentification
			]
		);
	}
}

export default InsurancePolicyRoute;