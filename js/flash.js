$(function() {
    $("#flash .img").showcase({
        css: { width: "532px", height: "242px", margin:"0 0 0 9px", padding:"8px 0 0 0", position: "relative"  },
        animation: {
            stopOnHover: true,
            type: "fade",     //  horizontal-slider  ;  vertical-slider  ;  fade
            interval: 5000,
            speed: 100
        },
        images: [
        { url:"images/theme/flash/img_01.png", btn:"images/theme/flash/btn_01.png", description:"", link:"register.php", select:"images/theme/flash/select.png" },
        { url:"images/theme/flash/img_02.png", btn:"images/theme/flash/btn_02.png", description:"", link:"event.php", select:"images/theme/flash/select.png"},
        { url:"images/theme/flash/img_03.png", btn:"images/theme/flash/btn_03.png", description:"", link:"join.php", select:"images/theme/flash/select.png" },
        { url:"images/theme/flash/img_04.png", btn:"images/theme/flash/btn_04.png", description:"", link:"ogrine.php", select:"images/theme/flash/select.png" }],
		
        navigator: {
            autoHide: true,
            showMiniature: true,
            position:"right",
            orientation:"vertical",
            css: {
                "margin-top":"50px",
                "margin-right":"5px",
                "padding-top":"9px",
                "padding-left":"10px",
                background:"url(images/theme/flash/back.png) no-repeat",
                width:"41px",
                height:"183px"
                //"z-index": 2001
                }
            },
        titleBar: {
            enabled: false
            }
    });
});