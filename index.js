var button = $('button');

var replace = $(`#replacement`)

var prize =["a purple eraser!", "a winky elephant!", "some enlongated grass!", "an extended egg!", "a fellow tribe!", "some smelly glass!", "a wild wrench!", "a birthday bottle!", "some goofy rubber!", "some talkative chocolate!", "a horse addiction!", "some moldy paper!", "a frozen door!", "some witty jelly!", "a breezy inchworm!","a stubborn baseboard!", "a screaming crayon!", "a statisfied cabinet!", "an original foot!", "some reversed cloth!", "a nervous bike!", "an expensive speck of dirt!", "a curious suit!", "a dramatic refrigerator!", "an aggressive harbor!", "a serious drop of orange juice!"];

button.on("click", prizeTime);

function prizeTime() {
  var random = Math.random()*26

  var floor = Math.floor(random)

  replace.text(prize[floor])
}
