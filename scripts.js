$.ajax({
  url: 'https://randomuser.me/api/?results=10',
  dataType: 'json',
  success: (data) => {

    const employeeList = data.results;
    const employee = employeeList[0];

    employeeList.forEach(employee => {
      $('.employee-table').append(
        `<tr class="employee">
            <td><img src="${employee.picture.medium}" alt="${employee.name.first} ${employee.name.last} profile thumbnail"></td>
            <td>
              ${employee.name.first} ${employee.name.last}
            </td>
            <td>@${employee.login.username}</td>
            <td>${employee.location.city}, ${employee.location.state}</td>
          </tr>`
        );
    });

    $('.overlay').append(
        `<h2>${employee.name.first} ${employee.name.last}</h2>
        <div class="overlay-img-box">
            <img src="${employee.picture.large}" alt="">
        </div>
        <p>${employee.login.username}</p>
        <p>Email: ${employee.email}</p>
        <p>Cell: ${employee.cell}</p>
        <p>Address: ${employee.location.street}
        ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}</p>
        <p>Birthday: ${employee.dob}</p>
      `
    );
  }
});
