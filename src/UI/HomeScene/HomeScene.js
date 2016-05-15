

var HomeScene = cc.Scene.extend({
    _hubLayer:nll,
    
    onEnter:function () {
        this._super();

        this.addChild(_hublayer);
        this.addChild(_optlayer);
    },
    
    init:function() {
      _hubLayer = new HomeHubLayer(); 
      _optLayer = new HomeOptLayer();
    }
});

