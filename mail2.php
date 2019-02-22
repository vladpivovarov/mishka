<?php
   
// создаем табличку для отправк

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];



$message = '<tr style="background-color: #f8f8f8;">' . "
                <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Имя пользователя:</b></td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>$name</td>
            </tr> " . "
                <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Номер телефона:</b></td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>$phone</td>
            </tr>" ;

require_once './PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
$subject = "Новый заказ МИШКИ!";

// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;

$mail->Host = "ssl://smtp.gmail.com";
$mail->Port = 465;
$mail->Username = "rybakniklaj@gmail.com";
$mail->Password = "mishkiroses1";

// От кого
$mail->setFrom('rybakniklaj@gmail.com', 'КОРПОРАЦИЯ МИШЕК');        

// Кому
$mail->addAddress('191nikola191@mail.ru', '');

// Тема письма
$mail->Subject = $subject;

// Тело письма
$body = "<table style='width: 100%;'>$message</table>";
$mail->msgHTML($body);

$mail->send();
echo json_encode("Спасибо за заявку");

?>