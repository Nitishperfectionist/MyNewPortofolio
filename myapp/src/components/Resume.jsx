import React from 'react';
import resume from '../image/resume.pdf';

export default function Resume() {
  return (
    <div className="resume-container">
      <a
        target='_blank'
        id="resume-button"
        href={resume}
        download
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  );
}
