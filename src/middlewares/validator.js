import {check, validationResult} from "express-validator";

class Validator{

    static validateInput=(req,res,next)=>{

        const errors =validationResult(req);
        if(!errors.isEmpty()){
            const errorMessage= errors.errors.map((err)=>err.msg);
            return res.status(400).json({messsage: errorMessage});
        }

        return next();

    };

    static newAccountRules(){

        return[
            check("email", "email is invalid").isEmail(),
            check("password", "password is not strong").isStrongPassword(),
            check("lastname", "Last name should be valid").trim().isString(),
            check("firstname", "First name should be valid").trim().isString(),
            check(
                "gender",
                "Gender should be among male,female,other, not-say,"
            )
               .trim()
               .isIn(["male", "female", "other", "not-say"]),
        ];
    }

   
    static newTourRules(){

        return [
            check("title","title is invalid").trim().isString(),
            check("seats","seats should be number").trim().isNumeric(),
            check("available","available seats should be numbers").trim().isNumeric(),
            check("dateScheduled","Date should be valid").trim().isDate(),
            check("dueDate","Due Date should be valid").trim().isDate(),
            check("price","Price is invalid").trim().isAlphanumeric(),
        ];

  }
  }
export default Validator;