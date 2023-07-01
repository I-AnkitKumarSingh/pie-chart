anychart.onDocumentReady(function() {
    // Poll options and initial vote count
    const pollOptions = ['Nike', 'Puma', 'Adidas', 'Others'];
    let voteCount = [0, 0, 0, 0];

    // Create the chart
    var chart = anychart.pie();

    // Set the chart title
    chart.title('Poll Results');

    // Function to update the chart data and draw the chart
    function updateChart() {
      // Calculate the total votes
      var totalVotes = voteCount.reduce(function(a, b) {
        return a + b;
      }, 0);

      // Calculate the vote percentage for each option
      var votePercentage = voteCount.map(function(count) {
        return ((count / totalVotes) * 100).toFixed(2);
      });

      // Create the chart data
      var data = pollOptions.map(function(option, index) {
        return { x: option, value: votePercentage[index] };
      });

      // Set the chart data
      chart.data(data);

      // Draw the chart
      chart.container('container');
      chart.draw();
    }

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent form submission

    // Get the selected color
    var selectedColor = document.querySelector('input[name="color"]:checked');

    if (selectedColor) {
        // Increment the vote count for the selected color
        var selectedValue = selectedColor.value;
        var selectedOptionIndex = pollOptions.indexOf(selectedValue);
        voteCount[selectedOptionIndex]++;

        // Update the chart with the new data
        updateChart();

        // Display a success message
        alert('Thank you for submitting your vote!');
    } else {
        // Display an error message if no color is selected
        alert('Please select a color!');
    }
    }


    // Add event listener for form submission
    document.getElementById('poll-form').addEventListener('submit', handleFormSubmit);

    // Initial chart rendering
    updateChart();
  });