$(document).ready(function() {
    $('head').append('<link rel="stylesheet" type="text/css" href="https://www.w3schools.com/w3css/4/w3.css">');

    var data = $.ajax(
        {
            url: "https://ifar-connect.hsl.harvard.edu/public/nidus/pdf/card_nums.json",
            type: 'GET', 
            dataType: "json",
            success: function(data) {
                    renderMetrics(data);
                    $("#metric-container").append('<div id="metric-loaded"></div>');

            },
            error: function(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR);
                    console.log({ status: textStatus, error: errorThrown });
                    $("#metric-error").css("visibility","visible");
                    $("#metric-container").append('<div id="metric-loaded"></div>');
            }
        });
});

function renderMetrics(data){
    var labels = $("#metric-labels");
    if (labels) {
        data.forEach(function(item) {
        labels.append('<div class="w3-col m2 w3-center">' + item.label + '</div>');
        });
    }
    var values = $("#metric-values");
    if (values) {
        data.forEach(function(item) {
        values.append('<div class="w3-col m2 w3-center"><span class="w3-badge">' + item.value + '</span></div>');
        });
    }
}