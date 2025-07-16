const createFooter = () => {
  const footerDiv = document.createElement("div");
  const footerContainer = document.createElement("div");
  const githubIcon = document.createElement("a");
  const footerText = document.createElement("p");

  footerDiv.className = "footer";
  footerContainer.className = "footer-container";
  githubIcon.className = "github-icon";
  footerText.className = "footer-text";

  footerContainer.appendChild(githubIcon);
  footerContainer.appendChild(footerText);

  footerDiv.appendChild(footerContainer);
}

export default createFooter;