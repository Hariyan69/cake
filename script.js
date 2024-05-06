function generateWish() {
    var name = document.getElementById("nameInput").value;
    var wish = document.getElementById("birthdayWish");
    if (name.trim() === "") {
      wish.innerHTML = "Please enter your name!";
    } else {
      wish.innerHTML =`My dearest ${name}, on this special day, Wishing you the happiest of birthdays today! 🎉🎂 May this special day be filled with love, joy, and all the things that bring a smile to your face. You deserve all the happiness in the world, and I hope this year brings you closer to your dreams and aspirations. 💖🎉`;
    }
  }
  