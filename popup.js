document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: transformText,
      });
    });
  });

function transformText() {
  const elements = document.querySelectorAll("span");
  elements.forEach((element) => {
    element.textContent = "TEST"; // 모든 텍스트를 TEST로 변경
  });
}
