
import { BaseRoute } from '../../@core/base';
// import UserMiddleware from '../middlewares/UserMiddleware';

class PolicyTypesRoute extends BaseRoute {
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
			'/policytypes',
			// controller + action
			'PolicyTypesController->index'
		);

		this.post(
			// path
			'/policytypes',
			// controller + action
			'PolicyTypesController->store'
		);
	}
}

export default PolicyTypesRoute;