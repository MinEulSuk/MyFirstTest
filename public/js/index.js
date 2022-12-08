const headerUserNameElement = document.querySelector('.user');

const userNameElement = document.querySelector('#name');
const localUserName = localStorage.getItem('userName');

const userGradenumElement = document.querySelector('#gradenum');
const localUserGradenum = localStorage.getItem('userGradenum');

const userEmailElement = document.querySelector('#email');
const localUserEmail = localStorage.getItem('userEmail');


const setUserNameInnerHtml = (name) => {
  headerUserNameElement.innerHTML = `${name} <span>님</span>`;
  userNameElement.textContent = name;
};

if (localUserName) {
  setUserNameInnerHtml(localUserName);
}

const setUserName = () => {
  let userName = prompt('이름을 입력해 주세요.');
  if (!userName || userName === null) {
    setUserName();
  } else {
    localStorage.setItem('userName', userName);

    setUserNameInnerHtml(userName);
  }
};

userNameElement.onclick = () => setUserName();


const setUserGradenumInnerHtml = (gradenum) => {
  userGradenumElement.textContent = gradenum;
};

if (localUserGradenum) {
  setUserGradenumInnerHtml(localUserGradenum);
}

const setUserGradenum = () => {
  let userGradenum = prompt('학번을 입력해 주세요.');
  if (!userGradenum || userGradenum === null || isNaN(userGradenum) || userGradenum.length != 8) {
    setUserGradenum();
  } else {
    localStorage.setItem('userGradenum', userGradenum);

    setUserGradenumInnerHtml(userGradenum);
  }
};

userGradenumElement.onclick = () => setUserGradenum();


const setUserEmailInnerHtml = (email) => {
  userEmailElement.textContent = email;
};

if (localUserEmail) {
  setUserEmailInnerHtml(localUserEmail);
}

const setuserEmail = () => {
  let userEmail = prompt('이메일을 입력해 주세요.');
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!userEmail || userEmail === null || !re.test(userEmail)) {
    setuserEmail();
  } else {
    localStorage.setItem('userEmail', userEmail);

    setUserEmailInnerHtml(userEmail);
  }
};

userEmailElement.onclick = () => setuserEmail();
