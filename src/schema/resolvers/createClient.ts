import { Client } from './../../models/client';

export const createClient = (_, params) => {
   const name = params.name;
   const age = params.age;
   return Client.query<any>().insert({
    name,
    age
   });
}