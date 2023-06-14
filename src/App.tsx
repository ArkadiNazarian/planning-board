import { Card } from "./card";
import { release_train_list, program_increment_list } from "./data";
import './my.css'

const App = () => {
  return (
    <div>
      <table className="tw-border">
        {
          release_train_list.map((train_value, train_index) => (
            <tr>
              <th className="tw-border">{train_value.title}</th>
              {
                program_increment_list.map((increment_value, index) => (
                  <td className="tw-border">{train_index === 0 ? increment_value.title:<Card program_increment_id={increment_value._id} release_train_id={train_value._id}/>}</td>
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