import AddSpendingForm from "../components/AddSpendingForm";
import AddIncomeForm from "../components/AddIncomeForm";
import InitialSurvey from "./InitialSurvey";
// goal is to grow saving
//   put it into growth savings account
//   invest
//     show options for investing
// if goal is to save more
//   stop spending if spending too much
//     they would need to categorize spending to see where they can save
//     divide spending by categories,
//       needs vs wants
//         needs = bills, food
//         priority list for wants ranking 1-5
//         wants = boba, vacation

export default function advicePage() {
  // const [finData,setFinData] = useState()
  // fin data should be in weekly, biweekly or monthly view based on settings
  // const [timeperiod,settimePeriod] = useState()
  // useEffect(()=>{
  // get fin data if stored
  // update db data upon unmount with saved fin data
  // })

  const updateSpendingData = () => {
    // update statedata
  };

  const saveSpendingData = () => {
    // update db with spending data
  };

  const deleteSpendingData = () => {};

  return (
    <div className="surveypage">
        <InitialSurvey/>
        <AddIncomeForm/>
        <AddSpendingForm/>
      
      {/* display pie chart if data */}
      {/* display what they can save on */}
    </div>
  );
};
