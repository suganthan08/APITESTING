import Ajv, { JSONSchemaType } from "ajv";

const ajv = new Ajv({ allErrors: true });

export function validateSchema<T>(schema: JSONSchemaType<T>, data: any) {
  const validate = ajv.compile(schema);

  const valid = validate(data);
  if (!valid) {
    console.error("❌ Schema validation errors:", validate.errors);
    return false;
  }
  console.log("✅ Schema validated successfully");
  return true;
}