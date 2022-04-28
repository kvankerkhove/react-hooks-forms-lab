import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterBy, setFilterBy] = useState("")
  const [allItems, setAllItems] = useState(items)
  const [formData, setFormData] = useState({id: "", name: "", category: "Produce"})

  
  
  function onItemFormSubmit(obj){
    console.log(formData.name)
    console.log(formData.category)
    const newItem = {
      id: obj.id,
      name: obj.name,
      category: obj.category
    }
    const newArray = [...allItems, newItem]
    setAllItems(newArray)
  }


  function handleNameChange(event) {
    setFormData({
      ...formData,
      name: event.target.value
    })
  }

  function handleCategoryChangeTwo(event) {
    setFormData({
      ...formData,
      category: event.target.value
    })
  }





  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = allItems.filter((item) => {
    let lowerCaseItem = item.name.toLowerCase()
    let lowerCaseFilterBy = filterBy.toLowerCase()
    if ((selectedCategory === "All") && (lowerCaseItem.includes(lowerCaseFilterBy))) return true;

    return item.category === selectedCategory;
  });

  function handleSearchChange(event) {
    setFilterBy(event.target.value)
    
  }
  


  
  return (
    <div className="ShoppingList">
      <ItemForm onCategoryChangeTwo={handleCategoryChangeTwo} onNameChange={handleNameChange} onItemFormSubmit={onItemFormSubmit} name={formData.name} category={formData.category}/>
      <Filter onSearchChange ={handleSearchChange} onCategoryChange={handleCategoryChange} filter={filterBy} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
