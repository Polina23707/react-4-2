import './App.css'
import TableRow from './components/TableRow'
import { useState } from 'react'

interface RowType {
  id: number,
  date: string,
  distance: number,
}

function App() {
  const [list, setList] = useState<RowType[]>([])

  const [date, setDate] = useState('');
  const [distance, setDistance] = useState(0);

  const addNewRow = (e: any) => {
    e.preventDefault();
    if (date && distance) {
      const newRow = {
        id: Date.now(),
        date,
        distance
      }

      if (list.map((row) => row.date).includes(newRow.date)) {
        let index = (list.map((row) => row.date).indexOf(newRow.date));
        list[index].distance = Number(list[index].distance) + Number(newRow.distance);
        setList([...list]);
      } else {
        setList([...list, newRow]);
      }
    }
  }

  function onDeleteRow(e: any) {
    e.preventDefault();
    let index = (list.map((row) => row.id).indexOf(Number(e.target.id)));
    list.splice(index,1);
    setList([...list]);
  }

  const newArray = () => {
    let newArray = list.sort((a, b) => (a.date > b.date ? -1 : 1));
    return( 
      newArray.map((row) => 
        <TableRow key={row.id} id={row.id} date={row.date} distance={row.distance} onDeleteRow={onDeleteRow}/>
      )
    ) 
  }

  return (
    <div>
      <form className="form">
        <div className="form-item">
          <label id="date">Дата (ДД.ММ.ГГ)</label>
          <input value={date} onChange={e => setDate(e.target.value) } id='date' type="date"></input>
        </div>
        <div className="form-item">
          <label id="distance">Пройдено км</label>
          <input value={distance} onChange={e => setDistance(Number(e.target.value))} id='distance' type='number'></input>
        </div>
        <div>
          <button onClick={addNewRow} id="submit" > ОК</button>
        </div>
      </form>

      <div className="table">
        <div className="table-headers">
          <div>Дата (ДД.ММ.ГГ)</div>
          <div>Пройдено км</div>
          <div>Действия</div>
        </div>
        <div className="table-data">
          {newArray()}
        </div>
      </div>
    </div>
  )
}

export default App;
