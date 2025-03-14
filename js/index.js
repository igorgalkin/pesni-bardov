'use strict';

document.addEventListener('DOMContentLoaded', () => {

	// modal menu
	{
		document.body.insertAdjacentHTML('beforeend', `
    <div class="modal">
      <div class="modal__head d-flex">
        <h3>Исполнители авторской песни</h3>
        <botton class="closed">&times;
				<span class="visually-hidden">закрыть меню</span>
				</botton>
      </div>
      <div class="modal__menu"></div>
    </div>
  `);

		// arrow Bardy
		const arrowBards = {
			"Алег и Олеся Русак": {
				"link": "./aleg-i-olesya-rusak.html",
				"img": "./img/photo/aleg-i-olesya-rusak-1.jpg"
			},
			"Александр Коротынский": {
				"link": "./aleksandr-korotynskij.html",
				"img": "./img/photo/aleksandr-korotynskij-1.jpg"
			},
			"Александр Самофал": {
				"link": "./aleksandr-samofal.html",
				"img": "./img/photo/aleksandr-samofal-1.jpg"
			},
			"Алена Ирина": {
				"link": "./alena-irina.html",
				"img": "./img/photo/alena-irina-1.jpg"
			},
			"Аня Любимова": {
				"link": "./anya-lyubimova.html",
				"img": "./img/photo/anya-lyubimova-1.jpg"
			},
			"Братья Золотухины": {
				"link": "./bratya-zolotuxiny.html",
				"img": "./img/photo/bratya-zolotuxiny-1.jpg"
			},
			"Булат Окуджава": {
				"link": "./bulat-okudzhava.html",
				"img": "./img/photo/bulat-okudzhava-1.jpg"
			},
			"Виталий и Наталья Сколовы": {
				"link": "./skolovy.html",
				"img": "./img/photo/skolovy-2.jpg"
			},
			"Владимир Новиков": {
				"link": "./vladimir-novikov.html",
				"img": "./img/photo/vladimir-novikov-1.jpg"
			},
			"Владимир Притула": {
				"link": "./vladimir-pritula.html",
				"img": "./img/photo/vladimir-pritula-1.jpg"
			},
			"Елена Берегиня": {
				"link": "./elena-bereginya.html",
				"img": "./img/photo/elena-bereginya-1.jpg"
			},
			"Любава Просто": {
				"link": "./lyubava-prosto.html",
				"img": "./img/photo/lyubava-prosto-1.jpg"
			},
			"Люся Алексеенко": {
				"link": "./lyusya-alekseenko.html",
				"img": "./img/photo/lyusya-alekseenko-1.jpg"
			},
			"Мир друзей": {
				"link": "./mir-druzej.html",
				"img": "./img/photo/mir-druzej-1.jpg"
			},
			"Михайло и Ольга Ладомировы": {
				"link": "./mixajlo-i-olga-ladomirovy.html",
				"img": "./img/photo/mixajlo-i-olga-ladomirovy-1.jpg"
			},
			"Наталья Счастливцева": {
				"link": "./natalya-schastlivceva.html",
				"img": "./img/photo/natalya-schastlivceva-1.jpg"
			},
			"Олесь из Любоистока": {
				"link": "./oles-iz-lyuboistoka.html",
				"img": "./img/photo/oles-iz-lyuboistoka-1.jpg"
			},
			"Ольга Барда": {
				"link": "./olga-barda.html",
				"img": "./img/photo/olga-barda-1.jpg"
			},
			"Оля Лучик": {
				"link": "./olya-luchik.html",
				"img": "./img/photo/olya-luchik-1.jpg"
			},
			"Светлана Базай": {
				"link": "./svetlana-bazaj.html",
				"img": "./img/photo/svetlana-bazaj-1.jpg"
			},
			"Светозар и группа АураМира": {
				"link": "./svetozar-i-gruppa-auramira.html",
				"img": "./img/photo/svetozar-i-gruppa-auramira-1.jpg"
			},
			"Сергей Николаев и Евгения Гайдабас": {
				"link": "./seryozhenka.html",
				"img": "./img/photo/sergej-nikolaev-1.jpg"
			},
			"Солнечные барды": {
				"link": "./solnechnye-bardy.html",
				"img": "./img/photo/solnechnye-bardy-1.jpg"
			},
			"Творческое объединение Радость": {
				"link": "./tvorcheskoe-obedinenie-radost.html",
				"img": "./img/photo/tvorcheskoe-obedinenie-radost-1.jpg"
			}
		}

		let sliderBards = document.querySelector('.modal__menu');

		for (let key in arrowBards) {
			sliderBards.innerHTML += `
    <div class="modal__item">
      <a class="submenu_link" href = "${arrowBards[key].link}">
        <div class="modal__photo">
          <img src="${arrowBards[key].img}" width="200" heigt="200" alt="${key}">
        </div>
        ${key}
      </a>
    </div>`;
		}
		// arrow Bards end

		const btnBards = document.querySelector('.btn-menu');
		const modal = document.querySelector('.modal');
		const modalMenu = document.querySelector('.modal__menu');
		const closed = document.querySelector('.closed');

		btnBards.addEventListener('click', () => {
			modal.classList.add('dBlock');
			setTimeout(() => {
				modalMenu.classList.add('animation');
			}, 100);
			document.body.classList.add('no-scroll');
		});

		closed.addEventListener('click', () => {
			modal.classList.remove('dBlock');
			modalMenu.classList.remove('animation');
			document.body.classList.remove('no-scroll');
		});

	}
	// end modal menu

});