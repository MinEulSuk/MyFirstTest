const headerUserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('.user-name');

const localUserName = localStorage.getItem('userName');

const setUserNameInnerHtml = (name) => {
  headerUserNameElement.innerHTML = `${name} <span class = "red">님</span>`;
  userNameElement.innerHTML = `${name} <span>님</span>`;
};


if (localUserName) {
  setUserNameInnerHtml(localUserName);
}

userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요.');
  localStorage.setItem('userName', userName);

  headerUserNameElement.innerHTML = `${userName} <span>님</span>`
  userNameElement.innerHTML = `${userName} <span>님</span>`;
};

