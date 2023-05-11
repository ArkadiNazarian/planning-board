import { release_train_list, program_increment_list, tickets_list } from "./data";

function App() {
  return (
    <div className="App tw-ml-7">
      <div className="tw-flex tw-relative">
        {
          program_increment_list.map((increment_value, increment_index) => (
            <div className="tw-border">
              <p className="tw-w-96 tw-border-b-4">{increment_value.title}</p>
              <div className="tw-flex tw-flex-col tw-mt-[-13rem] tw-ml-[-8rem]">
                {
                  release_train_list.map((train_value, index) => (
                    <div className="">
                      <p className="tw-origin-center tw--rotate-90 tw-h-60"> {increment_index === 0 && train_value.title }</p>
                      <div className="tw-ml-40 tw-mt-20">
                        {
                          tickets_list.filter((value)=>train_value._id === value.release_train_id && increment_value._id === value.program_increment_id).map((ticket_value, index) => (
                            <div className="tw-w-56 tw-h-32 tw-border">
                              {ticket_value.title}
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;