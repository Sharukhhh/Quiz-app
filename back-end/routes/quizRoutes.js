import express from 'express'
import { fetchCategorisedQuestions, saveUser } from '../controller/quizController.js';
const route = express.Router();


route.post('/save' , saveUser);

route.get('/questions' , fetchCategorisedQuestions);

export default route;