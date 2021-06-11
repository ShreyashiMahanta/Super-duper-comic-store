AFRAME.registerComponent("comic",{
    init : function(){
        this.postersContainer = this.el;
        this.createCards();
    },
    createCards : function(){
        const thumbnailPics = [
           { 
            id : "archie",
            url : './assets/posters/Archie.jpg'
            },

            { 
                id : "HGTTG",
                url : './assets/posters/HGTTG.jpg'
            },
            { 
                id : "star-trek",
               
                url : './assets/posters/star trek.jpg'
            },
            { 
                id : "tinkle",
             
                url : './assets/posters/tinkle.jpg'
                }
        ];

       let PreviousXPosition = -60;

        for(var item of thumbnailPics){
            const posX =  PreviousXPosition + 25;
            const posY = -5;
            const posZ = -40;

            const position = {x : posX, y : posY, z : posZ};
            PreviousXPosition = posX;
   
        const borderEl = this.createBorder(position,item.id);

        const thumbnail = this.createThumbnail(item);
        borderEl.appendChild(thumbnail);

        this.postersContainer.appendChild(borderEl);

    }
    },

    createThumbnail : function(item){
        const entityEl = document.createElement('a-entity');
        entityEl.setAttribute('visible',true);
        
        entityEl.setAttribute('geometry',{
            primitive : 'plane',
            width : 20,
            height : 28
        });

        entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 });
        entityEl.setAttribute("material", { src: item.url });
        return entityEl;
    },
    createBorder : function(position,id){
        const entityEl = document.createElement('a-entity');
        entityEl.setAttribute('visible',true);
        entityEl.setAttribute('id',id);
        entityEl.setAttribute('position',position);
        entityEl.setAttribute('geometry',{
            primitive: "plane",
            width: 22,
            height: 30
        });
        entityEl.setAttribute('material',{
            color : '#F3EAC0',

        })
        entityEl.setAttribute("cursor-listener",{})
        return entityEl;
        
    }

})