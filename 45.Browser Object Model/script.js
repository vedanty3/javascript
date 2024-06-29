console.log(window);
console.log(window.location);
// console.log(location);

function reloadPage() {
  if (window.localStorage.getItem("isReloaded")) {
    console.log("Page Reloaded");
    return;
  }
  console.log("Page Reloaded");
  window.localStorage.setItem("isReloaded", true);
  location.reload();
}

function setPageReload() {
  window.localStorage.clear("isReloaded");
}

// // reloadPage();
// // setPageReload();
// // location.href = "https://www.google.com/";
// console.log(history);
// // history.back();
// // history.forward();
// // history.go(1);
// // history.go(1);
// // history.go(3);
// history.go(-3);
console.log(innerHeight, innerWidth, outerHeight, outerWidth);

// returns window object of new tab
// open(url, name, isResizable)
// open("https://www.youtube.com/", "Google", "resizable");
// close("https://www.google.com/"); can close the tab which is opened by open()
resizeTo(600, 500);
moveTo(0, 0);
// scrollBy(0, 1000);
scroll({
  top: 2000,
  left: 0,
  behavior: "smooth",
});
// print();
console.log(document);
