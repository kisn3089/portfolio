import React from "react";
import {
  ImageLayout,
  InsideContent,
  InsideUpload,
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
    </ImageLayout>
  );
};

export default ImageSection;
