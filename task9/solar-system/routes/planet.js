const express = require('express');
const Planet = require('../lib/planet');
const router = express.Router();

/* Звезда Солнце. */
router.get('/sun', function(req, res, next) {
    const planet = new Planet();

    planet.name = 'sun';
    planet.planetName = 'Солнце';
    planet.planetDescription = 'Наша звезда';

    planet.addPoint(
        32.6,
        7,
        'Гигантские петли светящегося газа, называемые протуберанцами, иногда поднимаются над поверхностью Солнца. ' +
        'Даже самая маленькая петля может проглотить Землю много раз.'
    );

    planet.addPoint(
        62.6,
        52.7,
        'Темные пятна, называемые солнечными пятнами, появляются на поверхности Солнца. Их температура понижена ' +
        'примерно до 1500 К, по сравнению с область вокруг них. Количество солнечных пятен увеличивается и уменьшается ' +
        'каждые 11 лет.'
    );

    planet.addPoint(
        24,
        65,
        'Эти внезапные всплески энергии появляются на поверхности Солнца без предупреждения. Они намного ярче и ' +
        'жарче, чем область вокруг них.'
    );

    planet.addPoint(
        53,
        91,
        'Солнечная корона — это внешние слои атмосферы Солнца, начинающиеся выше тонкого переходного слоя над ' +
        'хромосферой, в котором температура возрастает в 100 раз.'
    );

    planet.addFact('Тип звезды', 'Желтый Карлик', 'orange', 'white');
    planet.addFact('Диаметр', '1,400,000 km', 'orange', 'white');
    planet.addFact('Возраст', '~4,5 Миллиарда Лет', 'orange', 'white');
    planet.addFact('Масса', '333,000 Земных Масс', 'orange', 'white');

    res.json(planet);
});

/* Планета Меркурий. */
router.get('/mercury', function(req, res, next) {
    const planet = new Planet();

    planet.name = 'mercury';
    planet.planetName = 'Меркурий';
    planet.planetDescription = 'Самая быстрая Планета';

    planet.addPoint(
        26,
        24,
        'Поверхность Меркурия сильно облицована. Атмосфера слишком тонкая, чтобы сжигать метеориты, поэтому ' +
        'планета бомбардируется камнями из космоса.'
    );

    planet.addPoint(
        95,
        45,
        'Южный полярный регион Меркурия получает очень мало солнечного света, и в результате он имеет постоянную ' +
        'температуру замерзания.'
    );

    planet.addPoint(
        15,
        74,
        'Некоторые части Меркурия покрыты плоскими равнинами. Эти области были сформированы, когда лава от ' +
        'вулканов текла в низменные области.'

    );

    planet.addPoint(
        59,
        73,
        'Кратеры на Меркурии варьируются по размеру: от маленьких чашеобразных кратеров до бассейна Калорис, ' +
        'который составляет примерно одну четвертую ширины планеты.'
    );

    planet.addFact('Дистанция от Солнца', '48,600,505 km', 'blue', 'white');
    planet.addFact('Диаметр', '4,900 km', 'blue', 'white');
    planet.addFact('Продолжительность года', '88 Земных Дней', 'blue', 'white');
    planet.addFact('Масса', '0,06 Земных Масс', 'blue', 'white');

    res.json(planet);
});

