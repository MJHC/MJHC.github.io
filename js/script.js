async function getRepos(url){
    const res = await fetch(url);
    const data = await res.json();
    generateProjectContainers(data);
}

function generateProjectContainers(data){

    Object.values(data).forEach(entry =>{
        if(entry.name != "audP2P" && entry.full_name != "MJHC/P2"){
            const container = document.createElement("div");
            const title = document.createElement("h1");
            const desc = document.createElement("p");
            const lang = document.createElement("p");
            const link = document.createElement("a");
            let languages = "";

            container.setAttribute("class", "repo-container");
            title.innerHTML = entry.name;
            desc.innerHTML = entry.description;

            fetch(entry.languages_url).then(res => res.json()).then(data=>{
                Object.keys(data).forEach(lang =>{
                    languages += `${lang} `;
                });
                lang.innerHTML = `<br> Languages: ${languages}`;
            })

            link.innerHTML = "Read More...";
            link.setAttribute("href", `${entry.html_url}`)

            container.appendChild(title);
            container.appendChild(desc);
            container.appendChild(lang);
            container.appendChild(link);

            document.getElementById("contents").append(container);  
        }
    });
    
}

getRepos("https://api.github.com/users/MJHC/repos");
getRepos("https://api.github.com/orgs/P1-A408b-AAU2020/repos");
getRepos("https://api.github.com/orgs/Akvariet/repos");



//https://api.github.com/orgs/P1-A408b-AAU2020/repos