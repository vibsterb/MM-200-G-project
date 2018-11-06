/* --------------------- Users ------------------ */

/* create user*/
METHOD: POST
ENDPOINT: /app/user
BODY (json): {"name": string, "email": string, "password": string}
RESPONSE (json): {"id": integer, "name": string, "email": string, "password": string}

/* login user */
METHOD: POST
ENDPOINT: /app/login
BODY (json): {"email": string, "password": string}
RESPONSE (json): {user}

/* get all users */
METHOD: GET
ENDPOINT: /app/allUsers
RESPONSE (json): array with user-objects

/* delete user */
METHOD: DELETE
ENDPOINT: /app/deleteUser/:id/
PARAMS ??
RESPONSE (json): {"id:" integer}

/* ------------------------- Lists ------------------------ */

/* create list */
