import React from 'react';

const ResumeLink = () => {
    const resumeLink =
        'https://docs.google.com/document/d/1yOKCl-K9FTa4ZWGj-j4S-yJ5dAlAgG4H0Qpb6lrJFcg/edit?usp=sharing';
    return (
        <div className="resume_download">
            <a href={resumeLink} target="blank">
                <i className="fa fa-file-pdf-o" aria-hidden="true" />Dowload PDF
            </a>
        </div>
    );
};

export default ResumeLink;
