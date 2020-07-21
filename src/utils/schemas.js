import Joi from 'joi-browser';

const LoginSchema = () => {
  return {
    email : Joi.string()
                .email()
                .error(() => {
                  return {
                    message : 'Please enter a valid Email ID',
                  };
                })
                .required(),
    password : Joi.string()
                   .error(() => {
                     return {
                       message : 'Password cannot be empty',
                     };
                   })
                   .required(),
  };
};

const SignUpSchema = () => {
  return {
    name : Joi.string().min(5).label('Name').required(),
    password : Joi.string()
                   .min(7)
                   .error(() => {
                     return {
                       message : 'Password should be atleast 7 characters long',
                     };
                   })
                   .required(),
    department : Joi.string().min(2).max(3).required(),
    section : Joi.string().length(1).required(),
  };
};

const DetailsSchema = () => {
  return {
    contactEmail :
        Joi.string().email().allow('').trim().strict().label('Contact Email'),
    facebook : Joi.string().uri().label('Facebook').error(() => {
      return {
        message : 'Please enter a valid Facebook profile URL',
      };
    }),
    linkedin : Joi.string().uri().label('Linkedin').error(() => {
      return {
        message : 'Please enter a valid LinkedIn profile URL',
      };
    }),
    whatsappNo : Joi.string()
                     .length(10)
                     .regex(/^\d+$/)
                     .label('WhatsApp Number')
                     .error(() => {
                       return {
                         message : 'Input should be a number of length 10',
                       };
                     }),
    contactNo : Joi.string()
                    .label('Contact Number')
                    .length(10)
                    .regex(/^\d+$/)
                    .error(() => {
                      return {
                        message : 'Input should be a number of length 10',
                      };
                    }),
    snapchat : Joi.string().label('Snapchat'),
    instagram : Joi.string().label('Instagram'),
  };
};

const EmailAccess = () => {
  return {
    email : Joi.string()
                .email()
                .error(() => {
                  return {
                    message : 'Please enter a valid Email',
                  };
                })
                .required(),
  };
};

export {LoginSchema, SignUpSchema, DetailsSchema, EmailAccess};
