const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item');

container.onclick = e => {
      const elClass = e.target.classList;
      if (!elClass.contains('active')) {
            items.forEach(
                  item => item.classList.remove('active')
            );
            elClass.add('active');
      }

      // Clicking out
      // window.addEventListener('click', function (e) {
      //       if (!document.querySelector('.rating').contains(e.target)) {
      //             elClass.remove('active');
      //       }
      // });
};