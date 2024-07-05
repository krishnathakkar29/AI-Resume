import React from "react";

function ProfessionalExperiencePreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Professional Experience
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      {resumeInfo?.experience?.map((expi, index) => (
        <div key={index} className="my-5 ">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {expi?.title}
          </h2>
          <h2 className="text-xs flex justify-between">
            {expi?.companyName} , {expi?.city}, {expi?.state}
            <span>
              {expi?.startDate}{" "}
              {expi?.currentlyWorking ? "Current" : expi?.endDate}
            </span>
          </h2>
          <p className="text-xs my-2">{expi?.workSummary}</p>
        </div>
      ))}
    </div>
  );
}

export default ProfessionalExperiencePreview;
