import React, { useState } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Summary from "./forms/Summary";
import Experience from "./forms/Experience";
import Education from "./forms/Education";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(4);
  const [enableNext, setEnableNext] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <Button variant="outline" className="flex gap-2 " size="sm">
          {" "}
          <LayoutGrid />
          Theme
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              className="flex gap-2 "
              size="sm"
              onClick={() => setActiveFormIndex((prev) => prev - 1)}
            >
              <ArrowLeft /> Previous
            </Button>
          )}
          <Button
            className="flex gap-2 "
            size="sm"
            disabled={!enableNext}
            onClick={() => setActiveFormIndex((prev) => prev + 1)}
          >
            Next <ArrowRight />{" "}
          </Button>
        </div>
      </div>
      {/* personal detail */}
      {activeFormIndex == 1 ? (
        <PersonalDetail enableNext={(value) => setEnableNext(value)} />
      ) : null}

      {activeFormIndex == 2 ? (
        <Summary enableNext={(value) => setEnableNext(value)} />
      ) : null}

      {activeFormIndex == 3 ? (
        <Experience enableNext={(value) => setEnableNext(value)} />
      ) : null}
      
      {activeFormIndex == 4 ? (
        <Education enableNext={(value) => setEnableNext(value)} />
      ) : null}
    </div>
  );
}

export default FormSection;