/* Планета Венера. */
router.get('/venus', function(req, res, next) {
    const planet = new Planet();

    planet.name = 'venus';
    planet.planetName = 'Венера';
    planet.planetDescription = 'Планетарная горячая точка';

    planet.addPoint(
        69,
        22,
        'Дали Часма, показанная здесь, представляет собой систему глубоких узких впадин, которые прорезают ' +
        'поверхность Венеры на протяжении более 1200 миль (2000 км).'
    );

    planet.addPoint(
        41,
        34,
        'Щитовые вулканы имеют форму щита или перевернутой пластины и имеют широкое основание с пологими сторонами. ' +
        'Сапас Монс, возвышающийся на 1 милю (1,5 км) над окружающей местностью, является одним из щитовых вулканов Венеры.'
    );

    planet.addPoint(
        95,
        50,
        'Венера наклонена вверх ногами вокруг своей оси, поэтому северный полюс находится на дне земного шара.'
    );

    planet.addPoint(
        76,
        55,
        'Ударные кратеры на Венере имеют размеры от 4 миль (7 км) до 168 миль (270 км) в поперечнике. Самые большие ' +
        'имеют несколько колец, средние имеют центральные пики, а меньшие имеют гладкие полы. Кратер Стентона, ' +
        'показанный здесь, является одним из крупнейших кратеров.'
    );

    planet.addPoint(
        33,
        50,
        'Венера усеяна примерно 20 возвышенностями или холмистыми районами, известными как регио. Альта Реджио, ' +
        'показанная здесь, является одной из многих крупных горных областей.'
    );

    planet.addFact('Дистанция от Солнца', '108,147,553 km', 'orange', 'white');
    planet.addFact('Диаметр', '12,000 km', 'orange', 'white');
    planet.addFact('Средняя температура', '464 градусов Цельсия', 'orange', 'white');
    planet.addFact('Масса', '0,8 Земных Масс', 'orange', 'white');

    res.json(planet);
});

/* Планета Земля. */
router.get('/earth', function(req, res, next) {
    const planet = new Planet();

    planet.name = 'earth';
    planet.planetName = 'Земля';
    planet.planetDescription = 'Наша планета';

    planet.addPoint(
        35,
        24,
        'Земля - единственная планета в нашей Солнечной системе с жидкой водой на ее поверхности. Все живые ' +
        'существа на Земле требуют воды, чтобы выжить.'
    );

    planet.addPoint(
        70,
        14,
        'Энергия Солнца нагревает воду на поверхности Земли, заставляя ее подниматься в воздух в виде облаков. ' +
        'Вода возвращается на Землю в виде дождя, так что большинство районов Земли получают постоянный запас пресной воды.'
    );

    planet.addPoint(
        94,
        50,
        'Северный и Южный полюсы - самые холодные регионы на планете. Здесь вода замерзает в гигантские слои льда, ' +
        'называемые ледяными шапками. Толщина льда в районе Южного полюса — 2840 метров.'
    );

    planet.addPoint(
        58,
        70,
        'Суша — часть поверхности планеты Земля, не покрытая водами Мирового океана и другими водными объектами. ' +
        'Общая площадь суши планеты Земля составляет 149 939 063,133 кв. км. Доля суши планеты — 29,1%'
    );

    planet.addPoint(
        80,
        83,
        'Земля окружена слоем смешанных газов, называемых атмосферой. Многие животные, включая людей, выживают, ' +
        'вдыхая кислород из атмосферы.'
    );

    planet.addFact('Дистанция от Солнца', '147,822,839 km', 'blue', 'white');
    planet.addFact('Диаметр', '13,000 km', 'blue', 'white');
    planet.addFact('Продолжительность года', '365 Земных Дней', 'blue', 'white');
    planet.addFact('Масса', '1 Земная Масса', 'blue', 'white');

    res.json(planet);
});

/* Спетник Земли - Луна. */
router.get('/moon', function(req, res, next) {
    const planet = new Planet();

    planet.name = 'moon';
    planet.planetName = 'Луна';
    planet.planetDescription = 'Естественный спутник Земли';

    planet.addPoint(
        39,
        37,
        'Поверхность Луны усеяна кратерами, оставленными ударами астероидов.'
    );

    planet.addPoint(
        85,
        46,
        'Территории за пределами морей называются высокогорьями. Они покрывают большую часть поверхности Луны, ' +
        'особенно на дальней стороне.'
    );

    planet.addPoint(
        35,
        93,
        'Лунные моря - это плоские равнины из темных скал, образованных древними вулканическими извержениями. Их ' +
        'называют «морями», потому что ранние астрономы думали, что они заполнены водой.'
    );

    planet.addFact('Дистанция от Земли', '355,063 km', 'blue', 'white');
    planet.addFact('Диаметр', '3,476 km', 'blue', 'white');
    planet.addFact('Температура', '-150 to 120 °C', 'blue', 'white');
    planet.addFact('Масса', '0,01 Земных Масс', 'blue', 'white');

    res.json(planet);
});

