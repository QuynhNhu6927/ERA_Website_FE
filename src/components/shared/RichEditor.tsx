"use client";

import { useRef, useEffect } from "react";
import { colors, withOpacity } from "@/lib/theme";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Italic,
  Essentials,
  Paragraph,
  Link,
  List,
  Image,
  ImageUpload,
  ImageToolbar,
  ImageStyle,
  ImageCaption,
  ImageTextAlternative,
  FontSize,
  WordCount,
  Undo,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

class CustomUploadAdapter {
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

function CustomUploadAdapterPlugin(editor: any) {
  const fileRepo = editor.plugins.get("FileRepository");
  if (fileRepo) {
    fileRepo.createUploadAdapter = (loader: any) => {
      return new CustomUploadAdapter(loader);
    };
  }
}

class CustomEditor extends ClassicEditor {
  static builtinPlugins = [
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Link,
    List,
    Image,
    ImageUpload,
    ImageToolbar,
    ImageStyle,
    ImageCaption,
    ImageTextAlternative,
    FontSize,
    WordCount,
    Undo,
    CustomUploadAdapterPlugin,
  ];

  static defaultConfig = {
    licenseKey: "GPL",
    toolbar: [
      "fontSize",
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

    fontSize: {
      options: [9, 11, 13, "default", 17, 19, 21, 24, 28],
      supportAllValues: true,
    },
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
  };
}

export default function RichEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const wordCountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const styleId = "ckeditor-custom-height";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .ck-editor__editable_inline {
          min-height: 360px !important;
          max-height: 360px !important;
          overflow-y: auto !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div>
      <CKEditor
        editor={CustomEditor as never}
        data={value}
        onChange={(_event, editor) => {
          onChange(editor.getData());
        }}
        onReady={(editor) => {
          if (wordCountRef.current) {
            wordCountRef.current.innerHTML = "";
            const wordCountPlugin = (editor as any).plugins.get("WordCount");
            if (wordCountPlugin && wordCountPlugin.wordCountContainer) {
              wordCountRef.current.appendChild(wordCountPlugin.wordCountContainer);
            }
          }
        }}
      />
      <div
        ref={wordCountRef}
        className="flex justify-end px-3 py-1.5 text-xs"
        style={{
          color: colors.gray[400],
          borderTop: `1px solid ${colors.gray[100]}`,
          backgroundColor: withOpacity(colors.gray[50], 0.5),
        }}
      />
    </div>
  );
}
