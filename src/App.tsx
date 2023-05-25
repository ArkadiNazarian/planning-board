import { release_train_list, program_increment_list, tickets_list } from "./data";
import './my.css'
// function App() {
//   return (
//     <div className="App tw-ml-7">
//       <div className="tw-flex tw-relative">
//         {
//           program_increment_list.map((increment_value, increment_index) => (
//             <div className="tw-border">
//               <p className="tw-w-96 tw-border-b-4">{increment_value.title}</p>
//               <div className="tw-flex tw-flex-col tw-mt-[-13rem] tw-ml-[-8rem]">
//                 {
//                   release_train_list.map((train_value, index) => (
//                     <div className="">
//                       <p className="tw-origin-center tw--rotate-90 tw-h-60"> {increment_index === 0 && train_value.title }</p>
//                       <div className="tw-ml-40 tw-mt-20">
//                         {
//                           tickets_list.filter((value)=>train_value._id === value.release_train_id && increment_value._id === value.program_increment_id).map((ticket_value, index) => (
//                             <div className="tw-w-56 tw-h-32 tw-border">
//                               {ticket_value.title}
//                             </div>
//                           ))
//                         }
//                       </div>
//                     </div>
//                   ))
//                 }
//               </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      {/* {
        release_train_list.map((value, train_index) => (
          <div className="">
            <p className="tw-py-14 tw-px-6 tw-w-48 tw--rotate-90 tw-mt-[3.75rem] tw-border">{value.title}</p>
            <div className="tw-flex tw-ml-48">
              {
                program_increment_list.map((value, index) => (
                  <div>
                    <p className={`tw-border tw-mt-[-10rem]`}>{train_index === 0 && value.title}</p>
                    <div className="tw-w-36 tw-h-40 tw-border"></div>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      } */}

      {/* <table>
        <tr>
          <td rowSpan={2}></td>
        </tr>
        <tr>
          <th>Produced</th>
          <th>Sold</th>
          <th>Produced</th>
          <th>Sold</th>
        </tr>
        <tr>
          <th>Teddy Bears</th>
          <td>50,000</td>
          <td>30,000</td>
          <td>100,000</td>
          <td>80,000</td>
        </tr>
        <tr>
          <th>Board Games</th>
          <td>10,000</td>
          <td>5,000</td>
          <td>12,000</td>
          <td>9,000</td>
        </tr>
      </table> */}

      <table className="tw-border">
        {
          release_train_list.map((value, train_index) => (
            <tr className="">
              <th className="tw-border">{value.title}</th>
              {
                program_increment_list.map((value, index) => (
                  <td className="tw-border">{train_index === 0 && value.title}</td>
                ))
              }
            </tr>

          ))
        }
      </table>
    </div>
  )
}

export default App;