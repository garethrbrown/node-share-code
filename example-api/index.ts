import express from 'express';

import { ApiClass } from 'example-shared/apiClass';

const app = express();

app.get('/', (req, res) => {

    let apiClass = new ApiClass('hello');

    let apiClassJson = JSON.stringify(apiClass);

    res.send(`Serialized ApiClass instance ${apiClassJson}`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));