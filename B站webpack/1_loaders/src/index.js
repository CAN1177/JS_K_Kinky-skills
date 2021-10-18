import avatar from './avatar.jpg';
import Header from './Header.vue';
import Content from './Content.js';

var img = new Image();
img.src = avatar;

var app = document.getElementById('app');
app.appendChild(img);
