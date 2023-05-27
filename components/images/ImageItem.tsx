import { saveAs } from 'file-saver';
import React, { FC, useCallback } from 'react';
import Image from 'next/image';
import imageLoader from '@/imageLoader';
import { AiOutlineCloudDownload } from 'react-icons/ai';

interface ImageItemProps {
  imageUrl: string;
  genre: string;
  creator: string;
  createdAt: string;
  isDownloaded: boolean;
}

const ImageItem: FC<ImageItemProps> = ({
  imageUrl,
  genre,
  creator,
  createdAt,
  isDownloaded,
}) => {
  const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgAB...';

  const dateOfCreation = new Date(createdAt).toLocaleDateString();

  const redirectToDownload = useCallback(() => {
    // Perform the download logic here
    fetch(imageUrl) // Fetch the image URL
      .then(response => response.blob()) // Convert the response to a Blob
      .then(blob => {
        saveAs(blob, 'image.jpg'); // Save the Blob as a file using FileSaver.js
      })
      .catch(error => {
        console.error('Error downloading image:', error);
      });
  }, [imageUrl]);

  return (
    <div className="group relative bg-zinc-800 rounded-lg flex flex-col items-start justify-center cursor-pointer transition duration-400">
      <Image
        unoptimized
        alt="Image"
        quality={100}
        width={200}
        height={200}
        src={imageUrl}
        placeholder="blur"
        blurDataURL={blurDataURL}
        loader={imageLoader}
        loading="lazy"
        className="w-full h-full rounded-lg"
      />
      <div className="group-hover:bg-gradient-to-t from-slate-900 w-full h-full rounded-lg z-50 absolute transition duration-400 flex flex-col items-start justify-between px-3 py-2">
        <p className="opacity-0 group-hover:opacity-100 text-white font-bold text-sm transition duration-300">
          {genre}
        </p>
        <div className="w-full opacity-0 group-hover:opacity-100 flex justify-between items-center transition duration-400">
          <div className="flex items-start flex-col">
            <p className="text-md text-white truncate transition">{creator}</p>
            <p className="text-sm text-neutral-500 transition">
              {dateOfCreation}
            </p>
          </div>
          <AiOutlineCloudDownload
            className="hover:opacity-70 cursor-pointer"
            size={25}
            color="#fff"
            onClick={redirectToDownload}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
