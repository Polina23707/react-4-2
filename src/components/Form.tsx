import {FC, useState} from "react";

type FormType = {
  date: string;
  distance: string;
}

export const Form: FC = () => {

  const [form, setForm] = useState<FormType>({
    date: '00.00.00',
    distance: '0',
  })

  const onSumbit = (event: any) => {
    event.preventDefault();
    const target = event.target;
 
    const formData = {
      date: target.date.value,
      distance: target.distance.value,
    };

    setForm({date: formData.date, distance: formData.distance});
    console.log(form);
  }

  return(
    <form className="form"  onSubmit={onSumbit}>
      <div className="form-item">
        <label id="date">Дата (ДД.ММ.ГГ)</label>
        <input id='date' type="date" ></input>
      </div>
      <div className="form-item">
        <label id="distance">Пройдено км</label>
        <input id='distance' type='text'></input>
      </div>
      <div>
        <button id="submit" > ОК</button>
      </div>
    </form>
  )
}