const registerForm = document.querySelector("form#register-form");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = registerForm["username"].value; // name based reference of elements within the form
    const password = registerForm["password"].value; // name based reference of elements within the form
    const repeatPassword = registerForm["repeat-password"].value; // name based reference of elements within the form

    console.log({
        username,
        password,
        repeatPassword,
    });

    if (password === repeatPassword) {
        console.log("ok!");
    } else {
        alert("password and repeat password donot match :((");
    }
});
