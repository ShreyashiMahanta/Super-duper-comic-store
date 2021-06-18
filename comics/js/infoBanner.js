AFRAME.registerComponent("info",{
    schema: {itemId : {default :"", type : 'string' }},
    update : function(){
        this.createBanner();

    },

    createBanner: function(){
        posterInfo = {
            archie : {
                banner_url : "./assets/banner/archieBanner.jpg",
                title : "Archie's comics",
                released : "1941",
                description : "Archie Comics is an ongoing comic book series featuring the Archie Comics character Archie Andrews. The character first appeared in Pep Comics #22 (cover dated December 1941). Archie proved to be popular enough to warrant his own self-titled ongoing comic book series which began publication in the winter of 1942 and ran until June 2015. "
            },
            HGTTG : {
                banner_url : "./assets/banner/HGTTGBanner.jpg",
                title : "Hitchiker's Guide to the galaxy",
                released : "1971",
                description : "The Hitchhiker's Guide to the Galaxy comic books were adaptions of Douglas Adams' original stories, published by DC Comics in 1993.he first comic stories (The Hitchhiker's Guide to the Galaxy Volume 1) consisted of a Prestige format, limited series, three-part comic book adaptation of the novelisation of The Hitchhiker's Guide to the Galaxy. "
            },
            "star-trek" : {
                banner_url : "./assets/banner/starTrekBanner.jpg",
                title : "Star Trek",
                released : "1967",
                description : 
                " Star Trek was created by American writer and producer Gene Roddenberry and chronicles the exploits of the crew of the starship USS Enterprise, whose five-year mission is to explore space and, as stated in the title sequence, to seek out new life and new civilizations, to boldly go where no one has gone before.”Due to Star trek's popularity, Gold Key Comics published the first Star Trek comics between 1967 and 1978.  "
                
            },
            tinkle : {
                banner_url : "./assets/banner/tinkle Banner.jpg",
                title : "Tinkle",
                released : "1980",
                description : "Tinkle is an Indian fortnightly magazine for children, published mainly in India.[1] Originally owned by the India Book House, the Tinkle brand was acquired by ACK Media in 2007.[2] The magazine contains many comics, stories, puzzles, quizzes, contests and other features targeted at school children, although its readership includes many adults as well. "
            },
        };

        const {itemId} = this.data;
        const fadeBackgroundEl = document.querySelector("#fadeBackground");

        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("id",`${itemId}-banner`);

        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 0.9,
            height: 1,
          });
      
          entityEl.setAttribute("material", { color: "#000" });
          entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

          const item = posterInfo[itemId];

          const imageEl = this.createImage(item);
          const titleEl = this.createTitle(item);
          const descriptionEl = this.createDescription(item);

          entityEl.appendChild(imageEl);
          entityEl.appendChild(titleEl);
          entityEl.appendChild(descriptionEl);

          fadeBackgroundEl.appendChild(entityEl);

    },
    createImage : function(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("position",{ x : 0, y : 0.4,z : 0.05});

        entityEl.setAttribute("geometry",{ 
            primitive : "plane",
            width : 0.85,
            height : 0.6
        });

        entityEl.setAttribute("material",{src : item.banner_url})
        return entityEl;

    },
    createTitle : function(item){
        const titleEl = document.createElement("a-entity");
        titleEl.setAttribute("visible",true);
        titleEl.setAttribute("text", {
            shader: "msdf",
            anchor: "left",
            font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
            width: 1.2,
            height: 2,
            color: "#fff",
            value: `${item.title} (${item.released})`,
        });
        titleEl.setAttribute("position",{x : -0.4, y : 0.02, z:0.05});
        return titleEl;

    },

    createDescription : function(item){
        const descriptionEl = document.createElement("a-entity");
        descriptionEl.setAttribute("visible",true);
        descriptionEl.setAttribute("text", {
            shader: "msdf",
            anchor: "left",
            font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
            width: 0.75,
            height: 2,
            color: "#fff",
            wrapCount : "40",
            value: item.description
        });
        descriptionEl.setAttribute("position",{x : -0.4, y : -0.24, z:0.05});
        return descriptionEl;

    }


})