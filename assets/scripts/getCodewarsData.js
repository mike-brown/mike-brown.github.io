async function getData() {
    try {
        fetch('https://www.codewars.com/api/v1/users/mikesb101').then(
            (response) => {
                if(response.ok) {
                    response.json().then((data) => {
                        document.getElementById('codewars-target').innerText = data['name'];
                    });
                }
            }
        );
    } catch(ex) {
        console.log(ex);
    }
}

getData();