import { test, expect } from "@playwright/test";
import { generateUser } from "../utils/library";
import { createUser, getUser, updateUser } from "../apiClient";
import { StatusCodes } from "../enum";

import { validateSchema } from "../utils/validateSchema";
import { createUserSchema } from "../schemas/createUserSchema";
import { updateUserSchema } from "../schemas/updateUserSchema";

test("Validate Schema for CREATE and UPDATE response", async ({ request }) => {
  // ✅ CREATE
  const userPayload = generateUser();
  const createRes = await createUser(request, userPayload);
  expect(createRes.status()).toBe(StatusCodes.CREATED);

  const createdBody = await createRes.json();
  console.log("✅ Created Response:", createdBody);

  // ✅ validate CREATE schema
  expect(validateSchema(createUserSchema, createdBody)).toBeTruthy();

  const userId = createdBody._id;

  //
  // ✅ UPDATE (PUT)
  //
  const updatedUserData = generateUser();
  const updateRes = await updateUser(request, userId, updatedUserData);
  expect(updateRes.status()).toBe(StatusCodes.UPDATED);

  //
  // ✅ GET updated user
  //
  const verifyRes = await getUser(request, userId);
  expect(verifyRes.status()).toBe(StatusCodes.OK);

  const updatedUser = await verifyRes.json();
  console.log("✅ Updated User Response:", updatedUser);

  // ✅ validate UPDATE schema
  expect(validateSchema(updateUserSchema, updatedUser)).toBeTruthy();
});