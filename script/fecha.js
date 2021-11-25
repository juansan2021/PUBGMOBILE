var f= new Date();
                var meses=new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");

                document.write('<div class="mifecha">');
                document.write('<div class="anno">'+ f.getFullYear()+'</div>');
                document.write('<div class="dia">'+ f.getDate()+ '</div>');
                document.write('<div class="mes">'+ meses[f.getMonth()]+'</div>');
                document.write('<div>')
