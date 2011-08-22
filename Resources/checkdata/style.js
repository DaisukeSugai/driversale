var styles = {
    lblTitle: {
    	textAlign:'center',
    	shadowColor:'#aaa',
    	shadowOffset:{x:5,y:5},
    	font:{fontSize: 30},
        height: 80,
        width:'auto',
        top: "vertical"
    },
    lblExpectedTime: {
        textAlign: 'left',
    	font:{fontSize: 16},
    	shadowColor:'#aaa',
    	shadowOffset:{x:0, y:0},
        height: 30,
        left: 40,
        top:80
    },
   	lblReport: {
        textAlign: 'left',
    	shadowColor:'#aaa',
    	shadowOffset:{x:0, y:0},
    	font:{fontSize: 16},
        height: 40,
        left: 40,
        top:240
    },
   	rdoReport: {
   		value:true,
        left: 40,
        top:280
    },
   	txtReport: {
        color:'#336699',
        top: 320,
        left: 40,
        width: 250,
        height: 70,
		font: {
			fontSize: 20,
			fontWeight: 'bold',
			fontFamily: 'Arial'
		},
        textAlign:'left',
        hintText:'補足情報を入力してください',
        borderWidth:2,
        borderColor:'#bbb',
        borderRadius:5		
    },
    btnReport: {
        width: 110,
        height: 50,
        left: 40,
        top: 400,
        color:'#ff0000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
    btnBack: {
        width: 110,
        height: 50,
        left: 170,
        top: 400,
        color:'#ff0000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    }
};