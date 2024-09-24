"use client";

import { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function ResumePage() {
  const [loading, setLoading] = useState(true);
  const resumeUrl = '/memo-resume-sep-2024.pdf';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8">My Resume</h2>
      {/* Full page and download buttons */}
      <div className="flex justify-between items-center mb-4">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#181818] text-[#EFF0F0] border border-[#F7A650] hover:bg-[#F7A650] hover:text-[#181818] rounded-md transition-all duration-300"
        >
          View Full Page
        </a>
        <a
          href={resumeUrl}
          download="Memo-Resume.pdf"
          className="px-4 py-2 bg-[#181818] text-[#EFF0F0] border border-[#F7A650] hover:bg-[#F7A650] hover:text-[#181818] rounded-md transition-all duration-300"
        >
          Download
        </a>
      </div>

      {/* Inline Resume Viewer */}
      <div className="border border-[#F7A650] p-4 rounded-md bg-[#1F1F1F] shadow-lg">
        {loading && (
          <div className="text-center text-[#F7A650] py-4">Loading Resume...</div>
        )}
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
            <Viewer fileUrl={resumeUrl} onDocumentLoad={() => setLoading(false)} />
        </Worker>
      </div>
    </div>
  );
}
