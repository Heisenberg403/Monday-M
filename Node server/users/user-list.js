const setEditModal = (userID) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://localhost:3000/api/user/${userid}`, false);
    xhttp.send();

    const user = JSON.parse(xhttp.responseText);

    const {
        userid, 
        name, 
        birth_date
    } = user;

    document.getElementById('userid').value = userid;
    document.getElementById('name').value = name;
    document.getElementById('birth_date').value = birth_date;

    // setting up the action url for the book
    document.getElementById('editForm').action = `http://localhost:3000/api/user/${userid}`;
}

const deleteUser = (userid) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", `http://localhost:3000/api/user/${userid}`, false);
    xhttp.send();

    location.reload();
}

const loadUsers = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/api/user", false);
    xhttp.send();

    const users = JSON.parse(xhttp.responseText);

    for (let user of users) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${user.userid}</h6>

                        <div>Author: ${user.birth_date}</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal" 
                            data-target="#editUserModal" onClick="setEditModal(${user.userid})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('users').innerHTML = document.getElementById('users').innerHTML + x;
    }
}

loadUsers();
