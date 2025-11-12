export enum Endpoints {
  // Base URL includes the /api/{key} portion. Resource path should be the resource name.
  USERS = "/users", // Full URL -> {BASE_URL}/users
}

export enum StatusCodes {
  OK = 200,
  CREATED = 201,
  
  UPDATED = 200, // returns 200 OK for a successful PUT/PATCH operation
  
  DELETED = 204, // returns 204 No Content for a successful DELETE operation
  NO_CONTENT = 204, // Alias for clarity
  BAD_REQUEST = 400,
}