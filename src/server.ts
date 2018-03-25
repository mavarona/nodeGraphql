import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import { schema } from './schema'

const app = express();
const PORT = 4300;

require('./database/setup');

app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
        schema
    })
);

app.use(
    '/graphiql',
    bodyParser.json(),
    graphiqlExpress({
        endpointURL: '/graphql',
    })
);

app.listen ( PORT, () => {
    console.log( `Server running in port ${PORT}` )
});

