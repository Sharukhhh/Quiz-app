import React from 'react'
import {ThreeDots} from 'react-loader-spinner'
import CategoryCards from '../../Components/cards/CategoryCards'
import { useQuizForm } from '../../hooks/authFormHook'
import { categories } from '../../assets/categoryData'
import { useLoadingHook } from '../../hooks/useLoadingHook'
import { validateQuizCred } from '../../validations/formValidate'
import { errorAlert } from '../../utils/alerts'

const Home = () => {

    const {username , email ,category,  handleChangeEmail,   handleChngeName , handleCategoryChange} = useQuizForm()
    const {isLoading , setIsLoading} = useLoadingHook()

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(username , email ,category)

        try {
            setIsLoading(true);
            const {state , message} = validateQuizCred(username , category , email)

            if(!state) {
                errorAlert(message);
                setIsLoading(false);
                return;
            }

            const response = await submitUserInfoAndStart({username , email, category})
            console.log(response);

        } catch (error) {
            
        } finally {
            setIsLoading(false);
        }
    }
  return (
    <>
        <div className='min-h-screen p-8 bg-gray-100 flex flex-col items-center'>
            <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-md'>
                <h1 className='text-2xl font-bold mb-4 text-center'>
                    QUIZ APP
                </h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" required
                    name='username'
                    className='w-full p-2 mb-4 border rounded-md'
                    placeholder='Enter Username'
                    value={username}
                    onChange={handleChngeName}
                    />

                    <input type="email" required
                    name='email'
                    className='w-full p-2 mb-4 border rounded-md'
                    placeholder='Enter Email'
                    value={email}
                    onChange={handleChangeEmail}
                    />

                    <select name="category" id="" value={category} onChange={handleCategoryChange}
                    className='w-full p-2 mb-4 border rounded-md'
                    >
                        <option value="Select Category">Select category</option>
                        <option value="Programming">Programming</option>
                        <option value="Cloud">Cloud</option>
                        <option value="Linux">Linux</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Docker">Docker</option>
                    </select>
                    {isLoading ? (
                        <ThreeDots 
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        />
                    ) : (
                        <button type='submit' className='w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-800'>
                            Start Quiz
                        </button>
                    )}
                </form>
            </div>
            <p className='mt-28 text-lg font-semibold text-center'>Available Quiz Topics / Categories</p>
            <div className='mt-8 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {categories?.map((catgeory , index) => (
                    <CategoryCards
                    key={index}
                    catgeoryName={catgeory?.name}
                    img={catgeory?.image}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default Home