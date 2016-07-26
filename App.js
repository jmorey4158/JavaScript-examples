'use strict';

var context = SP.ClientContext.get_current();
var user = context.get_web().get_currentUser();

var ValueReviewStatusCount = 8;
var ValueReviewStatusTempCount = 8;


var ValueSDLReviewStatusCount = 4;
var ValueSDLReviewStatusTempCount = 4;


var ValueCount = 4;
var ValueTempCount = 4;


var ValueResultsByConclusionCount = 5;
var ValueResultsByConclusionTempCount = 5;

var previousValue = "";

// This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
$(document).ready(function () {
    getUserName();
    showView('#SupervisorReviewView');

});

// This function prepares, loads, and then executes a SharePoint query to get the current users information
function getUserName() {
    context.load(user);
    context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
}

// This function is executed if the above call is successful
// It replaces the contents of the 'message' element with the user name
function onGetUserNameSuccess() {
    $('#message').text('Hello ' + user.get_title());
}

// This function is executed if the above call fails
function onGetUserNameFail(sender, args) {
    alert('Failed to get user name. Error:' + args.get_message());
}


function showView(viewName) {
    $(".dataView").fadeOut();
    $(viewName).fadeIn()
}


function getCurrent(value) {
    previousValue = value;
}

function updateTile(tileLabel, newSelectedValue) {

    if (newSelectedValue == previousValue) {
        return;
    }


    switch (tileLabel) {

        case '#ValueReviewStatus':
            // i.e. The newSelectedValue has changed from 'None' to Something"
            if (newSelectedValue != 'None') {
                ValueReviewStatusTempCount = ValueReviewStatusTempCount - 1;
                if (ValueReviewStatusTempCount < 0) {
                    ValueReviewStatusTempCount = 0;
                }
                $(tileLabel).text(ValueReviewStatusTempCount);
            }
                // i.e. The newSelectedValue has changed from something to 'None'"
            else {
                if (previousValue != 'None') {
                    ValueReviewStatusTempCount = ValueReviewStatusTempCount + 1;
                    if (ValueReviewStatusTempCount > ValueReviewStatusCount) {
                        ValueReviewStatusTempCount = ValueReviewStatusCount;
                    }
                    $(tileLabel).text(ValueReviewStatusTempCount);
                }
            }
            break;


        case '#ValueSDLReviewStatus':
            // i.e. The newSelectedValue has changed from 'None' to Something"
            if (newSelectedValue != 'None') {
                ValueSDLReviewStatusTempCount = ValueSDLReviewStatusTempCount - 1;
                if (ValueSDLReviewStatusTempCount < 0) {
                    ValueSDLReviewStatusTempCount = 0;
                }
                $(tileLabel).text(ValueSDLReviewStatusTempCount);

            }
                // i.e. The newSelectedValue has changed from something to 'None'"
            else {
                if (previousValue != 'None') {
                    ValueSDLReviewStatusTempCount = ValueSDLReviewStatusTempCount + 1;
                    if (ValueSDLReviewStatusTempCount > ValueSDLReviewStatusCount) {
                        ValueSDLReviewStatusTempCount = ValueSDLReviewStatusCount;
                    }
                    $(tileLabel).text(ValueSDLReviewStatusTempCount);
                }
            }
            break;


        case '#Value':
            // i.e. The newSelectedValue has changed from 'None' to Something"
            if (newSelectedValue != 'None') {
                ValueTempCount = ValueTempCount - 1;
                if (ValueTempCount < 0) {
                    ValueTempCount = 0;
                }
                $(tileLabel).text(ValueTempCount);

            }
                // i.e. The newSelectedValue has changed from something to 'None'"
            else {
                if (previousValue != 'None') {
                    ValueTempCount = ValueTempCount + 1;
                    if (ValueTempCount > ValueCount) {
                        ValueTempCount = ValueCount;
                    }
                    $(tileLabel).text(ValueTempCount);
                }
            }
            break;



        case '#ValueResultsByConclusion':
            // i.e. The newSelectedValue has changed from 'None' to Something"
            if (newSelectedValue != 'None') {
                ValueResultsByConclusionTempCount = ValueResultsByConclusionTempCount - 1;
                if (ValueResultsByConclusionTempCount < 0) {
                    ValueResultsByConclusionTempCount = 0;
                }
                $(tileLabel).text(ValueResultsByConclusionTempCount);
            }
                // i.e. The newSelectedValue has changed from something to 'None'"
            else {
                if (previousValue != 'None') {
                    ValueResultsByConclusionTempCount = ValueResultsByConclusionTempCount + 1;
                    if (ValueResultsByConclusionTempCount > ValueResultsByConclusionCount) {
                        ValueResultsByConclusionTempCount = ValueResultsByConclusionTempCount;
                    }
                    $(tileLabel).text(ValueResultsByConclusionTempCount);
                }
            }
            break;

        default:
            break;

    }

}


