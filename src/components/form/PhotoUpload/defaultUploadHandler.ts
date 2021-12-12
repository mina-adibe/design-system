const readFileAsync = (file: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result as any);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });

const defaultUploadHandler = async (files: File[]) => {
  const urls = await Promise.all(files.map(async (f) => readFileAsync(f)));

  return urls;
};

export default defaultUploadHandler;
