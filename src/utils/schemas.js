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

const DetailsSchema = () => {
  return {
    contactEmail : Joi.string().email().label('Contact Email'),
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
    contactNo :
        Joi.string().label('Contact Number').regex(/^\d+$/).error(() => {
          return {
            message : 'Input should be a number of length 10',
          };
        }),
    snapchat : Joi.string().label('Snapchat'),
    instagram : Joi.string().label('Instagram'),
  };
};

export {LoginSchema, DetailsSchema};
