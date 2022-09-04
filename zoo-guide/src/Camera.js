import React, { Component } from "react";

import "./camera.css";

class Camera extends Component {
  state = {
    imageURL: "",
  };

  videoEle = React.createRef();
  canvasEle = React.createRef();
  imageEle = React.createRef();

  componentDidMount = async () => {
    this.startCamera();
  };

  startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });

      if (this.videoEle.current) {
        this.videoEle.current.srcObject = stream;
      }
    } catch (err) {
      console.log(err);
    }
  };

  takeSelfie = async () => {
    // Get the exact size of the video element.
    // const width = this.videoEle.current.videoWidth;
    // const height = this.videoEle.current.videoHeight;
    const width = 320;
    const height = 240;

    // get the context object of hidden canvas
    const ctx = this.canvasEle.current.getContext("2d");

    // Set the canvas to the same dimensions as the video.
    this.canvasEle.current.width = width;
    this.canvasEle.current.height = height;

    // Draw the current frame from the video on the canvas.
    ctx.drawImage(this.videoEle.current, 0, 0, width, height);

    // Get an image dataURL from the canvas.
    const imageDataURL = this.canvasEle.current.toDataURL("image/png");
    this.stopCam();

    this.setState({
      imageURL: imageDataURL,
    });
  };

  stopCam = () => {
    const stream = this.videoEle.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });
  };

  backToCam = () => {
    this.setState(
      {
        imageURL: "",
      },
      () => {
        this.startCamera();
      }
    );
  };

  render() {
    return (
      <>
        <div className="camera">
          {this.state.imageURL === "" && (
            <div className="cam">
              <video
                width="320px"
                height="240px"
                className="video-player"
                autoPlay={true}
                ref={this.videoEle}
              ></video>
              <button className="capture-btn" onClick={this.takeSelfie}>
                <i class="fa fa-camera" aria-hidden="true"></i>
              </button>
            </div>
          )}

          <canvas ref={this.canvasEle} style={{ display: "none" }}></canvas>
          {this.state.imageURL !== "" && (
            <div className="preview">
              <img
                alt="cam"
                className="preview-img"
                src={this.state.imageURL}
                ref={this.imageEle}
              />

              <div className="btn-container">
                <button className="back-btn" onClick={this.backToCam}>
                  <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </button>
                <a
                  href={this.state.imageURL}
                  download="selfie.png"
                  className="download-btn"
                >
                  <i className="fa fa-download" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Camera;
