//dom references
let html; //***

//Callback - Visualisation (shows)
const show /***/ = function (jsonObject) {
  //Toon menu
  console.log(jsonObject);
  let htmlstring_SOMETHING = '';
  let htmlstringSOMETHING = '';
  for (const SOMETHING of jsonObject.SOMETHING) {
    htmlstring_SOMETHING += `<li class="c-sidebar-item"><button class="c-sidebar-button js-station" data-destination-id="${SOMETHING.idSOMETHING}">${bestemming.stad}</button></li>`;
    htmlstringSOMETHING += `<option value="${SOMETHING.idSOMETHING}">${SOMETHING.UNDERSOMETHING}</option>`;
  }
  htmlSOMETHING.innerHTML = htmlstring_SOMETHING;

  //voor dynamische dropdownbox
  if (htmlSOMETHINGSelect) {
    htmlSOMETHINGSelect.innerHTML += htmlstring_SOMETHING;
  }
  listenToClickSOMETHING();
};

const showSOMTHINGS = function (jsonObject) {
  if (jsonObject.length === 0) {
    htmlSOMETHING.innerHTML = 'NIETS';
    return;
  }

  htmlSOMETHING.innerHTML = '';
  let htmlSOMETHING = '';
  console.log(jsonObject);
  for (const SOMETHING of jsonObject.SOMETHING) {
    console.log(SOMETHING);
    htmlstring += ''; /*`
			<div class="c-traject">
				<div class="c-traject__info">
					<h2 class="c-traject__name">${trein.stad}</h2>
					<p class="c-traject__train-id">Trein ${trein.idtrein}</p>
				</div>
				<div class="c-traject__departure">
					${trein.vertrek}
				</div>
				<div class="c-traject__track">
					${trein.spoor}
				</div>
				<div class="c-traject__delay">
				${trein.vertraging ? trein.vertraging : '-'}
				</div>
				<div class="c-traject__cancelled">
					${
            trein.afgeschaft
              ? '<span class="c-traject__cancelled-label">afgeschaft</span>'
              : ''
          }
        </div>
        <div class="c-traject__updatevertraging">
						<a href="vertraging.html?TreinID=${trein.idtrein}">
							<svg class="c-traject__updatevertraging-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs">
                <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
							</svg>
						</a>
					</div>
        <div class="c-traject__update">
          <a href="aanpassen.html?TreinID=${trein.idtrein}">
						<svg class="c-traject__update-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs">
							<polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
            </svg>
          </a>
				</div>
				<div class="c-traject__delete">
					<svg class="c-traject__delete-symbol" data-train-id=${
            trein.idtrein
          } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs">
						<polyline points="3 6 5 6 21 6"></polyline>
						<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
						<line x1="10" y1="11" x2="10" y2="17"></line>
						<line x1="14" y1="11" x2="14" y2="17"></line>
					</svg>
				</div>
			</div>`*/
  }

  htmlSOMETHING.innerHTML = htmlSOMETHING;
  listenToClickRemoveSOMETHING();
};

const showCleanSOMETHING = function () {
  htmlSOMETHING.innerHTML = 'Maak een keuze';
};

const showSOMETHING = function (jsonObject) {
  console.log(jsonObject);
  document.querySelector('.js-SOMETHING-idSOMETHING').value =
    jsonObject.idSOMETHING;
  document.querySelector('.js-SOMETHING-SOMETHING').value =
    jsonObject.SOMETHING;
  document.querySelector('.js-SOMETHING-SOMETHINGid').value =
    jsonObject.SOMETHINGID;
  document.querySelector('.js-SOMETHING-SOMETHING').value =
    jsonObject.SOMETHING;
  document.querySelector('.js-SOMETHING-SOMETHING').value =
    jsonObject.SOMETHING;
  document.querySelector('.js-SOMETHING-SOMETHING').value =
    jsonObject.SOMETHING;
};

const updateView = function (value) {
  htmlPercentage.innerHTML = value;
  htmlWave.style.transform = `translateY(${100 - value}%)`;
};

//callback (doesn't show)
const callbackAddSOMETHING = function (data) {
  console.log('ADD antw van server');
  if (data.SOMETHINGid > 0) {
    console.log('ADD gelukt');
    console.log(data);
    getSOMETHINGS(document.querySelector('.js-add-SOMETHING').value);
    currentSOMETHINGID = document.querySelector('.js-add-SOMETHING').value;
    htmlSelectedSOMETHING.innerText =
      document.querySelector('.js-add-SOMETHING').options[
        document.querySelector('.js-add-SOMETHING').selectedIndex
      ].innerText;
    document.querySelector('.js-add-SOMETHING').checked = false;
    document.querySelector('.js-add-SOMETHING').selectedIndex = 0;
    document.querySelector('.js-add-SOMETHING').value = '';
    document.querySelector('.js-add-SOMETHING').value = '';
    document.querySelector('.js-add-SOMETHING').value = '';
  }
};

