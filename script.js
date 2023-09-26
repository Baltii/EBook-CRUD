
let indexEdit = null;


function addBook() {
    var name = document.getElementById("Name").value;
    var sector = document.getElementById("Sector").value;
    var table = document.getElementById("book-list");
    var id = table.rows.length;
    if (name && sector) {
        
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = id+1;
        cell2.innerHTML = name;
        cell3.innerHTML = sector;
        cell4.innerHTML = '<button type="button" class="btn btn-info m-2" data-bs-toggle="modal" data-bs-target="#edit">Edit</button><button type="button" class="btn btn-danger" onclick="delete()">Delete</button>'

        
        // Effacer les champs du formulaire
        document.getElementById("Name").value = "";
        document.getElementById("Sector").value = "";
        }
         else alert('Tous les champs doivent être remplis');

        // Sauvegarder les données dans localStorage
        var bookData = {
            id: id+1,
            name: name,
            sector: sector
        };

        var books = JSON.parse(localStorage.getItem("books")) || [];
        books.push(bookData);
        localStorage.setItem("books", JSON.stringify(books));
        window.location.reload()
    }

    function editBook(button) {
        var row = button.parentNode.parentNode;
        console.log(row)
            var cells = row.getElementsByTagName("td");
            var id = cells[0].textContent;
            index = id
            var name = document.getElementById("EditName");
            var sector = document.getElementById("EditSector");
            name.value = cells[1].textContent;
            sector.value = cells[2].textContent;
            
            
        
    }

    function edit(){
        var name = document.getElementById("EditName").value;
        var sector = document.getElementById("EditSector").value;
         // Sauvegarder les données dans localStorage
         var bookData = {
            id: index,
            name: name,
            sector: sector
        };

        var books = JSON.parse(localStorage.getItem("books")) || [];
        books[index-1]= bookData
        localStorage.setItem("books", JSON.stringify(books));
        window.location.reload()
    }

    

        // Chargement automatique des données depuis localStorage
        window.addEventListener("load", function () {
            var books = JSON.parse(localStorage.getItem("books")) || [];
            var table = document.getElementById("book-list");
            
            books.forEach(function (bookData) {
                var row = table.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = bookData.id;
                cell2.innerHTML = bookData.name;
                cell3.innerHTML = bookData.sector;
                cell4.innerHTML = '<button type="button" class="btn btn-info m-2" data-bs-toggle="modal" data-bs-target="#edit" onclick="editBook(this)">Edit</button><button type="button" class="btn btn-danger" onclick="del(this)">Delete</button>'

            });
            
        });
        function del(sup){
            var row = sup.parentNode.parentNode;
        console.log(row)
            var cells = row.getElementsByTagName("td");
            var id = cells[0].textContent;
            var books = JSON.parse(localStorage.getItem("books")) || [];
            books.splice(id-1,1)
            localStorage.setItem("books", JSON.stringify(books));
            window.location.reload()
        }
