import { ReactNode, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export interface FileUploadProps<T extends boolean> {
  name: string;
  children: (props: FileUploadRenderFnProps<T>) => ReactNode;
  onUpload: (files: File[]) => Promise<string[]>;
  // Input attributes
  multiple?: T;
  accept?: string;
  capture?: 'user' | 'environment';
}

interface FileUploadRenderFnProps<multiple extends boolean> {
  isUploading: boolean;
  openFileDialog: () => void;
  value: multiple extends true ? string[] : string | undefined;
  setValue: (value: multiple extends true ? string[] : string | undefined) => void;
}

/**
 * A generic file upload component
 */
const FileUpload = <T extends boolean = false>({
  children,
  onUpload,
  name,
  multiple,
  accept,
  capture,
}: FileUploadProps<T>) => {
  const [isUploading, setIsUploading] = useState(false);

  const { control } = useFormContext();

  const openFileDialog = (setValue: (value: string[] | string) => void) => () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = multiple || false;
    input.accept = accept || '';
    input.capture = capture || '';
    input.onchange = async (e) => {
      setIsUploading(true);
      const files = Array.from((e as any).target.files) as File[];
      const urls = await onUpload(files);
      setIsUploading(false);
      setValue(multiple ? urls : urls[0]);
    };
    input.click();
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <>
          {children({
            openFileDialog: openFileDialog(onChange),
            isUploading,
            value,
            setValue: onChange,
          })}
        </>
      )}
    />
  );
};

export default FileUpload;
