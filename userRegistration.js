const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const birthCity = document.getElementById('birthCity').value;
    const birthday = document.getElementById('birthday').value;
    const favoriteColor = document.getElementById('favoriteColor').value;

    if (!name || !age || !birthCity || !birthday || !favoriteColor) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    const userData = {
        name: name,
        age: age,
        birthCity: birthCity,
        birthday: birthday,
        favoriteColor: favoriteColor
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(userData)
    };

    fetch('https://jsonplaceholder.typicode.com/users', options)
        .then(response => response.json())
        .then(data => {
            const userId = data.id;
            console.log(userData);
            console.log(`User ID: ${userId}`);
        })
        .catch(error => console.error(error));
});
