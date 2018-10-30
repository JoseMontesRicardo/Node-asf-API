import * as joi from 'joi';
import * as validate from 'express-validation';
import * as joiObjectId from 'joi-objectid';
import InsurancePolicyModel from '../models/InsurancePolicyModel';
import PolicyTypeModel from '../models/PolicyTypeModel';
import { ObjectId } from 'mongorito';

joi.objectId = joiObjectId(joi)

class InsurancePolicyMiddleware {

    static createParams(req, res, next) {
        return validate({
            body: {
                identification: joi.string().max(45).required(),
                firstName: joi.string().max(45).required(),
                lastName: joi.string().max(45).required(),
                policyType: joi.objectId().required()
                // fisrtName: joi.string().email().required()
            }
        })(req, res, next)
    }

    static async validatePolicyType(req, res, next) {
        let policyFound;
        policyFound = await PolicyTypeModel.findOne({ _id: ObjectId(req.body.policyType) });
        if (!policyFound) {
            console.error('Policy type does not exist!');
            return res.status(404).json({message: 'Policy type does not exist!'});
        }
        req.policyFound = policyFound;
        next();
    }

    static async validateIdentification(req, res, next) {
        let InsurancePolicyFound;
        InsurancePolicyFound = await InsurancePolicyModel.findOne({ identification: req.body.identification });
        if (InsurancePolicyFound) {
            console.error('Insurance policy allready exist!');
            return res.status(403).json({message: 'Insurance policy allready exist!'});
        }
        req.InsurancePolicyFound = InsurancePolicyFound;
        next();
    }
}

export default InsurancePolicyMiddleware;