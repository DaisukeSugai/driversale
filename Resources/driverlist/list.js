Titanium.include('../common/constant.js');
Titanium.include('style.js');

var win = Titanium.UI.currentWindow;

var lblTitle = Titanium.UI.createLabel(styles["lblTitle"]);
lblTitle.text = Titanium.Locale.getString("list_title");
win.add(lblTitle);

var btnLatest = Titanium.UI.createButton(styles["btnLatest"]);
btnLatest.title = Titanium.Locale.getString("list_btnLatest");
win.add(btnLatest);
btnLatest.addEventListener(EVT_CLICK, function() {
	var win = Titanium.UI.createWindow({url:LIST_FILE});
	Titanium.UI.currentTab.open(win, {animated:true});		
});

var btnBack = Titanium.UI.createButton(styles["btnBack"]);
btnBack.title = Titanium.Locale.getString("list_btnBack");
win.add(btnBack);
btnBack.addEventListener(EVT_CLICK, function() {
	Titanium.App.Properties.setList(KEY_CODE_SELECTUSER, null);
	Titanium.App.Properties.setString(KEY_CODE_USERXID, null);
	Titanium.App.Properties.setString(KEY_CODE_USERNAME, null);
	var win = Titanium.UI.createWindow({url:LOGIN_FILE2});
	Titanium.UI.currentTab.open(win, {animated:true});		
});

var rowData = [];
var selectData = [];
var xids = [];
var deliverdates = [];
var delivertimes = [];
var addresss = [];
var urls = [];
var latitudes = [];
var longitudes = [];

var client = Titanium.Network.createHTTPClient({timeout : 100000});
var paramater = '&intaliouser=' + Titanium.App.Properties.getString(KEY_CODE_USERNAME) + '&parameter=deliverdriver:' + Titanium.App.Properties.getString(KEY_CODE_USERNAME) + ',';
var paramater1 = 'deliverdate:simpledate,';
var url = LIST_URL + paramater + paramater1;
Titanium.API.info(url);

client.open(GET_REC, url);
client.onload = function() {
	try {
		var resData = eval("("+this.responseText+")");
		Titanium.API.info(resData);
		if (resData[0].error == 'Yes') {
			var record = resData[0].count;
			if (record == 0) {
				var dialog = Titanium.UI.createAlertDialog({});
				dialog.title =  Titanium.Locale.getString("list_yes_title");
				dialog.message =  Titanium.Locale.getString("list_yes_message");
				dialog.show();
				return;
			} else {
				var dialog = Titanium.UI.createAlertDialog({});
				dialog.title =  Titanium.Locale.getString("event_yes_title");
				dialog.message = resData[0].contents;
				dialog.show();
				return;
			}
		} else {
			var record = resData[0].count;
			if (record == 0) {
				return;	
			}
			for (var i = 0; i < resData[0].records.length; i++) {
				if (resData[0].records[i].xid == null) {
				} else {
					xids[i] = resData[0].records[i].xid;
					deliverdates[i] = resData[0].records[i].deliverdate;
					delivertimes[i] = resData[0].records[i].delivertime;
					addresss[i] = resData[0].records[i].address;
					urls[i] = resData[0].records[i].url;
					latitudes[i] = resData[0].records[i].latitude;
					longitudes[i] = resData[0].records[i].longitude;
					
					if (i == 0) {
						selectData[0] = resData[0].records[i].xid;
						selectData[1] = resData[0].records[i].deliverdate;
						selectData[2] = resData[0].records[i].delivertime;
						selectData[3] = resData[0].records[i].address;
						selectData[4] = resData[0].records[i].url;
						selectData[5] = resData[0].records[i].latitude;
						selectData[6] = resData[0].records[i].longitude;
						Titanium.App.Properties.setList(KEY_CODE_SELECTUSER, null);
						Titanium.App.Properties.setList(KEY_CODE_SELECTUSER, selectData);
					}
					row = Titanium.UI.createTableViewRow(styles["rows"]);
					rowTitle = Titanium.UI.createLabel(styles["rowTitle"]);
					rowTitle.text = Titanium.Locale.getString("list_rowtitle") + resData[0].records[i].delivertime;
					row.add(rowTitle);
					contentsTitle = Titanium.UI.createLabel(styles["contentsTitle"]);
					contentsTitle.text = Titanium.Locale.getString("list_rowcontentstitle") + resData[0].records[i].address;
					row.add(contentsTitle);
					rowData.push(row);
					row = [];
				}
			}
		}
		
		tableview = Titanium.UI.createTableView(styles["tableRows"]);
		tableview.data = rowData;
		tableview.addEventListener(EVT_CHANGE, function(e){
			var index = e.index;
			Titanium.API.info(index);
			callNext(index);
		});
		
		tableview.addEventListener(EVT_SINGLETAP, function(e){
			var index = e.index;
			Titanium.API.info(index);
			callNext(index);
		});
		
		function callNext(index) {
			selectData = [];
			selectData.push(xids[index]);
			Titanium.API.info(delivertimes[index]);
			selectData.push(deliverdates[index]);
			selectData.push(delivertimes[index]);
			selectData.push(addresss[index]);
			selectData.push(urls[index]);
			selectData.push(latitudes[index]);
			selectData.push(longitudes[index]);
			Titanium.App.Properties.setList(KEY_CODE_SELECTUSER, selectData);
			var win1 = Titanium.UI.createWindow({url:REGISTR_FILE});
			Titanium.UI.currentTab.open(win1, {animated:true});
		}
		
		win.add(tableview);
		win.open();
	} catch (e) {
		Titanium.API.error(e);
		var dialog = Titanium.UI.createAlertDialog({});
		dialog.title =  Titanium.Locale.getString("event_catch_title");
		dialog.message = Titanium.Locale.getString("event_catch_message");
		dialog.show();
		return;
	}
};
client.onerror = function() {
	if (client.status == 401) {
		var dialog = Titanium.UI.createAlertDialog({});
		dialog.title =  Titanium.Locale.getString("event_connect_title");
		dialog.message = Titanium.Locale.getString("event_connect_message");
		dialog.show();
		return;
	}
	var dialog = Titanium.UI.createAlertDialog({});
	dialog.title =  Titanium.Locale.getString("event_network_title");
	dialog.message = Titanium.Locale.getString("event_network_message");
	dialog.show();
	return;
};
client.send();