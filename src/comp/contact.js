import './contact.css';
import email from './email.png'
import ln from './ln.png';
import wa from './wa.png';

export function Contact()
{
    return(
        <div class="cont">
            <div class="display-4">Contact Details</div><br></br>
            <div class="list-group" style={{maxWidth:"500px"}}>
                <div class="row">
                    <div class="col-1 ms-auto"><img src={email} class="img2" /></div>
                    <div class="col"><a href="mailto:sivamj14@gmail.com" class="list-group-item list-group-item-action" target="_blank">sivamj14@gmail.com</a></div>
                </div>
                <div class="row">
                    <div class="col-1 mr-auto"><img src={ln} class="img2" /></div>
                    <div class="col"><a href="https://www.linkedin.com/in/siva-adithya-6433901bb/" target="_blank" class="list-group-item list-group-item-action">LinkedIn</a></div>
                </div>
                <div class="row">
                    <div class="col-1 mr-auto"><img src={wa} class="img2" /></div>
                    <div class="col"><a href="#" class="list-group-item list-group-item-action">+91 7338851144</a></div>
                </div>
            </div>
        </div>
    )
}