/* Планета Марс. */
router.get('/mars', function(req, res, next) {
    const planet = new Planet();

    planet.name = 'mars';
    planet.planetName = 'Марс';
    planet.planetDescription = 'Красная планета';

    planet.addPoint(
        26,
        24,
        'Ученые отправили зонды для посадки на Марс. Некоторые из них прислали удивительные фотографии ' +
        'поверхности планеты.'
    );

    planet.addPoint(
        1,
        50,
        'Ледяные шапки Марса состоят из льда, углекислого газа и слоев пыли. Колпаки сокращаются летом, но зимой ' +
        'снова растут, когда углекислый газ превращается в мороз.'
    );

    planet.addPoint(
        20,
        71,
        'Северное полушарие Марса в основном состоит из низинных вулканических равнин. Эти равнины в основном ' +
        'сформированы из лавы от извержений вулканов.'
    );

    planet.addPoint(
        31,
        85,
        'Марс имеет красноватый цвет, потому что его почва содержит вещество, называемое оксидом железа, которое ' +
        'похоже на ржавое железо.'
    );

    planet.addPoint(
        68,
        70,
        'Большинство кратеров Марса были сформированы метеоритами более 3,8 миллиардов лет назад.'
    );

    planet.addFact('Дистанция от Солнца', '226,510,594 km', 'red', 'white');
    planet.addFact('Диаметр', '6,780 km', 'red', 'white');
    planet.addFact('Продолжительность года', '678 Земных Дней', 'red', 'white');
    planet.addFact('Масса', '0,11 Земных Масс', 'red', 'white');

    res.json(planet);
});

/* Планета Юпитер. */
router.get('/jupiter', function(req, res, next) {
    const planet = new Planet();

    planet.name = 'jupiter';
    planet.planetName = 'Юпитер';
    planet.planetDescription = 'В 2 раза массивнее, чем все остальные планеты вместе взятые';

    planet.addPoint(
        70,
        32,
        'Одна из самых известных особенностей Юпитера - это сильный шторм, называемый Великим Красным Пятном.'
    );

    planet.addPoint(
        30,
        29,
        'Полосы белого облака, сделанные из химического вещества под названием аммиак, поднимаются над ' +
        'красно-коричневой атмосферой в полосах, называемых зонами.'
    );

    planet.addPoint(
        40,
        75,
        'Сильные ветры в атмосфере Юпитера создают вихри и узоры облаков.'
    );

    planet.addPoint(
        79.5,
        77,
        'Там, где слои облаков сливаются, они иногда превращаются в гигантские штормы.'
    );

    planet.addFact('Дистанция от Солнца', '798,199,227 km', 'red', 'white');
    planet.addFact('Диаметр', '142,984 km', 'red', 'white');
    planet.addFact('Продолжительность года', '11,86 Земных Лет', 'red', 'white');
    planet.addFact('Масса', '318 Земных Масс', 'red', 'white');

    res.json(planet);
});

/* Планета Нептун. */
router.get('/neptune', function(req, res, next) {
    const planet = new Planet();

    planet.name = 'neptune';
    planet.planetName = 'Нептун';
    planet.planetDescription = 'Самая ветреная планета';

    planet.addPoint(
        67,
        26,
        'Большое, овальное облако было обнаружено Вояджером-2, когда он пролетел мимо планеты в 1989 году. Ученые ' +
        'идентифицировали это облако как вращающуюся бурю, почти такую же большую, как Земля, с самыми сильными ветрами, ' +
        'зарегистрированными где-либо в Солнечной системе.'
    );

    planet.addPoint(
        21,
        80,
        'Глубокий синий цвет Нептуна вызван химическим веществом под названием метан в его атмосфере.'
    );

    planet.addPoint(
        82,
        63,
        'Нептун имеет очень активную атмосферу с ветрами, дующими с чрезвычайно высокими скоростями. Это приводит ' +
        'к тому, что газы поднимаются и охлаждаются в верхних слоях, образуя полосы облаков. Эти облака сделаны из ' +
        'метанового льда.'
    );

    planet.addFact('Дистанция от Солнца', '4,478,642,735 km', 'blue', 'white');
    planet.addFact('Диаметр', '49,528 km', 'blue', 'white');
    planet.addFact('Продолжительность года', '164,90 Земных Лет', 'blue', 'white');
    planet.addFact('Масса', '17,10 Земных Масс', 'blue', 'white');

    res.json(planet);
});

