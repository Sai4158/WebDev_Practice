"use server";

import dbConnection from "../utils/config/DB";
import { usermodel } from "../utils/Models/user";

export async function registerAction(registerDetails) {
  console.log(registerDetails);

  await dbConnection();

  await usermodel.create(registerDetails);
  return { success: "true" };
}
