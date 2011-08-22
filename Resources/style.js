var styles = {
    lblTitleMain: {
    	textAlign:'center',
    	shadowColor:'#aaa',
    	shadowOffset:{x:5,y:5},
    	font:{fontSize: 30},
        height: 80,
        width:'auto',
        top: "vertical"
    },
    lblTitleSub: {
    	textAlign:'center',
    	shadowColor:'#aaa',
    	shadowOffset:{x:5,y:5},
    	font:{fontSize: 24},
        height: 180,
        width:'auto',
        top: "vertical"
    },
    lblTitle: {
    	textAlign:'center',
    	shadowColor:'#aaa',
    	shadowOffset:{x:5,y:5},
    	font:{fontSize: 30},
        height: 80,
        width:'auto',
        top: "vertical"
    },
    lblLoginTitle: {
    	textAlign:'left',
    	shadowColor:'#aaa',
    	shadowOffset:{x:0, y:0},
    	font:{fontSize: 20},
        height: 40,
        left: 40,
        top:100
    },
    txtLogin: {
        color:'#336699',
        top: 150,
        left: 40,
        width: 250,
        height: 40,
        hintText:'ログインユーザーを入力',
        value: 'admin',
        textAlign: 'left',
        verticalAlign: 'middle',
        keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        leftButtonMode:Titanium.UI.INPUT_BUTTONMODE_ALWAYS,
        rightButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS
    },
    imageView: {
	    image:'1.png',
	    width:240,
	    height:150,
        left: 40,
	    top:180
    },
    btnStart: {
        width: 210,
        height: 50,
        left: 40,
        top: 350,
        color:'#ff0000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
    btnLogin: {
        width: 110,
        height: 50,
        left: 40,
        top: 350,
        color:'#ff0000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
    btnReset: {
        width: 110,
        height: 50,
        left: 170,
        top: 350,
        color:'#ff0000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    }
};