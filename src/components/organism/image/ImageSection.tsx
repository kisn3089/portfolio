import React from "react";
import {
  ImageLayout,
  InsideContent,
  InsideUpload,
  SampleLayout,
  UploadLayout,
} from "./ImageLayoutStyles";
import * as Svg from "@/components/atoms/icon/index";

const ImageSection = () => {
  return (
    <ImageLayout>
      <UploadLayout>
        <InsideUpload>
          <Svg.UploadImage />
          <InsideContent>Drag Down or Click</InsideContent>
        </InsideUpload>
      </UploadLayout>
      <SampleLayout>
        <img src="/assets/img/opera.webp" alt="sample image_color" />
        <img src="/assets/img/opera.webp" alt="sample image_color" />
      </SampleLayout>
    </ImageLayout>
  );
};

export default ImageSection;
