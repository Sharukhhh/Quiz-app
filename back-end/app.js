import express, { urlencoded } from 'express';
import cors from 'cors'
import morgan from 'morgan'
import connectDb from './database/mongoconnect.js'
import quizRoutes from './routes/quizRoutes.js'

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(urlencoded({extended : true}));

connectDb();

app.use('/api/quiz', quizRoutes);


app.listen(6000 , () => {
    console.log('Server running');
});
