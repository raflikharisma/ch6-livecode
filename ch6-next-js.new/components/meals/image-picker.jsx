"use client";


import Image from "next/image";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";

export default function ImagePicker({ name, label }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();
  function handlePickImage() {
    imageInput.current.click();
  }

  function handleImageChange() {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet...</p>}
          {pickedImage && <Image src={pickedImage} alt="Image Selected" fill/>}
        </div>
        <input className={classes.input} type="file" name={name} id="image" accept="image/png, image/jpeg" ref={imageInput} onChange={handleImageChange}/>
        <button className={classes.button} type="button" onClick={handlePickImage}>
          Pick an image
        </button>
      </div>
    </div>
  );
}
