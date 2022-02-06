const readFileAsync = (file: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result as any);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });

const defaultUploadHandler = async (files: File[]): Promise<string[]> => {
  return new Promise((res) => {
    window.setTimeout(async () => {
      const urls = await Promise.all(files.map(async (f) => readFileAsync(f)));

      res(urls);
    }, 1000);
  });
};

export default defaultUploadHandler;
