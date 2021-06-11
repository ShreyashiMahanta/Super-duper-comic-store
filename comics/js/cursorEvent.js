AFRAME.registerComponent("cursor-listener",{
    schema : {
        selectedItemId : {default : "", type : "string"}
    },
    init : function(){
        this.handleMouseEnter();
        this.handleMouseLeave();
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
    }
})