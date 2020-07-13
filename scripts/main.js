// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// functionality for adding a new comment via the comments form
const errorField = document.querySelector('.errors');
const errorList = document.querySelector('.errors ul');
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  validateCommentForm();
};

function validateCommentForm() {
  errorList.innerHTML = '';

  if (!isEmptyWhiteSpace(nameField.value) && !isEmptyWhiteSpace(commentField.value)) {
    submitComment();
  } else {
    if (isEmptyWhiteSpace(nameField.value)) {
      createLink(nameField);
    }

    if (isEmptyWhiteSpace(commentField.value)) {
      createLink(commentField);
    }
  }
}

function isEmptyWhiteSpace(text) {
  return text === "" || text.match(/\S/) === null;
}

function createLink(testItem) {
  const listItem = document.createElement('li');
  const anchor = document.createElement('a');

  anchor.textContent = `${testItem.name} is required`;
  anchor.href = `#${testItem.name}`;
  anchor.onclick = function() {
    testItem.input.focus();
  }

  listItem.appendChild(anchor);
  errorList.appendChild(listItem);
}

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
