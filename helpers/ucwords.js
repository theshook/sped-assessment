ucwords = str => {
  if (str !== undefined)
    return str.replace(/\w\S*/g, word => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
};

module.exports = ucwords;
