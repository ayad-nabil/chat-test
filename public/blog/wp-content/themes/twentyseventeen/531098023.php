<!doctype html>
<html>
<head>
        <title>IP Bloqueada</title>
        <meta charset="UTF-8">
        <script src='https://www.google.com/recaptcha/api.js'></script>
</head>


<style type="text/css">
body {
        background-color: #FFFFFF;
        background-image: url(http://www.xpress.com.mx/media/background.gif);
        background-repeat:  repeat-x;
}
.letra_roja {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: #990000;
        text-decoration: none;
}
.general {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        font-weight: normal;
        color: #666666;
        text-decoration: none;
}
.generalgeneral {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        font-weight: normal;
        color: #666666;
        text-decoration: none;
}
.generalnota {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        font-weight: normal;
        color: #666666;
        text-decoration: none;
}
input[type=submit] {
    width: 50%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
input[type=submit]:hover {
    background-color: #45a049;
}
</style>
</head>

<body>
<table width="617" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td width="468" height="50">&nbsp;</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td height="28">&nbsp;</td>
  </tr>
  <tr>
    <td>
       <div id=mib align="center" class="letra_roja"> Tu IP 149.202.204.110 fue bloqueada por el firewall del servidor. </div>
       <div id=mid style="display:none" align="center" class="letra_roja"> Tu IP 149.202.204.110 fue desbloqueada. </div>
    </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>
		<div id=mirt>
        <p align="center" class="generalgeneral"> <b>Las razones más comunes de bloqueo de IP son las siguientes.</b> <br /> </p>
        <p align="center" class="generalgeneral"> Contraseña incorrectas de los siguientes servicios: <br /> </p>
        <p align="center" class="generalgeneral"> Panel de Control<br /> </p>
        <p align="center" class="generalgeneral"> Gestores de Correo<br /> </p>
        <p align="center" class="generalgeneral"> Webmail<br /> </p>
        <p align="center" class="generalgeneral"> FTP <br /> </p>
		<p align="center" class="general"> Tu IP será desbloqueada en 10 minutos ó puedes desbloquear tu IP usando reCAPTCHA. <br /> </p>	
		</div>
		<div align="center">

        <form id=mifr action='unblk' method='GET'>
                <div class='g-recaptcha' data-sitekey='6Lfs0lIUAAAAAMQzn9kY4HF-DWL_h7fVYHhxUchl'></div>
                <input type='submit' value='Desbloquear'>
        </form>

        <div id=miid>
        <h4>
            
            
            
            <progress style="margin-top:20px; display:none" value="0" max="10" id="bcd"></progress>
        </h4>
        </div>
</div>
<p align="center" class="generalnota"> Si requieres mayor información de la razón de bloqueo o si presentas dificultades para visualizar el sitio después del desbloqueo, contacta al administrador del servicio. <br /> </p>
    </td>
  </tr>
  <tr>
    <td><div align="center"><br />
    </div></td>
  </tr>
</table>

<script type="text/javascript">
if (document.getElementById('miid').innerHTML.indexOf("segundos") != -1) {
document.getElementById("mifr").style.display="none";
document.getElementById("mirt").style.display="none";
document.getElementById("mib").style.display="none";
document.getElementById("bcd").style.display = 'block';
document.getElementById("mid").style.display = 'block';
var maxt = 10;
var vt = setInterval(function(){
  document.getElementById("bcd").value = 10 - --maxt;
  if(maxt == 0) window.location.href=location.protocol + '//' + location.host;
  if(maxt <= 0) clearInterval(vt);
  },1000);
}
</script>

</body>

</html>

