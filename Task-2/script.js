var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["StudentName"] = document.getElementById("StudentName").value;
    formData["age"] = document.getElementById("age").value;
    formData["city"] = document.getElementById("city").value;
    formData["Pincode"] = document.getElementById("Pincode").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.StudentName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.age;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.city;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.Pincode;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("StudentName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("city").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Pincode").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.StudentName;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.city;
    selectedRow.cells[3].innerHTML = formData.Pincode;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("StudentName").value = '';
    document.getElementById("age").value = '';
    document.getElementById("city").value = '';
    document.getElementById("Pincode").value = '';
    selectedRow = null;
}