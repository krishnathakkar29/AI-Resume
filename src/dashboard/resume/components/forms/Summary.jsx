import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useState } from "react";
import { updateResumeDetail } from "../../../../../service/globalApi";
import { Brain, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { chatSession } from "../../../../../service/aiModel";

const prompt =
  "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";
function Summary({ enableNext }) {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  const [aiGeneratedSummaryList, setAiGenerateSummaryList] = useState();

  const [summary, setSummary] = useState();
  const handleInputChange = (e) => {
    setResumeInfo({
      ...resumeInfo,
      summary: e.target.value,
    });

    setSummary(e.target.value);
  };

  const onSave = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      data: {
        summary,
      },
    };
    console.log("yeh hai summary", data);
    try {
      const res = await updateResumeDetail(params.resumeId, data);
      console.log(res);
      toast("Details Updated!");
      enableNext(true);
    } catch (error) {
      console.log("Error in personal detail form", error);
    } finally {
      setLoading(false);
    }
  };

  const generateSummaryFromAI = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);
    try {
      const result = await chatSession.sendMessage(PROMPT);
      const responseText = await result.response.text();

      let parsedResult;
      if (/```json|```/.test(responseText)) {
        const cleanedResponseText = responseText.replace(/```json|```/g, "");

        parsedResult = JSON.parse(cleanedResponseText);
      } else {
        parsedResult = JSON.parse(responseText);
      }
      console.log(parsedResult);
      setAiGenerateSummaryList(parsedResult);
      setLoading(false);
    } catch (error) {
      console.log("Error in generating the summary", error);
      setLoading(false);
    }
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Summary</h2>
      <p>Add summary for your job title</p>

      <form className="mt-7" onSubmit={onSave}>
        <div className="flex justify-between items-end">
          <label htmlFor="">Add Summary</label>
          <Button
            className="border-primary text-primary flex gap-2"
            size="sm"
            variant="outline"
            type="button"
            onClick={generateSummaryFromAI}
          >
            <Brain className="h-4 w-4" />
            Generate from AI
          </Button>
        </div>
        <Textarea className="mt-5" onChange={handleInputChange}></Textarea>
        <div className="mt-2 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>

      {aiGeneratedSummaryList && (
        <div>
          <h2 className="font-bold text-lg">Suggestions</h2>
          {aiGeneratedSummaryList.map((item, index) => (
            <div key={index}>
              <h2 className="font-bold my-1">Level: {item.experience_level}</h2>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Summary;
