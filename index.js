const resBtn = document.querySelector('#res-btn');

const btnFunc = () => {
    axios.get('https://swapi.dev/api/planets/2').then((res) => {
        for(let i = 0; i < res.data.residents.length; i++) {
            axios.get(`${res.data.residents[i]}`).then((res) => {
                let newEl = document.createElement('h2');
                newEl.textContent = res.data.name;
                document.querySelector('body').appendChild(newEl)
            }).catch((e) => console.log(e))
        }
    }).catch((e) => console.log(e))
}

resBtn.addEventListener('click', btnFunc);