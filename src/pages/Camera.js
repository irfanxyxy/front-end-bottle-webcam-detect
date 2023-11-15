import Content from "./Home/Content";
import Hero from "./Home/Hero";
import Webcam from "react-webcam";
import './Camera.scss';
import { useCallback, useRef, useState } from "react";

const Camera = () => {

    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    // create a capture function
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef]);


    const retake = () => {
        setImgSrc(null);
      };

    return (
        <div className="container">
        {imgSrc ? (
          <img src={imgSrc} alt="webcam" className="cameraElement" />
        ) : (
          <Webcam  ref={webcamRef} className="cameraElement"/>
        )}
        <div className="btn-container">
          {imgSrc ? (
            <button onClick={retake}>Retake photo</button>
          ) : (
            <button onClick={capture}>Capture photo</button>
          )}
        </div>
      </div>
    );
  };
  
export default Camera;