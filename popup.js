function showPopup() {
    document.getElementById('popup').style.display = 'block';
  }

  setTimeout(showPopup, 2000);
  
// function closeSelf(){
//     self.close();
//     return true;
// }
// function popupUploadForm(){
//     var newWindow = window.open('/cert.html', 'name', 'height=500,width=600');
// }
const data = JSON.stringify({
    name: document.querySelector(".fname").value,
    email: document.querySelector(".email").value,
  });
  
  const downloadData = (filename, content) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "application/json" });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    element.click();
  };
  
   downloadData("data.json", data);
  console.log(data);
  
localStorage.setItem("data.json", data);
console.log("Data saved to file.");
  
    