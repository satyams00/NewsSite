let apiKey = '4bd30af95fcb415a96838f800cb55dd9';

const newsText = document.querySelector('.newsText');

let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, true);
xhr.onload = ()=>{
    if(xhr.status === 200){
        let json = JSON.parse(xhr.responseText);
        let articles = json.articles;
        // console.log(json.articles);
        let newsHtml ="";
        articles.forEach(element => {    
            // console.log(element);
            let news = `
            <div>
                <div>
                    <h5 class="card-tle">${element['title']}</h5>
                    <p class="card-txt">${element['description']} <a href="${element['url']}" target ="_blank">Read more here</a></p>
                </div>
            </div>
            <hr>`;
            newsHtml += news;
        });
        newsText.innerHTML = newsHtml;
    
    }
    else{
        console.log("bye");
    }
}
xhr.send();