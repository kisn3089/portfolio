// Web Worker for image processing
self.onmessage = async function (e) {
  const { imageData, thresholdRef, width, height } = e.data;

  try {
    const processedImage = await processImageData(
      imageData,
      thresholdRef,
      width,
      height
    );
    self.postMessage({ image: processedImage });
  } catch (error) {
    self.postMessage({ error: error.message });
  }
};

function processImageData(imageData, thresholdRef, width, height) {
  if (thresholdRef > 3) thresholdRef = 3;
  if (thresholdRef < 0) thresholdRef = 0;

  const processedData = new Uint8ClampedArray(imageData);

  const process = (x, coefficient, gray) => {
    return x * coefficient + gray * (1 - coefficient);
  };

  const COEFF = thresholdRef;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const offset = (y * width + x) * 4;
      const r = imageData[offset];
      const g = imageData[offset + 1];
      const b = imageData[offset + 2];
      const grayscale = (r + g + b) / 3;

      processedData[offset] = process(r, COEFF, grayscale);
      processedData[offset + 1] = process(g, COEFF, grayscale);
      processedData[offset + 2] = process(b, COEFF, grayscale);
      processedData[offset + 3] = imageData[offset + 3];
    }
  }

  const processedImageData = new ImageData(processedData, width, height);

  // OffscreenCanvas를 사용하여 워커에서 canvas 객체 처리
  const offscreenCanvas = new OffscreenCanvas(width, height);
  const ctx = offscreenCanvas.getContext("2d");
  ctx.putImageData(processedImageData, 0, 0);

  // convertToBlob을 사용하여 데이터URL 생성
  return offscreenCanvas
    .convertToBlob({ type: "image/webp", quality: 1 })
    .then((blob) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    });
}