const callbackRemoveSOMETHING = function (data) {
  console.log(data);
  getSOMETHINGS(currentSOMETHINGID);
};

// data acces (get_)
const getSOMETHING = function () {
  handleData(`http://127.0.0.1:5000/api/v1/SOMETHING/`, showSOMETHING);
};

// event listeners (listenTo_)
const listenToClicksSOMETHING = function () {
  const buttons = document.querySelectorAll('.js-SOMETHING');
  for (const btn of buttons) {
    btn.addEventListener('click', function () {
      htmlSelectedSOMETHING.innerText = btn.innerText;
      const id = btn.getAttribute('data-SOMETHING-id');
      currenSOMETHINGID = id;
      getSOMETHINGS(id);
    });
  }
};

const listenToClickAddSOMEHTING = function () {
  const button = document.querySelector('.js-add-SOMETHING');
  button.addEventListener('click', function () {
    console.log('toevoegen nieuwe SOMETHING');
    const jsonObject = JSON.stringify({
      SOMETHING: document.querySelector('.js-add-SOMETHING').checked,
      SOMETHINGID: document.querySelector('.js-add-SOMETHING').value,
      SOMETHING: document.querySelector('.js-add-SOMETHING').value,
      SOMETHING:
        document.querySelector('.js-add-SOMETHING').value == ''
          ? null
          : document.querySelector('.js-add-SOMETHING').value,
      SOMETHING: document.querySelector('.js-add-SOMETHING').value,
    });
    console.log(jsonObject);
    handleData(
      'http://127.0.0.1:5000/api/v1/SOMETHING/',
      callbackAddSOMETHING,
      null,
      'POST',
      jsonObject
    );
  });
};

const listenToClickRemoveSOMETHING = function () {
  const buttons = document.querySelectorAll('.c-SOMETHING__delete-symbol');
  for (const b of buttons) {
    b.addEventListener('click', function () {
      const id = b.getAttribute('data-SOMETHING-id');
      console.log('verwijder ' + id);
      handleData(
        `http://127.0.0.1:5000/api/v1/SOMETHING/${id}/`,
        callbackRemoveSOMETHING,
        null,
        'DELETE'
      );
    });
  }
};

const listenToUI = function () {
  const SOMETHING = document.querySelectorAll('.js-SOMETHING');
  for (const SOMETHING of SOMETHING) {
    btn.addEventListener('click', function () {
      const SOMETHING = btn.getAttribute('data-SOMETHING');
      htmllog.innerHTML = SOMETHING;
      htmlAddButton.setAttribute(`data-SOMETHING`, SOMETHING);
    });
  }
  htmlAddButton.addEventListener('click', function () {
    console.log(`er wordt ${this.getAttribute('data-SOMETHING')} ml gedronken`);
    const newSOMETHING = htmlAddButton.SOMETHING.SOMETHING;
    socketio.emit('F2B_new_logging', { SOMETHING: newSOMETHING });
  });
};

const listenToSocket = function () {
  socketio.on('connect', function () {
    console.log('verbonden met de socket webserver');
  });
  socketio.on('B2F_connected', function (mijnPayload) {
    console.log(`SOMETHING ${mijnPayload.currentProgress} SOMETHING`);
    const progressInPercentage = Math.ceil((currentProgress / dailyGoal) * 100);
    currentProgress = mijnPayload.currentProgress;
    updateView(progressInPercentage);
  });
};

//Init / DOMContentLoaded
const init = function () {
  console.log('SOMETHING');
  //fill in DOM
  htmlSOMETHING = document.querySelector('.js-SOMETHING');
  htmlSOMETHING = document.querySelector('.js-SOMETHING');
  htmlSOMETHING = document.querySelector('.js-SOMETHING');
  htmlSOMETHING = document.querySelector('.js-add-SOMETHING');
  htmlAdaptSOMETHING = document.querySelector('.js-adaptSOMETHING');

  // code die start na index.html geladen
  if (htmlSOMETHING) {
    getSOMETHINGS();
    showSOMTHINGS();
    listenToClickAddSOMEHTING();
    listenToUI();
    listenToSocket();
  }
};

document.addEventListener('DOMContentLoaded', init);
