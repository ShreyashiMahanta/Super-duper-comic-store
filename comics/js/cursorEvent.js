AFRAME.registerComponent("cursor-listener",{
    schema : {
        selectedItemId : {default : "", type : "string"}
    },
    init : function(){
        this.handleMouseEnter();
        this.handleMouseLeave();
    },

    update : function(){
        const fadeBackgroundEl = document.querySelector("#fadeBackground");

        banner = fadeBackgroundEl.children;

        if (banner.length > 0){
            var i;
            for(i = 0; i <= banner.length; i++){
                fadeBackgroundEl.removeChild(banner[i]);
            }
        }
        else{
            this.handleMouseClickEvent();
        }
    },
    handlePlaces : function(){
        const id = this.el.getAttribute("id");
        const comicId = ["archie","HGTTG","star-trek","tinkle"];

        if(comicId.includes(id)){
            const comicsContainer = document.querySelector("#comics-container")
            comicsContainer.setAttribute("cursor-listener",{selectedItemId : id})

            this.el.setAttribute("material",{
            color : "#A74830",
            //color : "red",
            //opacity : 1
        })}
    },
    handleMouseEnter : function(){
        this.el.addEventListener("mouseenter",() => {this.handlePlaces()})
    },
    handleMouseLeave : function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data;
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute('id');

                if(id == selectedItemId){
                    el.setAttribute('material',{
                        color : "#F3EAC0",
                       // opacity : 1
                    })
                }
            }
        })
    },

    handleMouseClickEvent : function(){
        this.el.addEventListener("click",()=>{
            const {selectedItemId} = this.data;

            const fadeBackground = document.querySelector("#fadeBackground");
            const titleEl = document.querySelector("#app-title");
            const cursorEl = document.querySelector("#camera_cursor");

            if(selectedItemId){
                fadeBackground.setAttribute("visible",true);
                titleEl.setAttribute("visible", false);
                cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
                cursorEl.setAttribute("geometry", {
                  radiusInner: 0.03,
                  radiusOuter: 0.04
                    });
                    fadeBackground.setAttribute("info",{itemId : selectedItemId});
            }
            else{
                fadeBackground.setAttribute("visible",false);
                titleEl.setAttribute("visible",true);
                cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
                cursorEl.setAttribute("geometry", {
                  radiusInner: 0.08,
                  radiusOuter: 0.12,
                });
            }
        })
    }
})