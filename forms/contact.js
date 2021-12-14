document.querySelector("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Inputs
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let subject = document.querySelector("#subject");
  let message = document.querySelector("#message");

  Email.send({
    SecureToken: "7fa25d0f-2377-449b-9574-4f4cb65aacdf",
    To: "rishisoni6071@gmail.com",
    From: `${email.value}`,
    Subject: `Query from Portfolio: ${subject.value}`,
    Body: `Hi,<br/>I am ${name.value}, <br/><br/>${message.value}`,
  }).then((resMessage) => {
    alert(resMessage);
    if (resMessage.includes("OK")) {
      [name.value, email.value, subject.value, message.value] = [
        "",
        "",
        "",
        "",
      ];
    }
  });
});
