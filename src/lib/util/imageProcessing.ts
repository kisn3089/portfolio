export const filesToUrl = (files: FileList) => URL.createObjectURL(files[0]);

export const urlToImage = async (
  url: string,
  thresholdRef: number | string,
  callback: (result: string) => void
) => {
  const imageEl = new Image();
  imageEl.src = url;
  imageEl.onload = async () => {
    const result = await imageProcessing(imageEl, +thresholdRef);
    callback(result);
  };
};

const imageProcessing = async (
  image: HTMLImageElement,
  thresholdRef: number
) => {
  if (thresholdRef > 3) thresholdRef = 3;
  if (thresholdRef < 0) thresholdRef = 0;
  const canvas = getCanvasFromImage(image);
  const imageData = await cloneCanvas(canvas, thresholdRef);

  return imageData;
};

const cloneCanvas = async (
  src_canvas: HTMLCanvasElement,
  thresholdRef: number
) => {
  const src_ctx = src_canvas.getContext("2d");
  const src_image_data = src_ctx?.getImageData(
    0,
    0,
    src_canvas.width,
    src_canvas.height
  ) as ImageData;

  const dest_canvas = document.createElement("canvas");
  dest_canvas.width = src_canvas.width;
  dest_canvas.height = src_canvas.height;

  const dest_ctx = dest_canvas.getContext("2d");
  dest_ctx?.drawImage(src_canvas, 0, 0);

  const dest_image_data = dest_ctx?.getImageData(
    0,
    0,
    dest_canvas.width,
    dest_canvas.height
  ) as ImageData;

  const process = (x: number, cofficient: number, gray: number) => {
    return x * cofficient + gray * (1 - cofficient);
  };

  const COEFF = thresholdRef;

  for (let y = 0; y < src_canvas.height; y++) {
    for (let x = 0; x < src_canvas.width; x++) {
      const offset = getOffset(x, y, src_canvas.width);
      const r = src_image_data.data[offset];
      const g = src_image_data.data[offset + 1];
      const b = src_image_data.data[offset + 2];
      const grayscale = (r + g + b) / 3;

      dest_image_data.data[offset] = process(r, COEFF, grayscale);
      dest_image_data.data[offset + 1] = process(g, COEFF, grayscale);
      dest_image_data.data[offset + 2] = process(b, COEFF, grayscale);
      dest_image_data.data[offset + 3] = src_image_data.data[offset + 3];
    }
  }

  dest_ctx?.putImageData(dest_image_data, 0, 0);
  const imageData = dest_canvas.toDataURL("image/webp", 1);
  dest_ctx?.clearRect(0, 0, dest_canvas.width, dest_canvas.height);
  return imageData;
};

const getOffset = (x: number, y: number, w: number) => {
  return (y * w + x) * 4;
};

const getCanvasFromImage = (image: HTMLImageElement) => {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;

  const ctx = canvas.getContext("2d");
  ctx?.drawImage(image, 0, 0);
  return canvas;
};
