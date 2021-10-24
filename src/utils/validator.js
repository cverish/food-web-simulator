import { dataJsonSchema } from "../json/dataJsonSchema";

export const validateJson = (jsonString) => {
  var Validator = require("jsonschema").Validator;
  var v = new Validator();
  v.addSchema(dataJsonSchema);

  try {
    const json = JSON.parse(jsonString.replace(/\n/g, ""));
    return v.validate(json, dataJsonSchema).errors;
  } catch {
    return [{ stack: "Not valid JSON" }];
  }
};
