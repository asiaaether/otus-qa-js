function kolobok(name) {
    let answer = '';
    switch (name) {
        case 'дедушка': 
         answer = 'Я от дедушки ушёл';
         break;

        case 'заяц':
         answer = 'Я от зайца ушел';
         break;

        case 'лиса':
         answer = 'Меня съели';
         break;
    }
    return answer
}

function newYear(name) {
    let answer = `${name}! `;
    return answer.repeat(3)
}