document.getElementById('but').onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(

            (arr) => {
                arr.forEach((e, index) => {
                    document.getElementById('List').innerHTML += `<span style="color:#800080;
                    font-size:26p;
                    font-family: 'Dancing Script', cursive;
font-family: 'Merriweather', serif;border-radius: 5px;">${index + 1}. ${e.name} ${e.username} ${e.email} ${e.address.city} ${e.website} ${e.username} ${e.company.name}<br></br></span>`
                })
            }
        )
}
