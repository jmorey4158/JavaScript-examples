'use strict';

var context = SP.ClientContext.get_current();
var user = context.get_web().get_currentUser();

var getWorkItemsCountUrl = "/_api/web/lists(guid'<REMOVED TO COMPLY WITH NDA>')/itemCount";
var getUnassignedItemsCountUrl = "/_api/web/lists(guid'<REMOVED TO COMPLY WITH NDA>')/items?$filter=AssignedTo eq 'Unassigned'&$select=instanceId,Title,instanceId,DescriptionDescription,AssignedTo,Status";


// This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
$(document).ready(function () {
    ;
});

//// This function prepares, loads, and then executes a SharePoint query to get the current users information
//function getUserName() {
//    context.load(user);
//    context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
//}

//// This function is executed if the above call is successful
//// It replaces the contents of the 'message' element with the user name
//function onGetUserNameSuccess() {
//    $('#message').text('Hello ' + user.get_title());
//}

//// This function is executed if the above call fails
//function onGetUserNameFail(sender, args) {
//    alert('Failed to get user name. Error:' + args.get_message());
//}





//function setupPage() {

//    $('#debugPane').append('</br>' + 'Running setupPage...');

//    getWorkItemsCount();
//    getUnassignedCount();
//}



///*Get Count of all Active Work Items*/
//function getWorkItemsCount() {

//    $('#debugPane').append('</br>' + 'Running getWorkItemsCount...');
//    $('#debugPane').append('</br>' + "/_api/web/lists(guid'<REMOVED TO COMPLY WITH NDA>')/itemCount");


//    var url = getUrlPath() + "/_api/web/lists(guid'<REMOVED TO COMPLY WITH NDA>')/itemCount";
//    $('#debugPane').append('</br>' + url);

//    $.ajax({
//        url: url,
//        method: "GET",
//        headers: { "Accept": "application/json; odata=verbose" },
//        success: successtWorkItemsCounttHandler,
//        error: errorWorkItemsCounttHandler
//    });
//}
////Success List
//function successtWorkItemsCounttHandler(data) {

//    $('#debugPane').append('</br> Running successtWorkItemsCounttHandler...');

//    var listitems = data.d.results;

//    $('#debugPane').append('</br>' + listitems);

//    //var listsHtml = $.each(listitems, function (index, listitems) {
//    //    $('#lblResultLists').append(listitems.instanceId + "\t" + listitems.Title + "\t" + listitems.instanceId + "\t" + listitems.DescriptionDescription + "\t" + listitems.AssignedTo + "\t" + listitems.Status + "<br/>");
//    //});
//}
////Error Lists
//function errorWorkItemsCounttHandler(data, errorCode, errorMessage) {
//    $('#debugPane').append('</br> Running errorWorkItemsCounttHandler...');

//    $('#debugPane').append('</br>' + 'errorWorkItemsCounttHandler' + 'Could not complete REST call: ' + errorMessage);
//}





///*Get Count of all Active Work Items*/
//function getUnassignedCount() {
//    execRESTRequest()
//}

//function execRESTRequest() {

//    var getUnassignedItemsCountUrl = "/_api/web/lists(guid'<REMOVED TO COMPLY WITH NDA>')/items?$filter=AssignedTo eq 'Unassigned'&$select=instanceId,Title,instanceId,DescriptionDescription,AssignedTo,Status";


//    $('#debugPane').append('</br>' + 'Running execRESTRequest...');
//    $('#debugPane').append('</br>' + getUnassignedItemsCountUrl);

//    var url = getUrlPath() + getUnassignedItemsCountUrl;

//    $('#debugPane').append('</br>' + url);

//    $.ajax({
//        url: url,
//        method: "GET",
//        headers: { "Accept": "application/json; odata=verbose" },
//        success: successtUnassignedItemsCounttHandler,
//        error: errorUnassignedItemsCounttHandler
//    });
//}
////Success List
//function successtUnassignedItemsCounttHandler(data) {
//    $('#debugPane').append('</br> Running successtUnassignedItemsCounttHandler...');

//    var listitems = data.d.results;

//    $('#debugPane').append('</br>' + listitems.get_itemCount());

//    //var listsHtml = $.each(listitems, function (index, listitems) {
//    //    $('#lblResultLists').append(listitems.instanceId + "\t" + listitems.Title + "\t" + listitems.instanceId + "\t" + listitems.DescriptionDescription + "\t" + listitems.AssignedTo + "\t" + listitems.Status + "<br/>");
//    //});
//}
////Error Lists
//function errorUnassignedItemsCounttHandler(data, errorCode, errorMessage) {
//    $('#debugPane').append('</br> Running errorUnassignedItemsCounttHandler...');

//    $('#debugPane').append('</br>' + 'errorUnassignedItemsCounttHandler' + 'Could not complete REST call: ' + errorMessage);
//}




// ******************************* List.ItemCount *****************************

//*Button Click getItemsCount*/
function getItemsCount() {

    $('#debugPane').append('</br>Running getItemsCount...');

    execItemsCountRequest();
}

