module.exports = {
    generatePassword() {
      let password = "";
      let i = 0;
      while (i < 5) {
        const randomNumber = Math.floor(Math.random() * 10).toString();
        password += randomNumber;
        // eslint-disable-next-line no-plusplus
        i++;
      }
  
      return password;
    },
  
    getDate() {
      const date = new Date();
      let Month = date.getMonth();
      Month += 1;
      const Day = date.getDate();
      const Year = date.getFullYear();
      const input_date = `${Year}-${Month}-${Day}`;
      return input_date;
    },
  };
  