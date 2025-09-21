import { useState } from "react";
import NavBar from './NavBar.jsx'
const Home = () => {
    const posts = [{
        id: 1,
        title: "Mirai Movie Review",
        author: "JK",
        timeRead:" 5 min read",
        postedOn: "Sep 20, 2025",
        content: "Teja Sajja grabbed the attention of moviegoers across the country with Hanu-Man. The film was released during the Sankranthi 2024 season and went on to become a huge blockbuster, not just in Telugu but in Hindi as well. After the gigantic success of Hanu-Man, Teja Sajja teamed up with cinematographer-turned-director, Karthik Gattamneni, for yet another underdog turned superhero film, Mirai. Manchu Manoj played the antagonist role and Ritika Nayak played the lead actress role in the film. The film generated enough buzz with the first look poster and the expectations increased further with the teaser and trailer. With the expectations riding sky-high, the film was released in theatres today. Did Teja Sajja deliver yet another commercial blockbuster with a superhero film? Did the director, Karthik Gattamneni, finally deliver a commercial success, after struggling to score a hit with his first two films, Surya vs Surya and Eagle? How did Manchu Manoj do in the antagonist role? Did Ritika Nayak continue her success streak with her second film, after the success of her debut film, Ashoka Vanamlo Arjuna Kalyanam? How did Shriya Saran do in the role of a mother? More importantly, did the production house, People Media Factory, score a resounding success, after the not-so-successful last few films? Let’s figure it out with a detailed analysis.",
        Image: "./download (4).jpg",
        profilePic: "./download (4).jpg",
    }, {
        id: 2,
        title: "Kishkindhapuri Hit, Wrong Release Date Cost Crores",
        author: "Asha Deepthi",
        timeRead:" 7 min read",
        postedOn: "Sep 20, 2025",
        content: "JavaScript closures are a fundamental concept that every developer should understand. In this article, we'll dive deep into closures, how they work, and practical examples of their usage.",
        Image: "./download (5).jpg",
        profilePic: "./download (5).jpg",
    }]
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white font-sans  ">
            <NavBar/>
            
           
            <div className="min-h-screen flex flex-col items-center pt-5 bg-black">
            <p className="text-4xl font-bold">Welcome back, Dev Astra</p>
            <p className="text-lg text-gray-500 mt-4"> Discover amazing stories, insights, and ideas from our community of writers.</p>
            <div className=" flex gap-10 justify-around mt-5 ">
                <button className="px-10 py-4 cursor-pointer bg-blue-700 hover:bg-blue-900 shadow-md text-white rounded-md">Write a New Post</button>
                <button className="px-10 py-4 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md" >View My Posts</button>
            </div>
            <div className="mt-5 flex gap-10 flex-wrap border-white justify-center w-full rounded-lg text-shadow-purple-50 pb-5">
                {
                    posts.map((post) => (
                        <div className="w-96 bg-white shadow-lg transform hover:scale-105 duration-500 ease-in-out rounded-lg overflow-hidden" key={post.id}>
                            <div className="relative">
                                <img className=" rounded-t-lg  shadow-lg transform hover:scale-105 duration-500 ease-in-out  h-100 w-96 " src={post.Image} alt="Writing" />
                                <button className="p-3 text-sm bg-black rounded-full absolute cursor-pointer right-4 top-3">Save</button>
                            </div>
                            <div className="flex gap-5 mt-3 px-2">
                                <img className="rounded-full shadow-lg h-12 w-12 " src={post.profilePic} alt="Writing" />
                                <div>
                                    <p className="font-semibold">{post.author}</p>
                                    <p className="text-gray-500">{post.postedOn} - {post.timeRead}</p>
                                </div>
                            </div>
                            <div className="mt-3 px-3 flex flex-col gap-3">
                                <p className="text-2xl font-bold ">{post.title}</p>
                                <p className="text-gray-600">
                                    {post.content}
                                </p>
                            </div>
                            <div className="mt-3 mb-3  px-3 flex justify-end">
                                <button className="text-blue-500 hover:underline cursor-pointer">Read more</button>
                            </div>
                        </div>))
                }

            </div></div>
            </div>
            )}
            export default Home