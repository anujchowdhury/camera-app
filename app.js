{\rtf1\ansi\ansicpg1252\cocoartf1504\cocoasubrtf820
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0\c84314;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl360\partightenfactor0

\f0\fs32 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Set constraints for the video stream\
var constraints = \{ video: \{ facingMode: "user" \}, audio: false \};\
// Define constants\
const cameraView = document.querySelector("#camera--view"),\
    cameraOutput = document.querySelector("#camera--output"),\
    cameraSensor = document.querySelector("#camera--sensor"),\
    cameraTrigger = document.querySelector("#camera--trigger")\
// Access the device camera and stream to cameraView\
function cameraStart() \{\
    navigator.mediaDevices\
        .getUserMedia(constraints)\
        .then(function(stream) \{\
        track = stream.getTracks()[0];\
        cameraView.srcObject = stream;\
    \})\
    .catch(function(error) \{\
        console.error("Oops. Something is broken.", error);\
    \});\
\}\
// Take a picture when cameraTrigger is tapped\
cameraTrigger.onclick = function() \{\
    cameraSensor.width = cameraView.videoWidth;\
    cameraSensor.height = cameraView.videoHeight;\
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);\
    cameraOutput.src = cameraSensor.toDataURL("image/webp");\
    cameraOutput.classList.add("taken");\
\};\
// Start the video stream when the window loads\
window.addEventListener("load", cameraStart, false);}