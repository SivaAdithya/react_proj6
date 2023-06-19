import './about.css';
import comp from './image1.png'
export function About()
{
    return(
        <div>
            <img src={comp} class="img1"></img>
            <div class="about_cl1">
                <p>I am Siva Adithya currently pursuing B.tech in Computer Science Engineering with specialisation in AI and ML. My interests lie in working on deep learning projects and full stack development. I enjoy watching cricket every now and then to relax my mind and help me work more effectively. I am always punctual with my tasks and ensure they are completed to the fullest as early as possible. I am familiar with C++, python, java, html, javascript and I am more than capable to work with reactjs, expressjs. If the comapny requires anything further than what I know I will be more than happy to learn what is required given my intersets lie in full stack development.</p>
            </div>
        </div>
    )
}