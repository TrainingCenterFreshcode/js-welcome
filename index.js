/*

Розробити алгоритм, який буде відображати режим нашого дня

Потрібно розробити функцію, яка приймає ту чи іншу пору дня (ранок, обід, вечір) і виконує ті чи інші дії, які ми виконуємо у вказану пору дня

*/

function todo(timeOfDay) { // HOF
    // morning - список справ на ранок
    // lunch - список справ на обід
    // evening - список справ на вечір

    switch(timeOfDay) {
        case 'morning': {
            brushingTeth();
            skincare();
            breakfast();
            break;
        }
        case 'lunch': {
            goToOffice();
            coding();
            lunch();
            coding();
            break;
        }
        case 'evening': {
            education();
            coding();
            goToHome();
            shower();
            brushingTeth();
            skincare();
            sleep();
            break;
        }
        default: {
            console.log('Помилка! Такої пори дня не передюачено!')
        }
    }
}

//todo('morning');
//todo('lunch');
todo('evening');

function brushingTeth() {
    console.log('brushing teeth');
}

function skincare() {
    console.log('skincare');
}

function breakfast() {
    console.log('breakfast');
}

function goToOffice() {
    console.log('goToOffice');
}

function coding() {
    console.log('coding');
}

function lunch() {
    console.log('lunch');
}

function education() {
    console.log('education');
}

function goToHome() {
    console.log('goToHome');
}

function shower() {
    console.log('shower');
}

function sleep() {
    console.log('sleep');
}