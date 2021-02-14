export class Navbar {
    constructor(parentelement, title, data){
        this.data = data;
        this.parentelement = parentelement;
        this.title = title;
        this.HTML = ``;        
        this.currentpage = "home";
        this.currentIndex = 0;
        this.maxIndex = 0; 
        this.constructNavbar();
        this.addButtonFunctions();
        this.addHomeButtonFunction();
        console.log(data);
    }

    constructNavbar = ()=>{
        this.HTML = `<header id="navbar">
                <div id="logo-title-box">
                    <img id="logo" src="../imgs/moelogo.jpg" alt="" draggable="false">
                    <h2 id="title">${this.title}</h2>
                </div>
                <nav id="buttons">
                    <img id="gedachten" class="button" src="../imgs/moe.png" alt="" draggable="false">
                    <img id="knutselen" class="button" src="../imgs/hamer.png" alt="" draggable="false">
                    <img id="handwerk" class="button" src="../imgs/naald.png" alt="" draggable="false">
                    <img id="schilderen" class="button" src="../imgs/penseel.png" alt="" draggable="false">
                    <img id="tuin" class="button" src="../imgs/blad.png" alt="" draggable="false">
                </nav>
                </header>`;
        this.parentelement.insertAdjacentHTML("afterBegin", this.HTML);
    }

    addButtonFunctions = ()=>{
        const mainSection = document.querySelector("#main-content");
        const buttons = document.querySelectorAll(".button");
        const buttonIds = [];
        buttons.forEach(button=>buttonIds.push(button.getAttribute("id")));
        console.log(buttonIds)
        buttons.forEach(button=>{
            button.addEventListener("click", event=>{
                this.currentIndex = 0;
                const thisButton = event.currentTarget;
            //Knoppen laten ronddraaien en van pagina data wisselen
                buttons.forEach(button=>button.classList.remove("rotate"));
                thisButton.classList.add("rotate");
                this.currentpage = thisButton.getAttribute("id");
                console.log(this.currentpage);
            //Carousel prototype laden    
                mainSection.innerHTML = this.data.pages[`${this.currentpage.toString()}`].head; 
                mainSection.insertAdjacentHTML("beforeend", this.data.pages.carousel.placeholder);
                const carousel = document.querySelector(".carousel-photoholder");
                
            //Data filteren en in het prototype laden
            try {
                console.log(this.data.pages[this.currentpage].topics);
                Object.keys(this.data.pages[this.currentpage].topics).forEach(topic=>{
                    console.log(this.data.pages[this.currentpage].topics[topic].image);
                    carousel.insertAdjacentHTML("beforeend", `<img class="pic" src=${this.data.pages[this.currentpage].topics[topic].image} alt="">`);
                })
                this.nextPrevious();
            }catch{
                console.log(Error);
            }                                
            })
        })
    }  
    
    addHomeButtonFunction = ()=>{
        const mainSection = document.querySelector("#main-content");
        const buttons = document.querySelectorAll(".button");
        const home = document.querySelector("#logo");        
        home.addEventListener("click", event=>{
            buttons.forEach(button=>button.classList.remove("rotate"));
            this.currentpage = "home";
            console.log(this.currentpage);
            if (this.currentpage === "home"){
                mainSection.innerHTML = this.data.home.welcome;
                console.log("dit is thuis");
            }
        })
    }
    
    nextPrevious = ()=>{
        const imagesLength = document.querySelectorAll(".pic");
        const arrows = document.querySelectorAll(".arrow");
            arrows.forEach(arrow=>{
                arrow.addEventListener("click", (event)=>{
                    const imagesLength = document.querySelectorAll(".pic");
                    this.maxIndex = imagesLength.length;
                    console.log("Max index = ",this.maxIndex);
                    if (event.currentTarget.classList.contains("prev-box")){
                        imagesLength[this.currentIndex].classList.remove("active");
                        if(this.currentIndex>0){
                            this.currentIndex--;
                        }else{
                            this.currentIndex = this.maxIndex - 1;
                        }
                        imagesLength[this.currentIndex].classList.add("active");
                        }else if (event.currentTarget.classList.contains("next-box")){
                        imagesLength[this.currentIndex].classList.remove("active");
                        if(this.currentIndex<this.maxIndex-1){
                            this.currentIndex++;
                        }else{
                            this.currentIndex = 0;
                        }
                        imagesLength[this.currentIndex].classList.add("active");
                        }
                    this.getBlogs();
                    console.log("Current index = ", this.currentIndex);
                })                
            })
            imagesLength[0].classList.add("active");
            this.getBlogs();
    }


    getBlogs = () =>{
        try {
        const subjectNames = Object.keys(this.data.pages[this.currentpage].topics);
        const itemTitle = document.querySelector("#subject-title");
        console.log(subjectNames);
        itemTitle.innerHTML = this.data.pages[this.currentpage].topics[subjectNames[this.currentIndex]].title;
        }catch{
            console.log(Error);
        }
    }
    
}