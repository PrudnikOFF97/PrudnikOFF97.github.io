window.addEventListener("DOMContentLoaded", function() {
    var img = document.getElementsByClassName('widgets__img');
    let left = 0;
    img[0].classList.add("widgets__img_position_"+left);
    let center = 1;
    img[1].classList.add("widgets__img_position_"+center);
    let right = 2;
    img[2].classList.add("widgets__img_position_"+right);
    document.getElementsByClassName('widgets__arrow_right')[0].onclick = function() {
        img[0].classList.remove("widgets__img_position_"+left);
        img[1].classList.remove("widgets__img_position_"+center);
        img[2].classList.remove("widgets__img_position_"+right);
        left++;
        center++;
        right++;
        if (left>2) {
            left=0;
        }
        if (center>2) {
            center=0;
        }
        if (right>2) {
            right=0;
        }
        img[0].classList.add("widgets__img_position_"+left);
        img[1].classList.add("widgets__img_position_"+center);
        img[2].classList.add("widgets__img_position_"+right);

    }
    document.getElementsByClassName('widgets__arrow_left')[0].onclick = function() {
        img[0].classList.remove("widgets__img_position_"+left);
        img[1].classList.remove("widgets__img_position_"+center);
        img[2].classList.remove("widgets__img_position_"+right);
        left--;
        center--;
        right--;
        if (left<0) {
            left=2;
        }
        if (center<0) {
            center=2;
        }
        if (right<0) {
            right=2;
        }
        img[0].classList.add("widgets__img_position_"+left);
        img[1].classList.add("widgets__img_position_"+center);
        img[2].classList.add("widgets__img_position_"+right);

    }

});