// src/components/ImageUploader.tsx
import React, { useState } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  FirebaseStorage,
  StorageReference,
} from 'firebase/storage';
import { storage } from '../firebase';
import { v4 as uuidv4 } from 'uuid'; // Dùng để tạo tên file duy nhất

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

function ImageUploader() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [status, setStatus] = useState<UploadStatus>('idle');
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    if (!files || files.length === 0) return;

    setStatus('uploading');

    try {
      const urls: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const storageRef = ref(storage, `images/${uuidv4()}-${file.name}`);

        await uploadBytes(storageRef, file);
        const downloadUrl = await getDownloadURL(storageRef);
        urls.push(downloadUrl);
      }

      setUploadedUrls(urls);
      setStatus('success');
      alert('Upload thành công!');
    } catch (error) {
      console.error('Lỗi khi upload:', error);
      setStatus('error');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Upload nhiều ảnh lên Firebase Storage</h2>
      <input type="file" multiple accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!files || status === 'uploading'}>
        {status === 'uploading' ? 'Đang tải lên...' : 'Tải lên'}
      </button>

      {status === 'success' && (
        <div style={{ marginTop: '20px' }}>
          <h3>Ảnh đã upload:</h3>
          <ul>
            {uploadedUrls.map((url, index) => (
              <li key={index}>
                <img src={url} alt={`Upload ${index}`} style={{ width: '200px', margin: '10px' }} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === 'error' && <p style={{ color: 'red' }}>Lỗi khi tải ảnh lên</p>}
    </div>
  );
}

export default ImageUploader;