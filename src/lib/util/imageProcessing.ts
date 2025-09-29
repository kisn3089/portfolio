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
): Promise<string> => {
  const canvas = getCanvasFromImage(image);
  const imageData = await processImageWithWorker(canvas, thresholdRef);
  return imageData;
};

const processImageWithWorker = async (
  src_canvas: HTMLCanvasElement,
  thresholdRef: number
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const src_ctx = src_canvas.getContext("2d");
    if (!src_ctx) return reject(new Error("Failed to get canvas context"));

    const src_image_data = src_ctx.getImageData(
      0,
      0,
      src_canvas.width,
      src_canvas.height
    );

    const workerUrl = new URL("/imageWorker.js", import.meta.url);
    const worker = new Worker(workerUrl);

    worker.onmessage = (e) => {
      const { image, error } = e.data;
      worker.terminate();
      if (error) return reject(new Error(error));

      resolve(image);
    };

    worker.onerror = (error) => {
      worker.terminate();
      reject(error);
    };

    worker.postMessage({
      imageData: src_image_data.data,
      thresholdRef,
      width: src_image_data.width,
      height: src_image_data.height,
    });
  });
};

const getCanvasFromImage = (image: HTMLImageElement) => {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;

  const ctx = canvas.getContext("2d");
  ctx?.drawImage(image, 0, 0);
  return canvas;
};
