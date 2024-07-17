import Validator from "../class/Validator";

class ValidatorUtils {
  private readonly validator: Validator;
  private validators: Function[];

  constructor() {
    this.validator = new Validator();
    this.validators = [];
  }

  required() {
    this.validators.push(this.validator.isRequired);
    return this;
  }

  email() {
    this.validators.push(this.validator.isEmail);
    return this;
  }

  number() {
    this.validators.push(this.validator.isNumber);
    return this;
  }

  url() {
    this.validators.push(this.validator.isUrl);
    return this;
  }

  boolean() {
    this.validators.push(this.validator.isBoolean);
    return this;
  }

  string() {
    this.validators.push(this.validator.isString);
    return this;
  }

  async validate(value: any) {
    for (const validator of this.validators) {
      const isValid = await validator()(value);
      if (!isValid) {
        return false;
      }
    }
    return true;
  }
}

const validator = () => new ValidatorUtils();

export default validator;
