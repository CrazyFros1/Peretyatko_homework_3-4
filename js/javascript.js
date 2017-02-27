var testGenerator = {

    wrpWidth: 800,                                                             
    banner: 'Тест по программированию',                                         
    buttonText: 'Проверить мои результаты',                                               
    question: 3,                                                                
    answer: 3,                                                                 
    test: 'Вопрос №1: Вариант ответа 1: Вариант ответа 2: Вариант ответа 3 :' +
          'Вопрос №2: Вариант ответа 1: Вариант ответа 2: Вариант ответа 3:' +
          'Вопрос №3: Вариант ответа 1: Вариант ответа 2: Вариант ответа 3', 


    testArr: [],

    start: function () {                                                       
        var x = this.question + (this.question * this.answer);
        this.testArr = this.test.split(':');                                  
        if (x == this.testArr.length) {
            this.createTree();
        } else {
            alert('alarm');
        }
    },

    createTree: function () {

        var wrapper = document.createElement('div');                            
        wrapper.classList.add('wrapper');
        wrapper.style.width = this.wrpWidth + 'px';                             
        var elem = document.querySelector('body');                                
        elem.insertBefore(wrapper, document.body.firstChild);               

        var header = document.createElement('h1');                        
        header.classList.add('header');
        header.innerHTML = this.banner;                                      
        elem = document.querySelector('.wrapper');
        elem.appendChild(header);

        var test = document.createElement('ol');                               
        test.classList.add('test');
        elem = document.querySelector('.wrapper');
        elem.appendChild(test);

        for (var i = 0; i < this.testArr.length; i += (this.answer + 1)) {   
            var testList = document.createElement('li');
            testList.classList.add('test__question');
            testList.innerHTML = this.testArr[i];
            elem = wrapper.querySelector('.test');
            elem.appendChild(testList);
        }

        elem = test.querySelectorAll('.test__question');
        for (i = 0; i < elem.length; i++) {
            var answer = document.createElement('ul');                        
            answer.classList.add('answer');
            elem[i].appendChild(answer);
        }

        elem = test.querySelectorAll('.answer');                             
        for (i = 0; i < elem.length; i++) {
            for (var z = 0; z < this.answer; z++) {                       
                var answerItem = document.createElement('li');
                answerItem.classList.add('answer__item');
                elem[z].appendChild(answerItem);
            }
        }

        elem = test.querySelectorAll('.answer__item');                       
        for (i = 0; i < elem.length; i++) {
            var answerArea = document.createElement('label');
            answerArea.classList.add('answer__area');
            elem[i].appendChild(answerArea);
        }

        for (i = 0; i < this.testArr.length; i += this.answer) {             
         this.testArr.splice(i, 1);
         }

        elem = test.querySelectorAll('.answer__area');
        for (i = 0; i < elem.length; i++) {

            var check = document.createElement('input');                       
            check.setAttribute('type', 'checkbox');
            check.classList.add('answer__area-check');
            elem[i].appendChild(check);

            var text = document.createElement('span');                      
            text.classList.add('answer__area-text');
            text.innerText = this.testArr[i];                                
            elem[i].appendChild(text);
        }

        var button = document.createElement('button');                          
        button.classList.add('button');
        button.innerText = this.buttonText;                                      
        elem = document.querySelector('.wrapper');
        elem.appendChild(button);
    }

};

testGenerator.start();