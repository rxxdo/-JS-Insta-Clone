const commentBtn = document.querySelector('.article-bottom-bottom-comment-btn');
const commentBox = document.querySelector('.article-bottom-bottom-comment');
const form = document.querySelector('form');
// const commentLo = document.querySelector('.article-bottom-middle-comment-text')[0];
// commnetLo = commentLocation 댓글 들어갈 경로//

// 버튼 on/off
// commentBox.addEventListener('keyUp', (evernt) => {
//   if (commentBox.length > 0) {
//     commentBtn.disabled = false;
//     commentBtn.style.backgroundColor = 'blue';
//   }
// });

// const add = (e) => {
//   e.preventDefault();

// if (commentBox.value.length === 0 ) {
//   alert("댓글을 입력하세요!");
//  } else {

//  }
// }

const add = (e) => {
  // e.preventDefault();
  const commentLo = document.querySelector('.article-bottom-middle-comment-text');
  const comments = document.createElement('div');
  const mainText = document.createElement('span');
  const commentImg = document.createElement('img');

  // mainIcon.classList.add('clickHeart');
  // mainText.classList.add('main-icon-like-text-write-subtext');
  comments.classList.add('article-bottom-middle-commnet-box');
  commentImg.classList.add('text-img');

  commentImg.setAttribute('src', 'img/heart.png');

  mainText.innerText = commentBox.value;

  comments.appendChild(mainText);
  comments.appendChild(commentImg);

  commentLo.appendChild(comments);

  e.preventDefault();
};

commentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  add(e);
  commentBox.value = '';
});



//html 의 button 을 form으로 태그로 묶은 후에 commentBtn 자리에 넣어주면
//버튼 클릭뿐 아니라 엔터도 가능하다.

// ---댓글달기

// 댓글 옆의 하트는  Element.classList.toggle 사용하기
