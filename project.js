var player_1 = prompt("Player_1 Enter your Name ")
alert(player_1+" You will be Red")
var player_2 = prompt("Player_2 Enter your Name ")
alert(player_2+" You will be Blue")

// color of players
var color_1 = 'rgb(122, 7, 7)'
var color_2 = 'rgb(7, 40, 74)'

// getting table rows

var table = $("table tr")

// changing color

function bg_color_change(row,col,colr){
  return table.eq(row).find("td").eq(col).find("button").css("background-color",colr)
}

// reporting the background color of button

function report_bg_color(row,col){
  return table.eq(row).find("td").eq(col).find("button").css("background-color")
}

// getting the color from a column which is currently gray and returning that row

function get_gray(col){
  for (var i=5; i > -1; i--) {
      var x = report_bg_color(i,col)
      if (x === 'rgb(128, 128, 128)') {
        return i
      }
  }
}

// checking the color match

function match(one,two,three,four){
  return (one === two && one === three && one === four && one != 'rgb(128, 128, 128)' && one != undefined )
}

// checking horizontal check

function horizontal_check ()
{
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 4; j++) {
      if (match(report_bg_color(i,j),report_bg_color(i,j+1),report_bg_color(i,j+2),report_bg_color(i,j+3)))
      {
        // report_bg_color(i,j)
        return true
      }
    }
  }
}

// checking vertical

function vertical_check ()
{
  for (var i = 0; i < 7; i++){//column
    for (var j = 0; j < 3; j++){ //row
      if (match(report_bg_color(j,i),report_bg_color(j+1,i),report_bg_color(j+2,i),report_bg_color(j+3,i)))
      {
        // report_bg_color(j,i)
        return true
      }
    }
  }
}

var currentPlayer = 1
var currentName = player_1
var currentColor = color_1

$("h3").text(player_1+" It's your turn pick a color to drop in !")

$(".board button").on("click",function(){
  var col = $(this).closest("td").index()
  var bottonAvail = get_gray(col)

  bg_color_change(bottonAvail,col,currentColor)
  if (horizontal_check() || vertical_check())
  {
    console.log("about to show");
    $("h1").text(currentName+" You have Won !")
    $("h2").fadeOut("fast")
    $("h3").fadeOut("fast")
    $("table").fadeOut("fast")

  }
  currentPlayer *= -1
  if(currentPlayer === 1)
  {
  $("h3").text(player_1+" It's your turn pick a color to drop in !")
  currentName = player_1
  currentColor = color_1
  }
  else {
    {
      $("h3").text(player_2+" It's your turn pick a color to drop in !")
      currentName = player_2
      currentColor = color_2
    }
  }

})
