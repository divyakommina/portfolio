import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import SurveySection from "./components/survey/SurveySection";

export default function SurveyForm(){

  // form contains 3 sections.
  /*sections - 3
   1. Personal details.
   2. General Questions
   3. Customer Feedback
   */
   return (
    <div>
      <SurveySection>
       Section 1 here
      </SurveySection>
    </div>

   )
}