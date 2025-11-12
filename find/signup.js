document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const inputs = form.querySelectorAll("input:not([type='submit'])");
  const submitBtn = document.getElementById("submit");

  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.style.borderColor = "#01A4EC";
    });
    input.addEventListener("blur", () => {
      input.style.borderColor = "white";
    });
  });

  function validateForm() {
    let valid = true;

    inputs.forEach(input => {
      const value = input.value.trim();

      if (value === "") {
        valid = false;
        alert(`${input.previousElementSibling.innerText}를 입력해주세요.`);
        input.focus();
        return false;
      }

      if (input.type === "email") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          valid = false;
          alert("올바른 이메일을 입력해주세요.");
          input.focus();
          return false;
        }
      }

      if (input.type === "password" && value.length < 6) {
        valid = false;
        alert("비밀번호는 최소 6자리 이상이어야 합니다.");
        input.focus();
        return false;
      }
    });

    return valid;
  }
  
  // 모든 입력값 출력 (서버 연동 시 fetch, post  == 지금은 그냥 정적으로만)
  
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateForm()) {
      inputs.forEach(input => console.log(`${input.id}: ${input.value}`));
      alert("회원가입 완료! (서버 연동 필요)");
      
      inputs.forEach(input => input.value = "");
    }
  });
});
