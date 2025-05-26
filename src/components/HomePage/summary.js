/*
API Endpoints Summary:

1. Authentication APIs:
   - POST /api/register
     Request: { email: string, password: string, name: string }
     Response: { message: string } or { error: string }

   - POST /api/login
     Request: { email: string, password: string }
     Response: { token: string } or { error: string }

2. Property APIs:
   - GET /api/properties/search
     Query Parameters: location, minPrice, maxPrice, type
     Response: Array of property objects or { error: string }

   - GET /api/properties/:id
     Parameters: id (property ID)
     Response: Property object or { error: string }

3. Message APIs:
   - POST /api/contact
     Request: { name: string, email: string, message: string, propertyId: string }
     Response: { message: string } or { error: string }

All responses are in JSON format.
Error responses include an error message in the format { error: string }.
*/
