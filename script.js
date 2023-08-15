document.addEventListener("DOMContentLoaded", function() {
  const downloadButton = document.getElementById ("downloadButton");

  downloadButton.addEventListener("click", function() {
      const cvPath = "1131w-6mopgUI8kqs.webp";

      const link = document.createElement("a");
      link.href = cvPath;

      link.download = "ayu_web2.webp";

      document.body.appendChild(link)
      link.click();
      document.body.removeChild(link);   
  });
});