//REST Call to get Work Items .itemsCount
function execItemsCountRequest() {

    var getWorkItemsCountUrl = "/_api/web/lists(guid'<REMOVED TO COMPLY WITH NDA>')/itemCount";


    $('#debugPane').append('</br>Running execItemsCountRequest...');

    var url = getUrlPath() + getWorkItemsCountUrl.toString();

    $('#debugPane').append('</br>getWorkItemsCountUrl.toString():' +  getWorkItemsCountUrl.toString());

    $('#debugPane').append('</br>URL: ' + url);

    $.ajax({
        url: url,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: successCountHandler,
        error: errorCountHandler
    });
}

//Success Count
function successCountHandler(data) {
    $('#debugPane').append("</br><b>List Items:</b>" + data.d.ItemCount);
}
//Error Count
function errorCountHandler(data, errorCode, errorMessage) {
    $('#debugPane').append("</br>Could not complete REST call: " + errorMessage);
}




// ******************************* List.Items *****************************
/*Button Click Get List Rest*/
function getListData() {
    $('#debugPane').append('</br>Running getListData...');
    execListDataRequest();
}
//REST Call to obtain HostWeb Lists
function execListDataRequest() {

    var getUnassignedItemsCountUrl = "/_api/web/lists(guid'<REMOVED TO COMPLY WITH NDA>')/items?$filter=AssignedTo eq 'Unassigned'&$select=instanceId,Title,instanceId,DescriptionDescription,AssignedTo,Status";
    $('#debugPane').append('</br>getUnassignedItemsCountUrl:' + getUnassignedItemsCountUrl);


    var url = getUrlPath() + getUnassignedItemsCountUrl;

    $('#debugPane').append('</br>URL: ' + url);

    $.ajax({
        url: url,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: successListDataHandler,
        error: errorListDataHandler
    });
}
//Success List
function successListDataHandler(data) {

    $('#debugPane').append('</br>Running successListDataHandler...');

    var listItems = data.d.results;
    $('#debugPane').append("</BR><b>Unassigned Items: </b><br/>");

    var source = {
        datatype: 'json',
        localdata: listItems,
        datafields:
        [
            { name: 'InstanceId', type: 'string' },
            { name: 'instanceId', type: 'string' },
            { name: 'type', type: 'string' },
            { name: 'Title', type: 'string' },
            { name: 'DescriptionDescription', type: 'string' },
            { name: 'AssignedTo', type: 'string' },
            { name: 'Status', type: 'string' },
            { name: 'AssignedToBackup', type: 'string' },
            { name: 'InstanceId', type: 'string' },
            { name: 'InstanceId', type: 'string' },
        ]
    };

    var dataAdapter = new $.jqx.dataAdapter(source);

    var listsHtml = $.each(listItems, function (index, listItems) {
        $('#debugPane').append(listItems.Title + " ( ID: " + listItems.instanceId + "Description: " + listItems.DescriptionDescription + ")<br/>");
    });
}
//Error Lists
function errorListDataHandler(data, errorCode, errorMessage) {
    $('#debugPane').append("</br>Could not complete REST call: " + errorMessage);
}




function getUrlPath() {

    $('#debugPane').append('</br> Running getUrlPath...');

    var webRel = _spPageContextInfo.webAbsoluteUrl;
    $('#debugPane').append('</br>webRel: ' + webRel);

    var lastIndex = webRel.lastIndexOf('/');
    $('#debugPane').append('</br>lastIndex: ' + lastIndex);

    var urlpath = webRel.substring(0, lastIndex);
    $('#debugPane').append('</br>urlpath: ' + urlpath);

    return urlpath;
}




function renderGrid() {

    $('#debugPane').append("</br>Running renderGrid...");

    var url = "../SampleData/products.xml";


    $('#debugPane').append("</br>Data Source URL: " + url);


    // prepare the data
    var source =
    {
        datatype: "xml",
        datafields: [
            { name: 'ProductName', type: 'string' },
            { name: 'QuantityPerUnit', type: 'int' },
            { name: 'UnitPrice', type: 'float' },
            { name: 'UnitsInStock', type: 'float' },
            { name: 'Discontinued', type: 'bool' }
        ],
        root: "Products",
        record: "Product",
        id: 'ProductID',
        url: url
    };

    var cellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        if (value < 20) {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
        }
        else {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
        }
    }

    $('#debugPane').append("</br>cellrenderer: " + cellsrenderer);


    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function (data, status, xhr) { },
        loadComplete: function (data) { },
        loadError: function (xhr, status, error) { }
    });

    $('#debugPane').append("</br>Data Adapter: " + (typeof dataAdapter));

    // initialize jqxGrid
    $("#jqxgrid").jqxGrid(
    {
        width: 850,
        source: dataAdapter,
        pageable: true,
        autoheight: true,
        sortable: true,
        altrows: true,
        enabletooltips: true,
        editable: true,
        selectionmode: 'multiplecellsadvanced',
        columns: [
          { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
          { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 200 },
          { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 200 },
          { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: cellsrenderer, width: 100 },
          { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued' }
        ],
        columngroups: [
            { text: 'Product Details', align: 'center', name: 'ProductDetails' }
        ]
    });

    $('#debugPane').append("</br>Complete...");

};
