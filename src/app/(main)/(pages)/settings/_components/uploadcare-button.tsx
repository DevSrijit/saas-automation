"use client";
import React, { useEffect, useRef } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useRouter } from "next/navigation";

type Props = {
  onUpload: (e: string) => any;
};

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();

  const handleUploadSuccess = async (e: any) => {
    const file = await onUpload(e.fileInfo.cdnUrl);
    if (file) {
      router.refresh();
    }
  };

  return (
    <div>
      <FileUploaderRegular
        pubkey="888328bd9961325a729a"
        maxLocalFileSizeBytes={500000000}
        multiple={false}
        imgOnly={true}
        sourceList="local, url, camera, dropbox, facebook, gdrive, gphotos, instagram"
        classNameUploader="my-config"
        onFileUploadSuccess={handleUploadSuccess}
      />
    </div>
  );
};

export default UploadCareButton;
