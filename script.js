function saveform(event) {
    event.preventDefault();

    // Get values from form fields
    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked')?.value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value.trim();

    // Create a table row
    var table = document.getElementById("userTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();

    newRow.innerHTML = `
        <td class="p-1">${name}</td>
        <td class="p-1">${age}</td>
        <td class="p-1">${gender}</td>
        <td class="p-1">${course}</td>
        <td class="p-1">${email}</td>
        <td class="p-1">
            <button class="del">Delete</button>
        </td>
    `;

    // Add delete functionality
    var deleteButton = newRow.querySelector(".del");
    deleteButton.addEventListener("click", function(){
        if (confirm("Press Ok To Delete This Form?")) {
            table.deleteRow(newRow.rowIndex - 1);
        }
    });

}

let editingRow = null; 

function saveform(event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked')?.value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value.trim();

    if (editingRow) {
        // Update existing row
        editingRow.cells[0].innerText = name;
        editingRow.cells[1].innerText = age;
        editingRow.cells[2].innerText = gender;
        editingRow.cells[3].innerText = course;
        editingRow.cells[4].innerText = email;

        editingRow = null; 
 }   else  {
        // Add new row
        var table = document.getElementById("userTable").getElementsByTagName("tbody")[0];
        var newRow = table.insertRow();

        newRow.innerHTML = `
            <td class="p-1 text-white">${name}</td>
            <td class="p-1 text-white">${age}</td>
            <td class="p-1 text-white">${gender}</td>
            <td class="p-1 text-white">${course}</td>
            <td class="p-1 text-white">${email}</td>
            <td class="p-1 text-white">
                <button class="del" style="background-color: #f6e1cc; color: black; border-radius: 20px; width: 100px ">Delete</button>
            </td>
        `;

        // Add event listeners
        var deleteBtn = newRow.querySelector(".del");
     
        deleteBtn.addEventListener("click", function(){
            if (confirm("Press Ok To Delete This Form?")) {
                newRow.remove();
            }
        });
      
    }
    event.target.reset(); // Clear form
}

