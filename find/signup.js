document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const inputs = form.querySelectorAll("input:not([type='submit'])");
  const password = document.getElementById("password");
  const passwordConfirm = document.getElementById("passwordConfirm");
  const birth = document.getElementById("birth");
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
    // 공백?
    for (let input of inputs) {
      const value = input.value.trim();
      if (value === "") {
        alert(`${input.previousElementSibling.innerText}를 입력해주세요.`);
        input.focus();
        return false;
      }
    }

    // 2) 이메일
    const emailInput = form.querySelector("input[type='email']");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput && !emailPattern.test(emailInput.value.trim())) {
      alert("올바른 이메일을 입력해주세요.");
      emailInput.focus();
      return false;
    }

    // 3) 비번 길이
    if (password.value.length < 6) {
      alert("비밀번호는 최소 6자리 이상이어야 합니다.");
      password.focus();
      return false;
    }

    // 4) 비번 일치여부 검사
    if (password.value !== passwordConfirm.value) {
      alert("비밀번호가 일치하지 않습니다.");
      passwordConfirm.focus();
      return false;
    }

    // 5) 생년월일 검사 (오늘 날짜 이후 불가)
    if (birth) {
      const today = new Date();
      const birthDate = new Date(birth.value);

      today.setHours(0, 0, 0, 0);

      if (birthDate > today) {
        alert("생년월일은 오늘 날짜보다 이후일 수 없습니다.");
        birth.focus();
        return false;
      }
    }

    return true;
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateForm()) {
      inputs.forEach(input => console.log(`${input.id}: ${input.value}`));
      alert("회원가입 완료! (서버 연동 필요)");
      inputs.forEach(input => input.value = "");
    }
  });
});