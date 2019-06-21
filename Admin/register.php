<!DOCTYPE HTML>
<html>
<head>
  <title>Upload form </title>
</head>

<body>

  <p><h2>Children Upload form</h2> </p>
  <form action="insert.php" method="POST">
    <table>
      <tr>
        <td>Name: </td>
        <td><input type="text" name="name" required></td>
      </tr>


      <tr>
        <td>DOB: </td>
        <td><input type="date" name="dob" required></td>
      </tr>

      <tr>
        <td>Sex :</td>
        <td>
          <input type="radio" name="sex" value="M" required>Male
          <input type="radio" name="sex" value="F" required>Female
          <input type="radio" name="sex" value="O" required>Others
        </td>
      </tr>
      <tr>
        <td>State :</td>
        <td><input type="text"name="state" required></td>
      </tr>
      <tr>
        <td>city: </td>
        <td><input type="text" name="city" required></td>
      </tr>
    </td>
    <tr>
        <td>Tags: </td>
        <td><input type="text" name="tags" required></td>
      </tr>
      <tr>
        <td>One Liners </td>
        <td><input type="text" name="one_liner" required></td>
      </tr>


    <tr>
    <td>Description: </td>
    <td><input type="text" name="descri" required></td>
  </tr>
  <tr>
        <td>Fund Target: </td>
        <td><input type="number" name="fund_target" required></td>
      </tr>

<tr>
        <td>Achievements: </td>
        <td><input type="text" name="achi" required></td>
      </tr>


</td>
  <td>Image: </td>
  <td><input type="file"></td>
</tr>
</td>
</br>
<td>Click here to submit</td>
<td>  <input type="submit"></td>
</tr>
</td>
</form>
  </body>
</html>
