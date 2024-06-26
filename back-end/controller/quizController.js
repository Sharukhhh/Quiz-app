import userModel from "../models/user.js";
import { quizData } from "../utils/quizData.js";



/*
method: POST
path: /api/quiz/save
*/
export const saveUser = async (req, res) => {
    try {
        const {username , email ,  category} = req.body;
        console.log(req.body)

        let user = await userModel.findOne({email: email});

        if(!user) {
            user = await userModel.create({
                username, 
                choosenCategory: category,
                email
            });
        }
        
        
        console.log(user);
        return res.status(201).json({message: 'success' , payload});

    } catch (error) {
        console.log(error);
        return res.status(500);
    }
}


export const fetchCategorisedQuestions = async (req, res) => {
    try {
        
        const {email} = req.body;

        const user = await userModel.findOne({email});
        if(!user) {
            return res.status(404).json({error: 'User already exists'});
        }

        const {choosenCategory} = user;

        const catgeoryQuestions = quizData.find((category) => category.category === choosenCategory);
        if(!catgeoryQuestions) {
            return res.status(404).json({error: 'no data found'});
        }

        return res.status(200).json({message:'success' ,questions: catgeoryQuestions.questions})

    } catch (error) {
        console.log(error);
        return res.status(500);
    }
}