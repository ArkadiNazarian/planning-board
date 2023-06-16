import { tickets_list } from "./data";

interface ICardModel {
    release_train_id: string;
    program_increment_id: string;
}

export const Card = (props: ICardModel) => {

    const filtered_array = tickets_list.filter((value, index) => value.program_increment_id === props.program_increment_id && value.release_train_id === props.release_train_id)

    return (
        <div className="tw-grid tw-grid-cols-2 tw-p-2 tw-flex-wrap">
            {
                filtered_array.map((value, index) => (
                    <div key={value._id} className="tw-border tw-m-2 tw-w-48 tw-h-28 tw-p-2">
                        <p className="tw-text-xs">{value.level}</p>
                        <p className="tw-mt-3">{value.title}</p>
                    </div>
                ))
            }
        </div>
    )
}