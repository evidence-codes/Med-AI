import validator from "../utils/Validator.utils";
import connectToDb from "../config/db.config";

class User {
  static schema = {
    username: validator().string().required(),
    email: validator().email().required(),
    password: validator().string().required(),
  };

  static async validate(data: any) {
    for (const [key, validator] of Object.entries(this.schema)) {
      const value = data[key];
      const isValid = await validator.validate(value);
      if (!isValid) {
        throw new Error(`Validation failed for ${key}`);
      }
    }
  }

  static async save(user: any) {
    try {
      await this.validate(user);
      const db = await connectToDb();

      const result = await db.collection("users").insertOne(user);
      return result.insertedId;
    } catch (err) {
      throw new Error(`"Failed to save user: ${err}"`);
    }
  }
}

export default User;
