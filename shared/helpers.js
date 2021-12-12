exports.sendResponse = function (success, message, data) {
  let response = {
    success,
    message,
  };
  if (data) response.data = data;
  return response;
};
