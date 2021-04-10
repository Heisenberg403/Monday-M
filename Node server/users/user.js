const loadUsers = (userid) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://localhost:3000/api/user/${userid}`, false);
    xhttp.send();

    const user = JSON.parse(xhttp.responseText);

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

        document.getElementById('user').innerHTML = document.getElementById('user').innerHTML + x;
}

loadUsers();
