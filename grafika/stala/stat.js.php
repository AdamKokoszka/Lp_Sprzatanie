<?
 
  $jest = $_COOKIE["DRIMOstat"];
  setcookie("DRIMOstat", time(), time()+3600*24);

?>
<!--
  $("#statDrimo").html('<img width="1" height="1" src="/data/stat.php?n=<?=($jest ? 0 : 1 )?>&i=<?=$_SERVER["REMOTE_ADDR"]?>&p=<?=$_SERVER["HTTP_USER_AGENT"]?>&u='+escape(document.location)+'&r='+escape(document.referrer)+'" />').hide();
// --> 