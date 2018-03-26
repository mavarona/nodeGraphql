import { allProducts } from './product/allProducts';
import { allClients } from './Client/allClients';
import { getCart } from './cart/getCart';
import { createClient } from './Client/createClient'
import { getClient } from './Client/getClient';
import { deleteClient } from './Client/deleteClient';
import { allCarts } from './cart/allCarts';

export const resolvers = {
    Query: {
        allProducts,
        allClients,
        getCart,
        getClient,
        allCarts
    },
    Mutation: {
        createClient,
        deleteClient
    }
}