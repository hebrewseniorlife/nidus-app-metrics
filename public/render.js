$(document).ready(function() {  
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
        labels.append('<div class="col text-center"><span style="font-size:large">' + item.label + '</span></div>');
        });
    }
    var values = $("#metric-values");
    if (values) {
        data.forEach(function(item) {
        values.append('<div class="col text-center"><span class="badge badge-pill badge-dark" style="font-size:medium">' + item.value + '</span></div>');
        });
    }
}