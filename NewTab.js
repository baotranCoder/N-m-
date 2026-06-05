let App = {
  dataTab: [
    {
      id: 1,
      type: 'png',
      image: 'Nam.png',
      tieude: 'Nấm đẹp trai phô mai que',
      avatar: 'Nam.png',
      name: 'Nấm 버섯이',
    },
    {
      id: 2,
      type: 'png',
      image: 'Nam.png',
      tieude: 'Nấm là 1 developer nhiều năm làm game 2d of 3d online vs offline',
      avatar: 'Nam.png',
      name: 'Nấm 버섯이',
    },
  ],

  RequestData() {
    let html = this.dataTab.map(item => {
      return `
        <div class="item" data-type="${item.type}">
          
          <div
            class="image"
            style="background-image:url('${item.image}')">

            ${
              item.type === 'mp4'
                ? `
                <div class="requestPlay">
                  <div class="play">
                    <i class="ri-play-line"></i>
                  </div>
                </div>
                `
                : ''
            }

          </div>

          <div class="u">

            <h5>${item.tieude}</h5>

            <div class="rm">

              <div class="i">
                <div class="like">
                  <img src="${item.avatar}">
                </div>

                <p>${item.name}</p>
              </div>

              <div class="o">
                <i class="ri-heart-3-line heart"></i>
                <p class="data-heart">0</p>
              </div>

            </div>

          </div>

        </div>
      `;
    });

    document.querySelector('.tab').innerHTML =
      html.join('');
  },

  updateTim() {
    const hearts =
      document.querySelectorAll('.heart');

    hearts.forEach(tim => {
      let liked = false;
      let count = 0;

      const dataHeart =
        tim.parentElement.querySelector('.data-heart');

      tim.addEventListener('click', () => {

        liked = !liked;

        if (liked) {

          count++;

          tim.classList.remove('ri-heart-3-line');
          tim.classList.add('ri-heart-fill');
          tim.classList.add('beating');

          tim.style.color = 'crimson';

        } else {

          count--;

          tim.classList.remove('ri-heart-fill');
          tim.classList.remove('beating');
          tim.classList.add('ri-heart-3-line');

          tim.style.color = '#222327';
        }

        dataHeart.textContent = count;
      });
    });
  },

  updateTab() {
    document.getElementById('updataCommener')
      .textContent =
      `Có ${this.dataTab.length} Bài viết`;
  },
  
  Qr: function(){
    document.querySelector('.qr').addEventListener('click', function(){
        location.href = 'https://www.facebook.com/share/17f6kqpMeX/';
    });
  },
  
  playVideo() {
    const plays = document.querySelectorAll('.play');
    const Apple = document.querySelector('.Apple');
    const AppleQboxApp = document.querySelector('.AppleQboxApp');
    
    plays.forEach(btn => {
      btn.addEventListener('click', () => {
        Apple.style.display = 'none';
        AppleQboxApp.style.display = 'block';
        RequestVideoPlay();
      });
    });
  },
  
  start() {
    this.RequestData();
    this.updateTab();
    this.updateTim();
    this.playVideo();
    this.Qr();
  },
};

App.start();