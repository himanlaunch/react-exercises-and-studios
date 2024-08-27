import { useState } from 'react';

export default function BoardAssignment () {

   const [boardName, setName] = useState('no boards yet!');

   const boards = [
      { label: 'Desserts', value: 'desserts' },
      { label: 'Chocolate Recipes', value: 'chocolate' },
      { label: 'Special Occasions', value: 'special-occasions' }
   ];

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "100px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
               {boards.map(board => (
               <option key={board.value} value={board.value}>
                  {board.label}
               </option>
            ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
