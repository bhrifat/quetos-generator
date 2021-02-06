function motivationalQuotes() {
    fetch('https://www.boredapi.com/api/activity')
        .then(res => res.json())
        .then(data => {
            document.getElementById('button').addEventListener('click', function() {
                const quotes = document.getElementById('activity');
                quotes.innerText = data.activity;
                motivationalQuotes();
            })
        })
}
motivationalQuotes();