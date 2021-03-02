import express from 'express';

// import { TestTimer } from 'outln-common/scripts/testTimer';

const app = express();

app.get('/', (req, res) => {

    //let roamPage = new TestTimer('hello');

    //let testTimerJson = JSON.stringify(roamPage);

    res.send('Hello from express and typescript!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));