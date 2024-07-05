import React from "react";

function PersonalDetailPreview({ resumeInfo }) {
  return (
    <div>
      <h2
        className="font-bold text-xl text-center "
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="font-medium text-xl text-center ">
        {resumeInfo?.jobTitle}
      </h2>
      <h2
        className="text-center font-normal text-xs"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.address}
      </h2>

      <div className="flex justify-between items-center">
        <h2
          style={{
            color: resumeInfo?.themeColor,
          }}
          className=" font-normal text-xs"
        >
          {resumeInfo?.address}
        </h2>
        <h2
          style={{
            color: resumeInfo?.themeColor,
          }}
          className=" font-normal text-xs"
        >
          {resumeInfo?.email}
        </h2>
      </div>

      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
    </div>
  );
}

export default PersonalDetailPreview;
