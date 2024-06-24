import { useImage } from "@/hooks/useImage";
import {
  BorderCenter,
  GrayscaleImage,
  ImageLayout,
  ImageWrapper,
  InsideContent,
  InsideUpload,
  LabelImage,
  SampleLayout,
  UploadContainer,
  UploadLayout,
} from "./ImageLayoutStyles";
import * as Svg from "@/components/atoms/icon/index";
import { useEffect } from "react";

const ImageSection = () => {
  const { image, canvasRef, getImage } = useImage();

  useEffect(() => {
    if (image.canvasEl && canvasRef.current) {
      canvasRef.current.appendChild(image.canvasEl);
    }

    // return () => {
    //   canvasRef.current?.removeChild(image.canvasEl as Node);
    // };
  }, [image.canvasEl]);

  return (
    <ImageLayout>
      <UploadLayout>
        <UploadContainer>
          <BorderCenter />
          <LabelImage htmlFor="image" />
          <input
            type="file"
            id="image"
            accept=".jpg, .png, .ico, .webp"
            onChange={getImage}
          />
          <InsideUpload>
            <Svg.UploadImage />
            <InsideContent>Drag Down or Click</InsideContent>
          </InsideUpload>
        </UploadContainer>
      </UploadLayout>
      <SampleLayout>
        <ImageWrapper>
          <GrayscaleImage
            src="/assets/img/opera.webp"
            alt="image_color_custom"
          />
        </ImageWrapper>
        <ImageWrapper>
          {!image.canvasEl ? (
            <GrayscaleImage
              src="/assets/img/opera.webp"
              alt="image_color_custom"
            />
          ) : (
            <div ref={canvasRef} />
          )}
        </ImageWrapper>
      </SampleLayout>
    </ImageLayout>
  );
};

export default ImageSection;
