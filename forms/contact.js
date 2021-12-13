document.querySelector("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Inputs
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;

  Email.send({
    SecureToken: "7fa25d0f-2377-449b-9574-4f4cb65aacdf",
    To: "rishisoni6071@gmail.com",
    From: `${email}`,
    Subject: `Customer Query: ${subject}`,
    Body: `Hi,<br/>I am ${name}, <br/><br/>${message}`,
  }).then((message) => alert(message));
});
