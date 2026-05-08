"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class Base64UploadAdapter {
  loader: any;

  constructor(loader: any) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file: File) =>
        new Promise<{ default: string }>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve({ default: reader.result as string });
          };
          reader.onerror = (err) => {
            reject(err);
          };
          reader.readAsDataURL(file);
        })
    );
  }

  abort() {
    // no-op
  }
}

function Base64UploadAdapterPlugin(editor: any) {
  const fileRepo = editor.plugins.get("FileRepository");
  if (fileRepo) {
    fileRepo.createUploadAdapter = (loader: any) => {
      return new Base64UploadAdapter(loader);
    };
  }
}

export default function NewsRichEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <CKEditor
      editor={ClassicEditor as never}
      data={value}
      onChange={(_event, editor) => {
        onChange(editor.getData());
      }}
      config={{
        extraPlugins: [Base64UploadAdapterPlugin],
        toolbar: [
          "bold",
          "italic",
          "|",
          "link",
          "imageUpload",
          "|",
          "bulletedList",
          "numberedList",
          "|",
          "undo",
          "redo",
        ],
        image: {
          toolbar: [
            "imageStyle:inline",
            "imageStyle:block",
            "imageStyle:side",
            "|",
            "toggleImageCaption",
            "imageTextAlternative",
          ],
        },
      }}
    />
  );
}
