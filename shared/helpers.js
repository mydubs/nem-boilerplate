// * Builds an object to send as response
exports.sendResponse = function (success, message, data) {
  let response = {
    success,
    message,
  };
  if (data) response.data = data;
  return response;
};

// * Check Value Length
exports.checkLength = (value, requiredLength) => {
  return value.length >= requiredLength;
};
