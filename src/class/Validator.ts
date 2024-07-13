class Validator {
  async isRequired(value: any) {
    return value !== undefined && value !== null && value !== "";
  }

  async isEmail(value: any) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  }

  async isNumber(value: any) {
    return /^\d+$/.test(value);
  }

  async isUrl(value: any) {
    return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
      value
    );
  }

  async isBoolean(value: any) {
    return value === "true" || value === "false";
  }

  async isString(value: any) {
    return typeof value === "string";
  }
}

module.exports = Validator;
