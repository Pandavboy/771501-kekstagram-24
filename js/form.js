const overlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.getElementById('upload-file');
const buttonCancel = document.getElementById('upload-cancel');
const form = document.getElementById('upload-select-image');
const tagInput = document.querySelector('.text__hashtags');
const commentArea = document.querySelector('.text__description');


const handler = (e) => {
  if(e.key === 'Escape'){
    overlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    form.reset();
  }
};


const changeForm = () => {
  uploadFile.addEventListener('change', () => {
    overlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });
};

const closeForm = () => {

  buttonCancel.addEventListener('click', () => {
    overlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    form.reset();
  });
  window.addEventListener('keydown', handler);

  tagInput.addEventListener('focusin', () => {
    window.removeEventListener('keydown', handler);
  });

  tagInput.addEventListener('focusout', () => {
    window.addEventListener('keydown', handler);
  });
  commentArea.addEventListener('focusin', () => {
    window.removeEventListener('keydown', handler);
  });

  commentArea.addEventListener('focusout', () => {
    window.addEventListener('keydown', handler);
  });
};


const formApp = () => {
  changeForm();
  closeForm();
};


export { formApp };
