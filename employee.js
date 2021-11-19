var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
    // Read operation using this function
    function readFormData() {
        var formData = {};
        formData["firstName"] = document.getElementById("firstName").value;
        formData["middleName"] = document.getElementById("middleName").value;
        formData["lastName"] = document.getElementById("lastName").value;
        return formData;
    }

    // Create operation
    function insertNewRecord(data) {
        var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.firstName;
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.middleName;
        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.lastName;
        var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<a href="#" onClick='onEdit(this)' class='btn-sm btn-success'>Edit</a>
                   <a href="#" onClick='onDelete(this)' class='btn-sm btn-danger'>Delete</a>`;
    }

    // To Reset the data of fill input
    function resetForm() {
        document.getElementById('firstName').value = '';
        document.getElementById('middleName').value = '';
        document.getElementById('lastName').value = '';
        selectedRow = null;
    }

    // For Edit operation
    function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById('firstName').value = selectedRow.cells[0].innerHTML;
        document.getElementById('middleName').value = selectedRow.cells[1].innerHTML;
        document.getElementById('lastName').value = selectedRow.cells[2].innerHTML;
    }

    function updateRecord(formData) {
        selectedRow.cells[0].innerHTML = formData.firstName;
        selectedRow.cells[1].innerHTML = formData.middleName;
        selectedRow.cells[2].innerHTML = formData.lastName;
    }

    function onDelete(td) {
        if (confirm('Are you sure you want to delete this record?')) {
            row = td.parentElement.parentElement;
            document.getElementById('employeeList').deleteRow(row.rowIndex);
            resetForm();

            function onFormSubmit() {
                if (validate()) {
                    var formData = readFormData();
                    if (selectedRow == null)
                        insertNewRecord(formData);
                    else
                        updateRecord(formData);
                    resetForm();
                }
            }

            function readFormData() {
                var formData = {};
                formData["firstName"] = document.getElementById("firstName").value;
                formData["middleName"] = document.getElementById("middleName").value;
                formData["lastName"] = document.getElementById("lastName").value;
                return formData;
            }

            function insertNewRecord(data) {
                var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
                var newRow = table.insertRow(table.length);
                cell1 = newRow.insertCell(0);
                cell1.innerHTML = data.firstName;
                cell2 = newRow.insertCell(1);
                cell2.innerHTML = data.middleName;
                cell3 = newRow.insertCell(2);
                cell3.innerHTML = data.lastName;
                cell4 = newRow.insertCell(3);
                cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                           <a onClick="onDelete(this)">Delete</a>`;
            }

            function resetForm() {
                document.getElementById("firstName").value = "";
                document.getElementById("middleName").value = "";
                document.getElementById("lastName").value = "";
                selectedRow = null;
            }

            function onEdit(td) {
                selectedRow = td.parentElement.parentElement;
                document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
                document.getElementById("middleName").value = selectedRow.cells[1].innerHTML;
                document.getElementById("lastName").value = selectedRow.cells[2].innerHTML;
            }

            function updateRecord(formData) {
                selectedRow.cells[0].innerHTML = formData.firstName;
                selectedRow.cells[1].innerHTML = formData.middleName;
                selectedRow.cells[2].innerHTML = formData.lastName;
            }

            function onDelete(td) {
                if (confirm('Are you sure to delete this record ?')) {
                    row = td.parentElement.parentElement;
                    document.getElementById("employeeList").deleteRow(row.rowIndex);
                    resetForm();
                }
            }

            function validate() {
                isValid = true;
                if (document.getElementById("firstName").value == "") {
                    isValid = false;
                    document.getElementById("firstNameValidationError").classList.remove("hide");
                } else {
                    isValid = true;
                    if (!document.getElementById("firstNameValidationError").classList.contains("hide"))
                        document.getElementById("firstNameValidationError").classList.add("hide");
                }
                return isValid;
            }
        }
    }
}