 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/1.jpg");
         document.title = 'ヽ(●-`Д´-)ノ哎哎哎等会儿走！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/1.jpg");
         document.title = 'ヾ(Ő∀Ő3)ノ好好好待着别动！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
