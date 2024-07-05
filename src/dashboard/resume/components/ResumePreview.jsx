import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext } from "react";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import SummaryPreview from "./preview/SummaryPreview";
import ProfessionalExperiencePreview from "./preview/ProfessionalExperiencePreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";

function ResumePreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div className="h-full shadow-lg p-14 border-t-[20px]" style={{
      borderColor: resumeInfo?.themeColor
    }}>
      {/* personal details */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />

      {/* summary */}
      <SummaryPreview resumeInfo={resumeInfo}/>
      <ProfessionalExperiencePreview resumeInfo={resumeInfo}/>

      <EducationalPreview resumeInfo={resumeInfo}/>
      <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  );
}

export default ResumePreview;
