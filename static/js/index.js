let flame = document.getElementById('fire');

function changeCs()
{
    document.getElementById('bos-2').innerHTML = 'Цезий (Cs)';
    document.getElementById('bos-6').innerHTML = 'Голубое окрашивание';
    flame.src='../static/Images/blueFlame.gif';
}

function changeLi()
{
    document.getElementById('bos-2').innerHTML = 'Литий (Li)';
    document.getElementById('bos-6').innerHTML = 'Красно-малиновое окрашивание';
    flame.src='../static/Images/litiFlame.gif'
}