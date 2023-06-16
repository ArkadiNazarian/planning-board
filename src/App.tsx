import { Card } from "./card";
import { release_train_list, program_increment_list } from "./data";
import './my.css'

const App = () => {

  const color_picker = (index: number) => {
    console.log(index)
    switch (index) {
      case 1:
        return "custom_yellow";
      case 2:
        return "custom_red";
      case 3:
        return "custom_purple";
      case 4:
        return "custom_pink";
      default:
        break;
    }
  }

  return (
    <div className="tw-w-full">
      <table className="tw-border">
        <tbody>
          {
            release_train_list.map((train_value, train_index) => (
              <tr key={train_value._id}>
                <th className={`${train_index === 0 ? "tw-border-none" : "tw-border"}`}>
                  <div className={`tw-bg-${color_picker(train_index)} tw-p-2`}>
                    {train_value.title}
                  </div>
                </th>
                {
                  program_increment_list.map((increment_value, index) => (
                    <td key={increment_value._id} className={` ${train_index !== 0 && "tw-border"} ${train_index === 0 && "tw-pl-3 tw-font-bold"}`}>{train_index === 0 ? increment_value.title : <Card program_increment_id={increment_value._id} release_train_id={train_value._id} />}</td>
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