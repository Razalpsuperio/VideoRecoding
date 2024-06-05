import React from 'react';
import { useRecordWebcam } from 'react-record-webcam';

const UseRecodWebCam = () => {
  const recordWebcam = useRecordWebcam();

  const recordVideo = async () => {
    await recordWebcam.open();
    recordWebcam.start();
    await new Promise(resolve => setTimeout(resolve, 3000)); 
    recordWebcam.stop();
    recordWebcam.download();
  };

  return (
    <div>
      <video ref={recordWebcam.webcamRef} autoPlay />
      <div>
        <button onClick={recordVideo}>Record Video</button>
      </div>
    </div>
  );
};

export default UseRecodWebCam;