/* Планета Сатурн. */
router.get('/saturn', function(req, res, next) {
    const planet = new Planet();

    planet.name = 'saturn';
    planet.planetName = 'Сатурн';
    planet.planetDescription = 'Жемчужина нашей солнечной системы';

    planet.addPoint(
        2,
        4,
        'Некоторые из спутников Сатурна вращаются внутри колец, расчищая пути пустого пространства, ' +
        'называемые промежутками.'
    );

    planet.addPoint(
        24,
        14,
        'Сатурн имеет самые яркие и крупные кольца на любой планете в нашей Солнечной системе.'
    );

    planet.addPoint(
        30,
        71,
        'Северные и южные полярные области Сатурна зимой становятся синими.'
    );

    planet.addPoint(
        45,
        72,
        'Когда Сатурн вращается, вокруг его верхней атмосферы дуют сильные ветры, создавая узоры из полосатых облаков.'
    );

    planet.addPoint(
        69,
        70,
        'Быстрое вращение Сатурна выталкивает газы наружу, вызывая отчетливую выпуклость на экваторе.'
    );

    planet.addFact('Дистанция от Солнца', '1,504,668,371 km', 'blue', 'white');
    planet.addFact('Диаметр', '120,536 km', 'blue', 'white');
    planet.addFact('Продолжительность года', '29,46 Земных Лет', 'blue', 'white');
    planet.addFact('Масса', '95 Земных Масс', 'blue', 'white');

    res.json(planet);
});

/* Планета Уран. */
router.get('/uranus', function(req, res, next) {
    const planet = new Planet();

    planet.name = 'uranus';
    planet.planetName = 'Уран';
    planet.planetDescription = 'Боковая Планета';

    planet.addPoint(
        24,
        24,
        'По сравнению с другими газовыми планетами, такими как Юпитер и Сатурн, Уран имеет относительно спокойную ' +
        'атмосферу. В результате его поверхность кажется однородной. Небольшие количества химического метана в ' +
        'атмосфере планеты придают Урану синий цвет.'
    );

    planet.addPoint(
        75,
        44,
        'Слабые белые полосы, видимые на поверхности Урана, представляют собой пучки облаков в верхнем слое его ' +
        'атмосферы.'
    );

    planet.addPoint(
        38,
        96,
        'Уран лежит на своей стороне, поскольку он вращается вокруг Солнца, и каждый из полюсов указывает на Солнце ' +
        'в течение 21 года за один раз. Это означает, что в то время как один полюс проводит много лет в постоянном ' +
        'солнечном свете, другой полюс будет находиться в полной темноте.'
    );

    planet.addFact('Дистанция от Солнца', '3,040,582,060 km', 'blue', 'white');
    planet.addFact('Диаметр', '51,118 km', 'blue', 'white');
    planet.addFact('Продолжительность года', '84 Земных Лет', 'blue', 'white');
    planet.addFact('Масса', '14,50 Земных Масс', 'blue', 'white');

    res.json(planet);
});

/* Планета Плутон. */
router.get('/pluto', function(req, res, next) {
    const planet = new Planet();

    planet.name = 'pluto';
    planet.planetName = 'Плутон';
    planet.planetDescription = 'Карликова планета';

    planet.addPoint(
        70,
        28,
        'Различные части поверхности Плутона покрыты замороженным азотом, замороженным метаном и водяным льдом. ' +
        'Это дает карликовой планете пятнистую поверхность.'
    );

    planet.addPoint(
        22,
        66,
        'Плутон, расположенный далеко от Солнца в морозно-холодной области на краю Солнечной системы, представляет ' +
        'собой замороженный мир с температурой поверхности –230ºC.'
    );

    planet.addFact('Дистанция от Солнца', '5,047,896,241 km', 'blue', 'white');
    planet.addFact('Диаметр', '2,304 km', 'blue', 'white');
    planet.addFact('Продолжительность года', '248 Земных Лет', 'blue', 'white');
    planet.addFact('Масса', '0,01 Земных Масс', 'blue', 'white');

    res.json(planet);
});

module.exports = router;