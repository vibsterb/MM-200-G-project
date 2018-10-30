/* create user*/
METHOD: POST
ENDPOINT: app/user
BODY (json): {"name": string, "email": string, "password": string}
RESPONSE (json): {"id": integer, "name": string, "email": string, "password": string}


/* login user */
METHOD: POST
ENDPOINT: app/login
BODY (json): {"email": string, "password": string}
RESPONSE (json): {user}
