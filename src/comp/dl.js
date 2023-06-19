import './fullstack.css';

export function DeepLearning()
{
    return(
        <div class="fs1">
            <ul>
                <li >
                    <h4>Elephant Detection</h4>
                    This project involves using video analytics to determine the presence of an Elephant in a given video clip which can alert the user about a potenial elephant attack. This was done with the help of key frame extractions and passing the extracted frames through a convolutional neural network. Different pre-trained models such as ResNet, InceptionNet, MobileNet were deployed and tested. The data used to train the CNN models consisted of videos collected from news websites.<br></br>
                    <a href="https://github.com/SivaAdithya/ElephantDetection-using-cnn/tree/main/JupyterNotebooks">GitHub Link</a>
                </li><br></br>
            </ul>
        </div>
    )

}