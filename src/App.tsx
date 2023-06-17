import { Card } from "./card";
import { release_train_list, program_increment_list } from "./data";
import './my.css'

const App = () => {

  return (
    <div className="tw-w-full">
      <table className="tw-border">
        <tbody>
          {
            release_train_list.map((train_value, train_index) => (
              <tr key={train_value._id}>
                <th className={`${train_index === 0 ? "tw-border-none" : "tw-border"}`}>
                  <div className={`${(train_index === 1 || train_index % 4 === 1) ? "tw-bg-custom_yellow tw-text-custom_yellow" : (train_index === 2 || train_index % 4 === 2) ? "tw-bg-custom_red tw-text-custom_red" : (train_index === 3 || train_index % 4 === 3) ? "tw-bg-custom_purple tw-text-custom_purple" : (train_index === 4 || (train_index % 4 === 0 && train_index !== 0)) && "tw-bg-custom_pink tw-text-custom_pink"} tw-p-2 tw-rounded-lg tw-min-w-max`}>
                    {train_value.title}
                  </div>
                </th>
                {
                  program_increment_list.map((increment_value, index) => (
                    <td key={increment_value._id} className={` ${train_index !== 0 && "tw-border"} ${train_index === 0 && "tw-pl-3 tw-font-bold except"}`}>{train_index === 0 ? increment_value.title : <Card program_increment_id={increment_value._id} release_train_id={train_value._id} />}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;