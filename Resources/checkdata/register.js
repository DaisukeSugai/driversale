Titanium.include('../common/constant.js');
Titanium.include('style.js');
Titanium.include('event.js');
 
var win = Titanium.UI.currentWindow;

var selectData = [];
selectData = Titanium.App.Properties.getList(KEY_CODE_SELECTUSER);

var lblTitle = Titanium.UI.createLabel(styles["lblTitle"]);
lblTitle.text = Titanium.Locale.getString("register_title");
win.add(lblTitle);

var lblExpectedTime = Titanium.UI.createLabel(styles["lblExpectedTime"]);
lblExpectedTime.text =  Titanium.Locale.getString("register_expectedtime") + selectData[2];
win.add(lblExpectedTime);

var locationPin = Titanium.Map.createAnnotation({
	latitude:selectData[5],
	longitude:selectData[6],
	title:selectData[3],
	pincolor:Titanium.Map.ANNOTATION_GREEN,
	animate:true
});

var locationView = Titanium.Map.createView({
    	region:{
    		latitude:selectData[5], 
    		longitude:selectData[6], 
    		latitudeDelta:0.01, 
    		longitudeDelta:0.01
		},
        regionFit:true,
		width: 250,
        height: 130,
        left: 40,
        top:110
});
locationView.addAnnotation(locationPin);
win.add(locationView);

var lblReport = Titanium.UI.createLabel(styles["lblReport"]);
lblReport.text = Titanium.Locale.getString("register_lblReport");
win.add(lblReport);

var rdoReport = Titanium.UI.createSwitch(styles["rdoReport"]);
win.add(rdoReport);

var txtReport = Titanium.UI.createTextArea(styles["txtReport"]);
win.add(txtReport);
txtReport.addEventListener(EVT_BLUR,function(e){
	Titanium.App.Properties.setList(KEY_CODE_MEMO, e.value);
});

var btnReport = Titanium.UI.createButton(styles["btnReport"]);
btnReport.title = Titanium.Locale.getString("register_btnReport");
btnReport.addEventListener(EVT_CLICK,insertTrans);
win.add(btnReport);

var btnBack = Titanium.UI.createButton(styles["btnBack"]);
btnBack.title = Titanium.Locale.getString("register_btnBack");
btnBack.addEventListener(EVT_CLICK,backList);
win.add(btnBack);

win.open();