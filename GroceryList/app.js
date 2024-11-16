document.addEventListener("DOMContentLoaded", () => {
    const groceryInput = document.getElementById("grocery-input");
    const addItemButton = document.getElementById("add-item");
    const groceryList = document.getElementById("grocery-list");

    let items = [];

    // Add item to the list
    addItemButton.addEventListener("click", () => {
        const itemText = groceryInput.value.trim();
        if (itemText) {
            const newItem = { id: new Date().getTime(), text: itemText };
            items.push(newItem);
            renderList();
            groceryInput.value = ""; // Clear input field
        } else {
            alert("Please enter an item!");
        }
    });

    // Render the list
    function renderList() {
        groceryList.innerHTML = ""; // Clear existing list

        items.forEach((item) => {
            // Create list item
            const li = document.createElement("li");

            // Text div for the grocery item
            const textDiv = document.createElement("div");
            textDiv.className = "text";
            textDiv.textContent = item.text;

            // Buttons container
            const buttonsDiv = document.createElement("div");
            buttonsDiv.className = "buttons";

            // Edit button
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.className = "edit";
            editButton.addEventListener("click", () => editItem(item.id));

            // Delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete";
            deleteButton.addEventListener("click", () => deleteItem(item.id));

            // Append buttons to the buttonsDiv
            buttonsDiv.appendChild(editButton);
            buttonsDiv.appendChild(deleteButton);

            // Append text and buttonsDiv to li
            li.appendChild(textDiv);
            li.appendChild(buttonsDiv);

            // Add the complete list item to the grocery list
            groceryList.appendChild(li);
        });
    }

    // Edit item
    function editItem(id) {
        const itemToEdit = items.find((item) => item.id === id);
        const newText = prompt("Edit item:", itemToEdit.text);
        if (newText) {
            itemToEdit.text = newText;
            renderList();
        }
    }

    // Delete item
    function deleteItem(id) {
        items = items.filter((item) => item.id !== id);
        renderList();
    }
});
