//додавання в localStorage
document.querySelectorAll('#q1 .survey_button').forEach(function (button) {
    button.addEventListener('click', function () {
        let fontValue = this.querySelector('font').innerText;
        localStorage.setItem('answers1', fontValue);
    })
});

document.querySelectorAll('#q2 .survey_button').forEach(function (button) {
    button.addEventListener('click', function () {
        let fontValue = this.querySelector('font').innerText;
        localStorage.setItem('answers2', fontValue);
    })
});

document.querySelectorAll('#q3 .survey_button').forEach(function (button) {
    button.addEventListener('click', function () {
        let fontValue = this.querySelector('font').innerText;
        localStorage.setItem('answers3', fontValue);
    })
});

document.querySelectorAll('#q4 .survey_button').forEach(function (button) {
    button.addEventListener('click', function () {
        let fontValue = this.querySelector('font').innerText;
        localStorage.setItem('answers4', fontValue);
    })
});


//кнопка виведення в консоль
document.querySelector('#p_modal_button-3').addEventListener('click', () => {

    let answers1 = localStorage.getItem('answers1');
    let answers2 = localStorage.getItem('answers2');
    let answers3 = localStorage.getItem('answers3');
    let answers4 = localStorage.getItem('answers4');
    console.log('Аnswer 1: ' + answers1);
    console.log('Аnswer 2: ' + answers2);
    console.log('Аnswer 3: ' + answers3);
    console.log('Аnswer 4: ' + answers4);

    document.querySelector('#p_modal3').style.display = 'none';
    document.querySelector('.modal-backdrop').style.display = 'none';
    document.querySelector('.img_gift').style.display = 'none';
    // document.querySelector('#content3').style.display = 'none';
    document.querySelector('.modal-open').style.overflow = 'inherit';
})

//додавання коментаря
document.querySelector('.form-comment__btn').addEventListener('click', () => {

    const form = document.querySelector('.form-comment');
    let commentText = document.querySelector('.form-comment__textarea').value;

    const comments = document.createElement('div');
    comments.className = 'comments';
    comments.id = 'comment0';
    comments.style.display = 'block';

    comments.innerHTML = `
                            <div class="profile">
                                <img src="assets/images/6.jpg" style="max-width: 60; max-height: 90;">
                            </div>
                            <div class="comment-content">
                                <p class="name">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">User</font>
                                    </font>
                                </p>
                                <p>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">${commentText}</font>
                                    </font>
                                </p>
                            </div>
                            <div class="clr"></div>
                            <div class="comment-status">
                                <span>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Curte·comente</font>
                                    </font>
                                    <img src="assets/images/like.png" width="15px" height="15px">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">29</font>
                                    </font>
                                </span>
                                <font style="vertical-align: inherit;">
                                    <small>
                                        <font style="vertical-align: inherit;">·</font>
                                    </small>


                                    <small>
                                        <u>
                                            <font style="vertical-align: inherit;">4 minutos antes</font>
                                        </u>
                                    </small>
                                </font>
                                <small>
                                    <font style="vertical-align: inherit;"></font>
                                    <u>
                                        <font style="vertical-align: inherit;"></font>
                                    </u>
                                </small>
                            </div>                        
    `;
    document.querySelector('.comments-inner').prepend(comments);
    document.querySelector('.form-comment__textarea').value = '';
})


