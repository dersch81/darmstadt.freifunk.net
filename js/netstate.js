$(document).ready(function() {
  var url = "https://gw04.darmstadt.freifunk.net/metrics.json";

  $.getJSON(url, function(data) {
    // hide loading state
    $('#net_state_loading').hide();

    $('#net_state_nodes').text(data['nodes']);
    $('#net_state_clients').text(data['clients']);

    rx = data['traffic']['rx']
    tx = data['traffic']['tx']

    rx = Math.round(rx / 1024 / 1024)
    tx = Math.round(tx / 1024 / 1024)
    total = (rx + tx)

    $('#net_state_traffic').text(total + ' GB / Tag').attr(
      'title', 'RX: ' + rx + ' GB / TX: ' + tx + ' GB');
  });
});
