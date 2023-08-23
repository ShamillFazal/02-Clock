// JavaScript function to update clock hands' positions

      // Get a reference to the second hand element
      const secondHand = document.querySelector(".second-hand");
      // Get a reference to the minute hand element
      const minsHand = document.querySelector(".min-hand");
      // Get a reference to the hour hand element
      const hourHand = document.querySelector(".hour-hand");

      // Function to update the clock hands' positions
      function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        // Calculate the degree rotation for the second hand based on current seconds
        const secondsDegrees = (seconds / 60) * 360 + 90;
        // Apply the rotation to the second hand element
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();
        // Calculate the degree rotation for the minute hand based on current seconds
        const minsDegrees = (mins / 60) * 360 + 90;
        // Apply the rotation to the minute hand element
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;

        const hour = now.getHours();
        // Calculate the degree rotation for the hour hand based on current seconds
        const hourDegrees = (hour / 12) * 360 + 90;
        // Apply the rotation to the hour hand element
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
      }

      // Update the clock every second
      setInterval(setDate, 1000);
