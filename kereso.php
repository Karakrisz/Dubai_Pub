<?php

$con = new mysqli('localhost', 'root', '', 'dubai');
$data = "";
if (isset($_POST['search'])) {
  $set = $_POST['search'];
  $set = preg_replace("#[^0-9a-z]#i", "", $set);
  $query = "select valami from etlap where valami LIKE'%$set%'";
  $result = mysqli_query($con, $query);
  $count = mysqli_num_rows($result);

  if ($count > 0) {
    while ($row = mysqli_fetch_array($result)) {
      $data = $data . "<div>" . $row['valami'] . "</div>";
    }
  } else {
    echo "Nincs találat!";
  }
}
?>


<?php echo $data; ?>
