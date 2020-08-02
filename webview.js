module.exports = (Franz) => {
  const getTasks = function getTasks() {
      let count = 0;

      let item = $("a[href='#q/all/today']").find("span.count");

      if (item != null) {
        var text = item[0].innerText;

        if (text != null && text != "") {
          count = parseInt(text);
  
          // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
          if (isNaN(count)) {
            count = 0;
          }
        }
      }

      // set Franz badge
      Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getTasks);
}

