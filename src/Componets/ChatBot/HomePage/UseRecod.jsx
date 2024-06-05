import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

const UseRecord = () => {
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

const startRecording = async () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    console.error('Media devices API not supported.');
    alert('Your browser does not support media device recording.');
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: 640 },
        height: { ideal: 480 },
        frameRate: { ideal: 15 }
      },
      audio: true
    });

    videoRef.current.srcObject = stream;

    if (typeof MediaRecorder === 'undefined') {
      console.error('MediaRecorder API not supported.');
      alert('Your browser does not support video recording.');
      return;
    }

    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunksRef.current.push(event.data);
      }
    };
    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      setVideoURL(url);
      chunksRef.current = [];
    };
    mediaRecorderRef.current.start();
    setRecording(true);
  } catch (err) {
    console.error('Error accessing media devices.', err);
    alert('Error accessing media devices.');
  }
};

const stopRecording = () => {
  if (mediaRecorderRef.current) {
    mediaRecorderRef.current.stop();
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    setRecording(false);
  }
};


  return (
    <div>
      <video ref={videoRef} autoPlay muted />
      <div>
        {recording ? (
          <button onClick={stopRecording}>Stop Recording</button>
        ) : (
          <button onClick={startRecording}>Start Recording</button>
        )}
      </div>
      {videoURL && (
        <div>
          <h3>Recorded Video:</h3>
          <video  controls playsinline  ><source src={videoURL}  type="video/webm"/></video>
        </div>
      )}
    </div>
  );
};

export default UseRecord;
