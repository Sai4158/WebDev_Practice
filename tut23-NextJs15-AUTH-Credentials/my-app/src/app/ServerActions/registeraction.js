"use server";

import dbConnection from "../utils/config/DB";

export async function registerAction(registerDetails) {
  console.log(registerDetails);

  await dbConnection();
}
