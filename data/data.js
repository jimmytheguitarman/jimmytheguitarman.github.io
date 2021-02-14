export class Data {
  constructor(){
    this.banners = {gedachten: `url('./imgs/banners/Penpapier2.jpg')`,
                    knutselen: `url('./imgs/banners/zaagje2.jpg')`,
                    handwerk: `url('./imgs/banners/knoppekes.jpg')`,
                    schilderen: `url('./imgs/banners/moe.jpg')`,
                    tuin: `url('./imgs/banners/achtergrondblaadjes.jpg')`
                  };
    this.home = {
      welcome: `
      <section class="intro-box">
      <p class="intro-txt"> Welkom op deze website!
          Hier vind je een waaier van weetjes, tips en tutorials. De onderwerpen zijn zeer divers en dus is er wel voor iedereen een leuke topic.
          Natuurlijk zijn het dingen die mij bezig houden en waar ik zelf van geniet om te doen of om op te zoeken.
          Ook probeer ik te recycleren waar het kan, het is gewoon fijn om dingen te hergebruiken of er een totaal andere betekenis aan te geven. <br><br>Meestal ga ik uit van een 'probleemzone ' in mijn eigen leefomgeving en probeer ik daar zelf een oplossing voor te vinden. Dit leidt tot verrassende resultaten met een hoge voldoening als gevolg.
          De meeste dingen zijn niet zo moeilijk en voor iedereen haalbaar. <br><br>
          Meestal is het een kwestie van durf, alle begin is moeilijk! Maar de voldoening als je doorzet werkt bijna verslavend en het is fijn om je projectjes ook daadwerkelijk te kunnen gebruiken.
          <br><br>
          Geniet ervan!
          </p>
      </section>`
    }; 

    this.pages = {
        "carousel": { 
            "placeholder": `<div id="carousel">
                                <div class="prev-box arrow"><p class="previous">&#11164;</p></div>    
                                <div class="carousel-photoholder">
                                    
                                </div>
                                <div class="next-box arrow"><p class="next">&#11166;</p></div>
                            </div>
                            <h2 id="subject-title"></h2>
                            <div id="subject-box"></div>`
        },
        
        "gedachten": {       
            head : `<div id="top-deco" style="background-image:${this.banners.gedachten};
                                              background-position: 10% 30%;
                                              background-size:100% auto;">
                        <h2>Breinspinsels</h2>
                    </div>`, 
            topics : {
                "topic1": {
                    image : "./subjectpics/gedachten/pic3.jpg",
                    title : "TITEL1",
                    parts : {
                        "part1" : {
                            text: "dit is deel A",
                            photo : "./subjectpics/gedachten/pic3.jpg"
                            },
                        "part2" : {
                            text: "dit is deel B",
                            photo : "./subjectpics/gedachten/pic3.jpg"
                            }
                        }
                    },
                "topic2": {
                    image : "./subjectpics/gedachten/pic2.jpg",
                    title : "TITEL2",
                    parts : {
                        "part1" : {
                            text: "dit is deel A",
                            photo : "./subjectpics/gedachten/pic2.jpg"
                            },
                        "part2" : {
                            text: "dit is deel B",
                            photo : "./subjectpics/gedachten/pic3.jpg"
                            }
                        }
                    },
                    "topic3": {
                        image : "./subjectpics/gedachten/pic4.jpg",
                        title : "TITEL3",
                        parts : {
                            "part1" : {
                                text: "dit is deel A",
                                photo : "./subjectpics/gedachten/pic3.jpg"
                                },
                            "part2" : {
                                text: "dit is deel B",
                                photo : "./subjectpics/gedachten/pic3.jpg"
                                }
                            }
                        },
                    "topic4": {
                        image : "./subjectpics/gedachten/pic1.jpg",
                        title : "TITEL4",
                        parts : {
                            "part1" : {
                                text: "dit is deel A",
                                photo : "./subjectpics/gedachten/pic2.jpg"
                                },
                            "part2" : {
                                text: "dit is deel B",
                                photo : "./subjectpics/gedachten/pic3.jpg"
                                }
                            }
                        },
                }                
            },
        "knutselen": {
            head : `<div id="top-deco" style="background-image:${this.banners.knutselen};
                                              background-position: 20% 70%;
                                              background-size:100% auto;">
                        <h2>Knutselen</h2>
                    </div> `},
        "handwerk": {
            head : `<div id="top-deco" style="background-image:${this.banners.handwerk};
                                              background-position: 10% 30%;
                                              background-size:100% auto;">
                        <h2>Handwerk</h2>
                    </div> `},    
        "schilderen": {
            head : `<div id="top-deco" style="background-image:${this.banners.schilderen};
                                              background-position: 10% 30%;
                                              background-size:100% auto;">
                        <h2>Schilderen</h2>
                    </div> `},  
        "tuin": {
            head : `<div id="top-deco" style="background-image:${this.banners.tuin};
                                              background-position: center;
                                              background-size:100% auto;">
                        <h2>Tuin</h2>
                    </div> `}                          
    };
  }
}

