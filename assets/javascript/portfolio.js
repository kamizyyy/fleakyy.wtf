'use strict';

const timeouts = [];

const mobileAndTabletCheck = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(document).ready(() => {
  const links = [
    {
    name: 'discord',
    link: 'https://discord.com/users/328191967362154496'
  },
    {
	  name: 'youtube',
	  link: 'https://www.youtube.com/channel/UCBa-pPjF5mO8hU_jTvJOHtA'
	},
    {
      name: 'ogu',
      link: 'http://ogusers.com/fkyy',
    },
    {
      name: 'steam',
      link: 'http://steamcommunity.com/id/kickturn',
    },
  ];

  for (let i in links) {
    let link = links[i];

    $('#marquee').append(`<a href="${link.link}" target="_BLANK">${link.name}</a>`);

    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' <img class="emoticon" src="assets/others/mgh_17.png"> ');
  }

  if (mobileAndTabletCheck()) {
    $('#background').replaceWith('<div id="background" style="background-image: url(assets/images/mobile-background.jpg);"></div>');

    app.shouldIgnoreVideo = true;
  }

  app.titleChanger([' ', 'f','fl','fle','flea','fleak','fleaky', 'fleakyy', 'fleakyy#', 'fleakyy#5', 'fleakyy#57', 'fleakyy#577', 'fleakyy#5777', 'fleakyy#577', 'fleakyy#57', 'fleakyy#5', 'fleakyy#', 'fleakyy', 'fleaky', 'fleak', 'flea', 'fle', 'fl', 'f']);
  app.iconChanger(['assets/icons/crown.png', 'assets/icons/crown.png']);
});

if ($.cookie('videoTime')) {
  app.videoElement.currentTime = $.cookie('videoTime');
  app.audioElement.currentTime = $.cookie('videoTime');
}

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

document.body.onkeyup = (event) => {
  if (event.keyCode == 32 && app.skippedIntro) {
    if (app.backgroundToggler) {
      app.videoElement.play();
      app.audioElement.play();
    } else {
      app.videoElement.pause();
      app.audioElement.pause();
    }

    return (app.backgroundToggler = !app.backgroundToggler);
  }
};

$('html').on('contextmenu', (event) => {
  const img = document.createElement('img');

  const trollfaceLight = app.skippedIntro ? '' : 'trollface-light';

  img.src = 'assets/others/clown.png';
  img.width = 24;
  img.height = 24;
  img.alt = 'fleakyy.wtf';
  img.style = `position: absolute; left: ${event.pageX}px; top: ${event.pageY}px; z-index: 10`;
  img.className = `troll ${trollfaceLight}`;

  document.body.appendChild(img);
});

setInterval(() => {
  $('.troll').remove();
}, 600);

$('.skip').click(() => {
  skipIntro();
});

$.fn.extend({
  animateCss: function (animationName) {
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    this.addClass(`animated ${animationName}`).one(animationEnd, () => {
      $(this).removeClass(`animated ${animationName}`);
    });

    return this;
  },
});

const writeLine = (text, speed, timeout, callback) => {
  timeout = typeof timeout === 'number' ? timeout : [0, (callback = timeout)];

  const lineNumber = app.id !== 2 ? ++app.id : (app.id += 2);

  setTimeout(() => {
    const typed = new Typed(`#line${lineNumber}`, {
      strings: text,
      typeSpeed: speed,
      onComplete: callback,
    });
  }, timeout);
};

writeLine(["> Granting access to <span style='font-size: 14px; color: #ff91a4;'>[fleakyy.wtf]</span>....", `> Access granted! <span style='font-size: 14px; color: #ff91a4;'>[completed]</span>`], 45, () => {
if (app.skippedIntro) return;

clearCursor();

const usernames = ['user', 'dude'];


  if (app.skippedIntro) return;

  clearCursor();

  writeLine([`<i style='color: #ff91a4'>$ zzz $</i>`], 120, 500, () => {
    timeouts.push(
      setTimeout(() => {
        if (app.skippedIntro) return;

        clearCursor();

        setTimeout(() => {
          skipIntro();
        }, 500);
      }, 1000)
    );
  });
  });

const skipIntro = () => {
  if (app.skippedIntro) return;

  app.skippedIntro = true;

  timeouts.forEach((timeout) => {
    clearTimeout(timeout);
  });

  $('.top-right').remove();

  $('#main').fadeOut(100, () => {
    $('#main').remove();

    $('#marquee').marquee({
      duration: 15000,
      gap: 420,
      delayBeforeStart: 1000,
      direction: 'left',
      duplicated: true,
    });

    setTimeout(() => {
      $('.brand-header').animateCss(app.effects[Math.floor(Math.random() * app.effects.length)]);
    }, 200);

    setTimeout(() => {
      const typed = new Typed('#brand', {
        strings: app.brandDescription,
        typeSpeed: 40,

        onComplete: () => {
          clearCursor();
        },
      });
    }, 1350);

    setTimeout(() => {
      if (!app.shouldIgnoreVideo) {
        app.videoElement.play();
        app.audioElement.play();
      }

      app.videoElement.addEventListener(
        'timeupdate',
        () => {
          $.cookie('videoTime', app.videoElement.currentTime, { expires: 1 });
        },
        false
      );

      $('.marquee-container').css('visibility', 'visible').hide().fadeIn(100);

      $('.marquee-container').animateCss('zoomIn');

      $('.container').fadeIn();

      $('.background').fadeIn(200, () => {
        if (!app.shouldIgnoreVideo) $('#audio').animate({ volume: app.musicVolume }, app.musicFadeIn);
      });
    }, 200);
  });
};

const clearCursor = () => {
  return $('span').siblings('.typed-cursor').css('opacity', '0');
};