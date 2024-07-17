class Validator {
  isRequired(value: any) {
    return value !== undefined && value !== null && value !== "";
  }

  isEmail(value: any) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  }

  isNumber(value: any) {
    return /^\d+$/.test(value);
  }

  isUrl(value: any) {
    return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
      value
    );
  }

  isBoolean(value: any) {
    return value === "true" || value === "false";
  }

  isString(value: any) {
    return typeof value === "string";
  }
}

export default Validator;
