var Notice = cc.sprite.extend({
    init:function(txt){
        showUI(txt);
    },

    showUI:function(txt){

    },
    remove:function(){
        this.removeFromParent();
    }

});