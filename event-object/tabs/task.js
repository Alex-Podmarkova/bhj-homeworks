let tabs = Array.from(document.querySelectorAll(".tab"));
let tabContents =Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach((tab, index) => {

  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
	  tab.classList.remove("tab_active");
    });

    tab.classList.add("tab_active");

    tabContents.forEach((content) => {
	  if(content.classList.contains("tab__content_active") === true) {
	  	content.classList.remove("tab__content_active");
	  }
      let activeContent = tabContents[index];
      activeContent.classList.add("tab__content_active");
    });
  })
})
