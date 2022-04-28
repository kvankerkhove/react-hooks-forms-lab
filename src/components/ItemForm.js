import React from "react";
import { v4 as uuid } from "uuid";



function ItemForm({ onCategoryChangeTwo, onNameChange, onItemFormSubmit, name, category }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onItemFormSubmit({ id: uuid(), name: e.target.name.value, category: e.target.category.value})
      }} className="NewItem">
      <label>
        Name:
        <input onChange = {onNameChange} type="text" name="name" value={name} />
      </label>

      <label>
        Category:
        <select onChange ={onCategoryChangeTwo} name="category" value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

// { id: uuid(), name: formData.name, category: formData.category}
