const jwt = require("../utils/jwt");

const key_secret = fs.readFileSync('jwt.evaluation.key');

const routesValidateToken = async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ message: 'Token não encontrado' }); 
  }

  const validateSignature = jwt.validateToken(authorization, key_secret);

  if (validateSignature.type === 401) {
    return response.status(validateSignature.type).json(validateSignature.message);
  }
  next();
};

module.exports = { routesValidateToken }
