const packages = document.querySelectorAll('.package');


// package-rating mt30px; package-title mb20px; package-description mb65px; info mb40px;

packages.forEach((package) => {
    const text = package.childNodes[5],
        // rating = text.childNodes[1],
        // title = text.childNodes[3],
        // info = text.childNodes[7],
        descritption = text.childNodes[5],
        image = package.childNodes[3];
    console.log(package.childNodes);
    package.addEventListener('click', () => {
        package.classList.toggle('clicked');

        let width = document.body.clientWidth,
            max = width >= 768 ? '500px' : '710px';

        package.style.maxHeight = max;

        if (width >= 768) {
            if (!package.classList.contains('clicked')) {
                descritption.classList.toggle('show');
                text.classList.toggle('package-top');
                image.classList.toggle('overflow');
                setTimeout(() => {
                    package.classList.toggle('width-700');
                    text.classList.toggle('package-left');
                }, 600);

            } else {
                package.classList.toggle('width-700');
                text.classList.toggle('package-left');
                setTimeout(() => {
                    text.classList.toggle('package-top');
                    image.classList.toggle('overflow');
                    descritption.classList.toggle('show');
                }, 600);
            }
        } else {
            descritption.classList.toggle('show');
        }
    });
});