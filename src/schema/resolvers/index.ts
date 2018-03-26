import { allProducts } from './allProducts';
import { allClients } from './Client/allClients';
import { getCart } from './getCart';
import { createClient } from './Client/createClient'
import { getClient } from './Client/getClient';
import { deleteClient } from './Client/deleteClient';

export const resolvers = {
    Query: {
        allProducts,
        allClients,
        getCart,
        getClient
    },
    Mutation: {
        createClient,
        deleteClient
    }
}