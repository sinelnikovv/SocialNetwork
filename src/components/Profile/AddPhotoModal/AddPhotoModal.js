import React, {useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDropzone } from "react-dropzone";
import "react-image-crop/src/ReactCrop.scss";
import Slider from "@mui/material/Slider";


import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebounceEffect";
import "react-image-crop/dist/ReactCrop.css";
import Fade from "@mui/material/Fade";
import Backdrop from '@mui/material/Backdrop';

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

const AddPhotoModal = (props) => {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: (acceptedFiles) => {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgSrc(reader.result?.toString() || "");
      });
      reader.readAsDataURL(acceptedFiles[0]);
    },
  });

  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef(null);
  const imgRef = useRef(null);
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState(1 / 1);
  const [currentImageSize, setCurrentImageSize] = useState();

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  function onSendClick() {
    if (!previewCanvasRef.current) {
      throw new Error("Crop canvas does not exist");
    }
    previewCanvasRef.current.toBlob((blob) => {
      if (!blob) {
        throw new Error("Failed to create blob");
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
      blobUrlRef.current = URL.createObjectURL(blob);
      const newImage = new File([blob], "newAvatar.png", { type: "image/png" });
      props.onPhotoSend(newImage);
      setImgSrc("");
      setCompletedCrop();
      props.handleClosePhotoModal();
    });
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
        previewCanvasRef.current.toBlob((blob) => {
          if (!blob) {
            throw new Error("Failed to create blob");
          }
          if (blobUrlRef.current) {
            URL.revokeObjectURL(blobUrlRef.current);
          }
          blobUrlRef.current = URL.createObjectURL(blob);
          const newImage = new File([blob], "temporaryAvatar.png", {
            type: "image/png",
          });
          setCurrentImageSize((newImage.size / 1024 / 1024).toFixed(2));
        });
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  const handleScale = (scale) => {
    setScale(scale);
  };

  return (
    <Modal
      open={props.isPhotoModalOpen}
      onClose={props.handleClosePhotoModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
    >
      <Fade in={props.isPhotoModalOpen}>
        <Box sx={boxStyle}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            <em>(Only *.jpeg and *.png images will be accepted)</em>
          </div>

          {!!imgSrc && (
            <>
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={aspect}
              >
                <img
                  ref={imgRef}
                  alt="Crop me"
                  src={imgSrc}
                  style={{ transform: `scale(${scale})` }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
              <Slider
                aria-label="Scale"
                orientation="vertical"
                getAriaValueText={handleScale}
                valueLabelDisplay="auto"
                defaultValue={1}
                max={3}
                step={0.1}
                sx={{ height: 300 }}
              />
            </>
          )}
          {!!completedCrop && (
            <>
              <div>
                <canvas
                  ref={previewCanvasRef}
                  style={{
                    border: "1px solid black",
                    objectFit: "contain",
                    width: completedCrop.width,
                    height: completedCrop.height,
                  }}
                />
              </div>

              <Box>
                <button onClick={onSendClick}>Send Crop</button>
                <Typography
                  sx={[
                    {
                      color: "red",
                    },
                    currentImageSize < 4 && {
                      color: "green",
                    },
                  ]}
                >
                  Size must be smaller than 4MB, now {currentImageSize}MB
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};
export default AddPhotoModal;
