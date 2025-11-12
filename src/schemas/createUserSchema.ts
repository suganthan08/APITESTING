import { JSONSchemaType } from "ajv";

export interface CreateUserResponse {
  name: string;
  age: number;
  job: string;
  _id: string;
}

export const createUserSchema: JSONSchemaType<CreateUserResponse> = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "integer", minimum: 18, maximum: 60 },
    job: { type: "string" },
    _id: { type: "string" },
  },
  required: ["name", "age", "job", "_id"],
  additionalProperties: false,
};