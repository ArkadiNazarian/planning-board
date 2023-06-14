import { tickets_list } from "./data";

interface ICardModel {
    release_train_id: string;
    program_increment_id: string;
}

export const Card = (props: ICardModel) => {

    const filtered_array = tickets_list.filter((value, index) => value.program_increment_id === props.program_increment_id && value.release_train_id === props.release_train_id)

    return (
        <div className="tw-grid tw-grid-cols-2 tw-p-2">
            {
                filtered_array.map((value, index) => (
                    <div className="tw-border tw-m-2 tw-w-40 tw-h-20">
                        <p className="">{value.title}</p>
                    </div>
                ))
            }
        </div>
    )
}