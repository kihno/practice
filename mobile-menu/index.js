const collapseNav = (() => {
    const navBar = document.getElementById('navBar');
    const primary = document.getElementById('primary');
    const primaryItems = primary.querySelectorAll('.link:not(#more)');
    const moreLi = document.getElementById('more');
    const moreButton = document.getElementById('moreButton');
    const secondary = document.getElementById('secondary');
    const secondaryItems = secondary.querySelectorAll('li');
    const allLinks = document.querySelectorAll('li');

    primaryItems.forEach(item => {
        li = document.createElement('li');
        li.textContent = item.textContent;
        secondary.appendChild(li);
    });

    moreButton.addEventListener('click', (e) => {
        e.preventDefault();
        secondary.classList.toggle('hidden');
    });

    function collapse() {
       let stopWidth = moreButton.offsetWidth;
       const navBarWidth = navBar.offsetWidth;
       let hiddenItems = [];

       allLinks.forEach(link => {
           link.classList.remove('hidden');
       });

       primaryItems.forEach((item, i) => {
           if (navBarWidth >= stopWidth + item.offsetWidth) {
               stopWidth += item.offsetWidth;
               console.log(navBarWidth);
           } else {
               item.classList.add('hidden');
               hiddenItems.push(i);
           }

           console.log(`navBar ${navBarWidth}`);
           console.log(`stop ${stopWidth}`);
       });

       if (!hiddenItems.length) {
           moreLi.classList.add('hidden');
       } else {
            moreLi.classList.remove('hidden');
           secondaryItems.forEach((item, i) => {
               if (!hiddenItems.includes(i)) {
                   item.classList.add('hidden');
               }
           });
       }
    }

    collapse();
    window.addEventListener('resize', collapse);

})();