import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '../sass/style.scss';
import '../css/style.css';


import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import '@fortawesome/fontawesome-free/js/all.min.js';

//webpack jquery ui 

$(function () {
    //لجعل ايقونة عربة الشراء عند المرور عليها تظهر جمله "عربة الشراء"
    $('[data-toggle="tooltip"]').tooltip()
  })

