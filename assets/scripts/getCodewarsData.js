async function getData() {
    try {
        fetch('https://www.codewars.com/api/v1/users/mikesb101').then(
            (response) => {
                if(response.ok) {
                    response.json().then((data) => {
                        const table = document.getElementById('codewars-target');
                        const langs = data['ranks']['languages'];
                        
                        let rowData = [];
                        for(let lang of Object.keys(langs)) {
                            rowData.push({
                                'Name': lang.substring(0,1).toUpperCase()+lang.substring(1),
                                'Rank': langs[lang]['rank']*-1,
                                'Score': langs[lang]['score']
                            });
                        }
                        rowData.sort((a,b) => b['Score']-a['Score']);

                        let row;
                        rowData.forEach(entry => {
                            row = table.insertRow();
                            row.insertCell().innerText = entry['Name'];
                            row.insertCell().innerText = entry['Rank'];
                            row.insertCell().innerText = entry['Score'];
                        });
                        
                        table.style.visibility = 'visible';
                        document.getElementById('codewars-loader').style.display = 'none';
                    });
                }
            }
        );
    } catch(ex) {
        console.log(ex);
    }
}

getData();